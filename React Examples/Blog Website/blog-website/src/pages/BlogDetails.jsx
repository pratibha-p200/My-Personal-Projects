import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Blog Details</h1>

      <h2>Blog ID: {id}</h2>

      <p>
        Here you can display the full blog content.
      </p>
    </div>
  );
}

export default BlogDetails;