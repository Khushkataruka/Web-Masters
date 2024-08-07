import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../HomePage/Navbar/Navbar';
import './News.css';
import Footer from '../Footer/Footer';

// Function to fetch news articles based on query and page number
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

    // State variables
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [query, setQuery] = useState(searchParams.get('query') || "NASA and SpaceX");
    const [searchInput, setSearchInput] = useState(query); // Separate state for input
    const [loading, setLoading] = useState(false); // Loader state
    const [error, setError] = useState(null); // Error state

    // Fetch news whenever the query or page changes
    useEffect(() => {
        const getNews = async () => {
            setLoading(true); // Start loading
            setError(null); // Reset error
            try {
                const data = await fetchNews(query, page);
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
                setError("Failed to fetch news. Please try again later.");
            }
            setLoading(false); // End loading
        };

        getNews();
    }, [query, page]);

    useEffect(() => {
        if (window.location.pathname === "/news") {
            document.body.style.backgroundColor = "white";
        }
    }, []);

    // Handle changes in the search input
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setQuery(searchInput); // Update query with the search input value
        setPage(1); // Reset to first page whenever the query changes
        setSearchParams({ query: searchInput, page: 1 });
    };

    // Handle pagination changes
    const handlePageChange = (newPage) => {
        setPage(newPage);
        setSearchParams({ query, page: newPage });
    };

    return (
        <div>
            <Navbar />
            <div className="news-real">

                <div className="news-content">
                    <div className="heading">
                        <h1>Latest Space News</h1>
                        <p>Stay up-to-date with the latest content from NASA as we explore the universe and discover more about our home planet.</p>
                    </div>

                    <div className="search-bar">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                placeholder="Search for news..."
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    {localStorage.getItem("isLogged") === "true" ? (
                        <div className="news-cards">
                            {loading ? (
                                <div className="spinner-container">
                                    <div className="spinner"></div>
                                </div>
                            ) : news.length > 0 ? (
                                news.map((article, index) => (
                                    <div className="news-card" key={index}>
                                        {article.urlToImage && (
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
                    ) : (
                        <h1 className="checklogin">Login To Watch News</h1>
                    )}
                </div>

                {localStorage.getItem("isLogged") === "true" &&
                    (
                        <nav className='pages'>
                            <ul className="pagination">
                                <li className={`page-item ${page <= 1 ? 'disabled' : ''}`} onClick={() => page > 1 && handlePageChange(page - 1)}>
                                    <a id='pre' className="page-link" href="#" aria-label="Previous Page">Previous</a>
                                </li>
                                {[1, 2, 3].map((pageNumber) => (
                                    <li className={`page-item ${page === pageNumber ? 'active' : ''}`} key={`page-${pageNumber}`} onClick={() => handlePageChange(pageNumber)}>
                                        <a className="page-link" href="#">{pageNumber}</a>
                                    </li>
                                ))}
                                <li className="page-item" onClick={() => handlePageChange(page + 1)}>
                                    <a id='next' className="page-link" href="#" aria-label="Next Page">Next</a>
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </div>
        </div>
    );
};

export default News;
