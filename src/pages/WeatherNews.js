// src/pages/WeatherNews.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherNews = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const apiKey = ''; // Replace with your actual API key
    const newsApiUrl = 'https://newsapi.org/v2/everything';

    const fetchArticles = async (query) => {
        setLoading(true);
        try {
            const response = await axios.get(newsApiUrl, {
                params: {
                    q: query,
                    apiKey: apiKey,
                    language: 'en',
                },
            });
            setArticles(response.data.articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles('weather'); // Fetch initial articles on component mount
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchArticles(searchTerm || 'weather');
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full mix-blend-screen filter blur-xl animate-pulse"
                        style={{
                            backgroundColor: 'rgba(59, 130, 246, 0.15)',
                            width: Math.random() * 200 + 50 + 'px',
                            height: Math.random() * 200 + 50 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 2 + 's',
                            animationDuration: Math.random() * 3 + 2 + 's',
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-2xl mx-auto p-8 space-y-10 bg-slate-800/50 backdrop-blur-lg rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4">World Weather News</h1>

                <form onSubmit={handleSearch} className="mb-4">
                    <input
                        type="text"
                        placeholder="Search for news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                    <button type="submit" className="mt-2 w-full p-2 bg-blue-500 rounded hover:bg-blue-600">
                        Search
                    </button>
                </form>

                {loading ? (
                    <p>Loading articles...</p>
                ) : (
                    <div>
                        {articles.map((article, index) => (
                            <div key={index} className="mb-4 p-4 border-b border-gray-700">
                                <h2 className="text-xl font-semibold">{article.title}</h2>
                                <p className="text-gray-300">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                                    Read more
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherNews;
