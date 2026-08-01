import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "b9850a80fbd34033b9a2570b1bb106b4";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {                        //We use async because fetching data from an API takes time.
    try {
      const response = await fetch(                          // await pauses until the response is received
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );

      const data = await response.json();

      setArticles(data.articles);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>News App</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="news-list">
          {articles.map((article, index) => (
            <div className="card" key={index}>
              <img
                src={article.urlToImage}
                alt={article.title}
              />

              <h2>{article.title}</h2>

              <p>{article.description}</p>

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;