import {Link} from "react-router-dom";

function BlogCard({blog}) {
    return(
        <div className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
        </div>
    );
}

export default BlogCard;