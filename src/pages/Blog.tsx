import { useLocation, useParams } from "react-router-dom";

function Blog() {
  const { slug } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const filter = queryParams.get("filter");

  const search = queryParams.get("search");
  return (
    <>
      <h1>Blog: {slug}</h1>
      <h2> Query: {filter}</h2>
      <h2> Search: {search}</h2>
    </>
  );
}

export default Blog;
