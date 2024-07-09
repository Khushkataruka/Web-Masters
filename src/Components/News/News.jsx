// src/News.js
import React, { useEffect, useState } from 'react';
import Navbar from '../Home page/Navbar/Navbar';
import './News.css';

const fetchNews = async (query, page) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&page=${page}&sortBy=publishedAt&apiKey=8e774079b4594ba68e5e88fcd52ffa80`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const news = await response.json();
    pre.href = `/news/?page=${page > 1 ? page - 1 : "#"}`
    next.href = `/news/?page=${page + 1}`
    return news.articles.filter(article => article.urlToImage); // Filter articles with valid urlToImage
};

const News = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        let page = parseInt(window.location.href.split("?")[1].split("&")[0].split("=")[1])
        // let query = window.location.href.split("?")[1].split("&")[1].split("=")[1]


        const getNews = async () => {
            try {
                const data = await fetchNews("Nasa And SpaceX", page);
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        getNews();
        const articlesperpage = 100
        const totalarticles = News.length
        const totalpages = Math.ceil(totalarticles / articlesperpage)



    }, []);

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
                    <li className="page-item"><a id='pre' className="page-link" href="#" >Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#" >1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a id='next' className="page-link" href="#" >Next</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default News;
