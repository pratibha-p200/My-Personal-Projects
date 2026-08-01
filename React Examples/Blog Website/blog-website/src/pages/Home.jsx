import BlogCard from "../components/BlogCard";

function Home() {
    const blogs = [
        {
            id: 1,
            title: "My First Blog",
            description: "This is the description of my first blog."
        },
        {
            id: 2,
            title: "My Second Blog",
            description: "This is the description of my second blog."
        },
        {
            id: 3,
            title: "My Third Blog",
            description: "This is the description of my third blog."
        },
    ];

    return (
        <div className="container">
            <h1>Latest Blogs</h1>

            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}

export default Home;