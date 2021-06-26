## 1. useState()

- Là một hook cơ bản.
- Giúp mình có thể dùng state trong functional component
- Input: initialState (giá trị hoặc function)
- Output: Một mảng có 2 phần tử tương ứng cho state và setState
- Cách dùng: `const [name, setName] = useState('Cuong')`

```js
constructor(){
    super()
    this.state={
        name: 'Cuong'
    }
    setState({
        name: ...name
    })
    setName({name: 'cuong 1'})
}
```

- Replace:

![Replace](https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/203078352_199704008822241_7894379277646413130_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=wIC3k92QrTkAX-r0BdT&_nc_ht=scontent.fdad2-1.fna&oh=e00692a50be9f62d8309bc54a2936bbf&oe=60DAC777)

- Khi `setState` thì nó không `merge` lại mảng cũ mà nó `replace` lại tức là ghi đè lên mảng cũ như ví dụ trên sẽ bị mất cái `name`
- Cách giải quyết:

![Replace](https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/206079552_333209021705681_498898820625577501_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=jJumf2TNiEUAX8k1BNq&_nc_ht=scontent-hkt1-1.xx&oh=480b9b307ee106a1182b3e828cbf221c&oe=60D9548A)

- Initial state chỉ dùng cho lần đầu, những lần sau bị bỏ rơi.
- Khi chúng ta dùng callback thì chỉ thực thi 1 lần (ví dụ như bên dưới).

![Replace](https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/204159410_513456739857520_4068906436184721026_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ZsGBKKt2hbEAX84l3rT&_nc_ht=scontent.fdad2-1.fna&oh=e3b45c42e8ed5b4853ad0d7bd25ddeec&oe=60DB1B5D)

### Tổng kết useState()

- useState() giúp functional component có thể dùng state.
- useState() trả về một mảng 2 phần tử [name, setName].
- useState() áp dụng replacing thay vì merging như bên class component.
- Initial state callback chỉ thực thi 1 lần đầu.

## 2. useEffect

### a. Side effects là gì? có bao nhiêu loại

#### Side effects là gì?

- Gọi API lấy dữ liệu.
- Tương tác với DOM.
- Subscription.
- setTimeout, setInterval.

#### Theo tài liệu chính thức thì chia làm 2 loại side effects:

- Effects `không cần clean up`: gọi API, tương tác với DOM.
- Effects `cần clean up`: subcription, setTimeout, setInterval/

[Ref: https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html)

### b. Giới thiệu hook useEffect()

- Là một hook cơ bản trong React Hook.
- Sử dụng cho `side effects`.
- Mỗi hook gồm 2 phần: `side efect` và `clean up (optional)`.
- Được thực thi sau mỗi lần render.
- Được thực thi ít nhất một lần sau lần render đầu tiên.
- Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi.
- `Effect clean up` sẽ được thực thi trước run `effect` lần tiếp theo hoặc `unmount`.
- Cú pháp:

```js
function useEffect(callback, dependencies) {}
```

#### Ý nghĩa của tham số thứ 2 khi sử dụng useEffect()

##### - Khi không có tham số thứ 2

- Khi render lần đầu thì sẽ render trước sau đó sẽ chạy luôn useEffect
- Mỗi lần re-render mà không hay có thay đổi state không liên quan đến useEffect thì cũng chạy luôn useEffect.

```js
import React, { useEffect, useState } from "react";

export const EffectDemo = () => {
  //State
  const [fullName, setFullName] = useState({
    name: "name",
    familyName: "family",
  });
  const [title, setTitle] = useState("useEffect() in Hooks");

  //useEffect
  useEffect(
    () => {
      console.log(fullName.name);
    }
    // Không có tham số thứ 2
    // Khi render lần đầu thì sẽ render trước sau đó sẽ chạy luôn useEffect
    // mỗi lần re-render mà không hay có thay đổi state không liên quan đến useEffect thì cũng chạy useEffect
  );

  return (
    <div>
    {console.log({fullName.familyName})}
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
```

