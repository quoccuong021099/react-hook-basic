function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((item) => (
        <li key={item.id}> {item.title}</li>
      ))}
    </div>
  );
}

export default PostList;
