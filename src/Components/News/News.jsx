// src/News.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../Home page/Navbar/Navbar';
import './News.css';

const fetchNews = async (query, page) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&page=${page}&sortBy=publishedAt&apiKey=8e774079b4594ba68e5e88fcd52ffa80`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const news = await response.json();
    return news.articles.filter(article => article.urlToImage); // Filter articles with valid urlToImage
};

const News = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [query, setQuery] = useState(searchParams.get('query') || "NASA and SpaceX");

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await fetchNews(query, page);
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        getNews();
    }, [query, page]); // Add query and page as dependencies to re-fetch news when they change

    const handleQueryChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setPage(1); // Reset to first page whenever the query changes
        setSearchParams({ query: newQuery, page: 1 });
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
        setSearchParams({ query, page: newPage });
    };

    return (
        <div>
            <Navbar />
            <div className="news-content">
                <div className="heading">
                    <h1>Latest Space News</h1>
                    <p>Stay up-to-date with the latest content from NASA as we explore the universe and discover more about our home planet.</p>
                </div>

                <div className="news-cards">
                    {news.length > 0 ? (
                        news.map((article, index) => (
                            <div className="news-card" key={index}>
                                {article.urlToImage && ( // Render card only if urlToImage is available
                                    <>
                                        <img src={article.urlToImage} alt={article.title} />
                                        <div className="abt-news">
                                            <h2>{article.title}</h2>
                                            <p>{article.description}</p>
                                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No news available</p>
                    )}
                </div>
            </div>
            <nav className='pages'>
                <ul className="pagination">
                    <li className={`page-item ${page <= 1 ? 'disabled' : ''}`} onClick={() => page > 1 && handlePageChange(page - 1)}>
                        <a id='pre' className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#" onClick={() => handlePageChange(1)}>1</a></li>
                    <li className="page-item"><a className="page-link" href="#" onClick={() => handlePageChange(2)}>2</a></li>
                    <li className="page-item"><a className="page-link" href="#" onClick={() => handlePageChange(3)}>3</a></li>
                    <li className="page-item" onClick={() => handlePageChange(page + 1)}>
                        <a id='next' className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default News;