##### - Khi Tham số thứ 2 là mảng rỗng

- Thì lúc này `useEffect` hoạt động giống như `componentDidMount` trong `class component`.
- Thì useEffect sẽ chạy 1 lần duy nhất đó là sau khi render lần đầu tiên.

```js
import React, { useEffect, useState } from "react";

export const EffectDemo = () => {
  //State
  const [fullName, setFullName] = useState({
    name: "name",
    familyName: "family",
  });
  const [title, setTitle] = useState("useEffect() in Hooks");

  //useEffect
  useEffect(
    () => {
      console.log(fullName.name);
    }
    // Tham số thứ 2 là một mảng rỗng
    // Thì useEffect sẽ chạy 1 lần duy nhất đó là sau khi render lần đầu tiên
  ,[]);

  return (
    <div>
    {console.log({fullName.familyName})}
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
```

##### - Khi Tham số thứ 2 là mảng chứa những state

- Thì lúc này `useEffect` hoạt động giống như `componentDidUpdate` trong `class component`.
- Mảng chứa những state cho biết rõ chỉ gọi useEffect() khi giá trị phần tử state trong mảng thay đổi.

```js
import { useState, useEffect } from "react";
import "./App.scss";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Quốc Cường" },
    { id: 2, title: "Bảo Nguyễn" },
    { id: 3, title: "Bom Heo" },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValue) {
    console.log("form submit", formValue);
    const newTodo = { id: todoList.length + Math.random(), ...formValue };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  useEffect(() => {
    console.log(todoList);
    // Lúc này khi todoList thay đổi thì useEffect sẽ được chạy
  }, [todoList]);

  return (
    <div className="app">
      {console.log("render")}
      {/* <ColorBox /> */}
      <h1>Todo list</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
```

##### - Clear up

- Khi chúng ta component bị unmount khỏi trình duyệt mà chúng ta vẫn chạy setState trong component đó sẽ bị lỗi vì thế chúng ta cần clear nó đi
- Trường hợp này chúng ta sẽ clear up bằng cách

```js
useEffect(() => {
  const formatTimePresent = (timePresent) => {
    const hours = `0${timePresent.getHours()}`.slice(-2);
    const minutes = `0${timePresent.getMinutes()}`.slice(-2);
    const seconds = `0${timePresent.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };
  // Xử lý ví dụ như

  const interval = setInterval(() => {
    const timePresent = new Date();
    const timePresentFormat = formatTimePresent(timePresent);
    setTimeNow(timePresentFormat);
    console.log(timePresentFormat);
  }, 1000);

  return () => {
    // clean up
    clearInterval(interval);
  };
});
```

- code demo

```js
import { useEffect, useState } from "react";

