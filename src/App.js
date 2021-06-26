import { useState, useEffect } from "react";
import "./App.scss";
// import Clock from "./components/clock";
// import PostList from "./components/postList";
// import Pagination from "./components/pagination";
// import queryString from "query-string";
// import PostFiltersForm from "./components/postFiltersForm";
// import ColorBox from "./components/colorBox";
// import TodoList from "./components/todoList";
// import TodoForm from "./components/todoForm";
function App() {
  // TODO APP{
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "Quốc Cường" },
  //   { id: 2, title: "Bảo Nguyễn" },
  //   { id: 3, title: "Bom Heo" },
  // ]);

  // const handleTodoClick =(todo)=> {
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // const handleTodoFormSubmit=(formValue) =>{
  //   console.log("form submit", formValue);
  //   const newTodo = { id: todoList.length + Math.random(), ...formValue };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  // Fetch API
  // const [postList, setPostList] = useState([]);
  // // Pagination
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });
  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  //   title_like: "",
  // });

  // const handlePageChange = (newPage) => {
  //   setFilters({ ...filters, _page: newPage });
  // };

  // const handleFilterChange = (newFilter) => {
  //   console.log("newFilter", newFilter);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilter.searchTerm,
  //   });
  // };

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = queryString.stringify(filters);
  //       console.log(paramsString);
  //       const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       // console.log(responseJSON);
  //       // Destructuring copy data trong API vừa gọi ra object khác
  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       console.log(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log("Failed to fetch post list:", error.message);
  //     }
  //   }
  //   fetchPostList();
  // }, [filters]);

  const [flag, setFlag] = useState(true);

  return (
    <div className="app">
      {/* {console.log("render")} */}
      {/* <ColorBox /> */}
      {/* <h1>Todo list</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostFiltersForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {/* {flag && <Clock />}
      <button onClick={() => setFlag(false)}>change flag</button> */}
    </div>
  );
}
export default App;
