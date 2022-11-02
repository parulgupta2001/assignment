import "./mainContent.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function MainContent() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-10-02&sortBy=publishedAt&apiKey=a31566234ba547489e788093f36daade"
      );
      setNewsData(response.data.articles);
    })();
  }, [newsData]);

  return (
    <main>
      <div className="upper-content-container">
        <div className="main-content-header">Featured Artikel</div>
        <div className="news-content">
          <div className="main-news-content">
            <img
              className="main-news-content-img"
              src={newsData[0].urlToImage}
            />
            <div className="main-news-content-title">{newsData[0].title}</div>
            <div className="main-news-content-description">
              {newsData[0].description}
            </div>
          </div>
          <div className="side-content">
            {newsData.slice(1, 4).map((data) => (
              <div className="side-content-news">
                <img className="related-news-img" src={data.urlToImage} />
                <div className="related-news-title">{data.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lower-content-container">
        <div className="main-content-header">Artikel Terbaru</div>
        <div className="other-news-articles">
          {newsData.slice(4, 12).map((data) => (
            <div className="other-news-content">
              <img className="other-news-content-img" src={data.urlToImage} />
              <div className="other-news-content-title">{data.title}</div>
              <div className="other-news-content-description">
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