const formatTimePresent = (timePresent) => {
  const hours = `0${timePresent.getHours()}`.slice(-2);
  const minutes = `0${timePresent.getMinutes()}`.slice(-2);
  const seconds = `0${timePresent.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
};

export default function Clock() {
  const [timeNow, setTimeNow] = useState("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timePresent = new Date();
      const timePresentFormat = formatTimePresent(timePresent);
      setTimeNow(timePresentFormat);
      console.log(timePresentFormat);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div>
      <p style={{ fontSize: "50px" }}>{timeNow}</p>
    </div>
  );
}
```

## 3. Memoization

- Tính toán và lưu kết quả cho từng bộ input.
- Khi gặp lại bộ input đã từng làm thì không tính toán lại, mà trả về kết quả sẵn có.

- Ví dụ:
- Lần đầu: add(1, 2) --> tính ra KQ = 3 và lưu lại.
- Lần hai: add(1, 2) --> đã từng làm, ko tính toán lại --> trả ngay về 3.

- Ví dụ đơn giản của memoization

```js
const addMemo = (a, b) => {
  // Init cache
  if (!addMemo.cache) {
    addMemo.cache = {};
  }
  // Return cache if found
  const key = `${a}_${b}`;
  const synmetricKey = `${b}_${a}`;
  if (addMemo.cache[key]) return addMemo.cache[key];
  if (addMemo.cache[synmetricKey]) return addMemo.cache[synmetricKey];
  // Calculate and save to cache
  const sum = a + b;
  addMemo.cache[key] = sum;
  addMemo.cache[synmetricKey] = sum;
  return sum;
};
addMemo(2, 3); // Tính toán và lưu cache, trả về 5
addMemo(3, 2); // Phát hiện đã có trong cache, trả về 5
addMemo(
  1,
  2
) // Ko có trong cache, tính toán, lưu cache và trả về 3
``;
```

## 4. Giới thiệu HOC(Higher Order Components) React.memo()

- `React.memo()` là một HOC, chứ ko phải `hooks`.
- `React.memo()` tương tự như `PureComponent`.
- `PureComponent` thì cho `class component`.
- `React.memo()` dùng cho `functional component`.
- Chỉ render lại component nếu props thay đổi.
- Sử dụng shallow comparison.

```js
// Class component - PureComponent
export default class Hero extends PureComponent {
 render() {
 return <div>Super hero!</div>
 }
}
// Functional component - React.memo
function Hero() {
 return <div>Super hero!</div>
}
export default React.memo(Hero);
```

- Memoization = trả về kết quả đã từng làm, không cần phải đi tính toán lại.
- Dùng cho các xử lý, tính toán nặng, tốn thời gian, tài nguyên.

## 5. useCallback()

- Là một react hooks giúp mình tạo ra một `memoized callback` và chỉ tạo ra callback mới khi
  dependencies thay đổi.
- Nhận vào 2 tham số: 1 là function, 2 là dependencies.
- Return memoized callback
- Chỉ tạo ra function mới khi dependencies thay đổi.
- Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.

```js
// Mỗi lần App re-render
// --> tạo ra một function mới
// --> Chart bị re-render
function App() {
  const handleChartTypeChange = (type) => {};
  return <Chart onTypeChange={handleChartTypeChange} />;
}
```

```js
// Mỗi lần App re-render
// --> nhờ có useCallback() nó chỉ tạo function một lần đầu
// --> Nên Chart ko bị re-render.
function App() {
  const handleChartTypeChange = useCallback((type) => {}, []);
  return <Chart onTypeChange={handleChartTypeChange} />;
}
```

## 6. useMemo()

- Là mộtreact hooks giúp mình tạo ra một memoized value và chỉ tính toán ra value mới khi
  dependencies thay đổi.
- Nhận vào 2 tham số: 1 là function, 2 là dependencies.
- Return memoized value
- Chỉ tính toán value mới khi dependencies thay đổi.
- Nếu dùng empty dependencies thì không bao giờ tính toán lại value mới.

```js
// Mỗi lần App re-render
// --> tạo ra một mảng mới
// --> Chart bị re-render do props thay đổi
function App() {
  const data = [{}, {}, {}];
  return <Chart data={data} />;
}
```

```js
// Mỗi lần App re-render
// --> nhờ có useMemo() nó chỉ tạo ra cái mảng 1 lần đầu
// --> Nên Chart ko bị re-render.
function App() {
  const data = useMemo(() => [{}, {}, {}], []);
  return <Chart data={data} />;
}
```

## 7. So sánh useCallback() vs useMemo()

### GIỐNG NHAU

- Đều áp dụng kĩ thuật memoization.
- Đều nhận vào 2 tham số: function và dependencies.
- Đều là react hooks, dùng cho functional component.
- Dùng để hạn chế những lần re-render dư thừa (micro improvements).

### KHÁC NHAU

![Ảnh khác nhau](https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/201772044_527392765271755_8468581365924181626_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=r1zIROLnzeoAX88_BXY&_nc_ht=scontent.fdad2-1.fna&oh=045239f7aecbcf07a2c70b257992c58c&oe=60DC5B77)

### Có nên sử dụng useCallback() vs useMemo() hay không?

- Không nên dùng cho tất cả components.
- Nên dùng cho: đồ thị, biểu đồ, animations, những component nặng phần render.
- Chỉ là micro improvements.
