import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';
import Hariom from '../images/avatar.png'; // Adjust the path as needed
import Himanshu from '../images/avatar.png'; 
import Dharani from '../images/avatar.png'; 
import Ashwin from '../images/avatar.png'; 
import Ujjwal from '../images/avatar.png';
import arullaln from '../images/avatar.png';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">

            {/* Hero Section */}
            <div className="relative py-24 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600">
                <h1 className="text-5xl md:text-7xl font-bold">Empowering Your Forecast</h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto">
                    Shaping the future of weather forecasting with next-gen technology.
                </p>
            </div>

            {/* Our Mission Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Our mission is to make weather forecasting more accurate, reliable, and accessible through cutting-edge artificial intelligence and machine learning. WeatherAI is dedicated to helping you make informed decisions, no matter the conditions.
                </p>
            </section>

            {/* Technology Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Technology Behind the Forecasts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Globe, title: "Big Data", description: "Collecting data from satellites, sensors, and global weather stations." },
                        { icon: Zap, title: "AI-Powered Modeling", description: "Our AI models analyze patterns for high-accuracy predictions." },
                        { icon: Shield, title: "Military-Grade Security", description: "We prioritize user privacy and data security." }
                    ].map((tech, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 transform transition-all duration-1000 hover:scale-105"
                        >
                            <tech.icon className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                            <p className="text-gray-300">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Why Choose WeatherAI?</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
                    Experience hyper-local, AI-driven forecasts with real-time updates and unparalleled accuracy. Here’s why WeatherAI is different.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">Hyper-Local Forecasts</h3>
                        <p className="text-gray-300">Precision weather forecasts tailored to your exact location.</p>
                    </div>
                    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
                        <p className="text-gray-300">Stay ahead with continuous updates, every second counts.</p>
                    </div>
                    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">Data Privacy First</h3>
                        <p className="text-gray-300">Your data remains private with our military-grade encryption.</p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
                    Our team of AI engineers, meteorologists, and data scientists are dedicated to bringing you the most accurate forecasts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { name: "Hariom Kumar", title: "Software Developer", image: Hariom },
                        { name: "Himanshu kumar", title: "AI Researcher", image: Himanshu },
                        { name: "Dharani", title: "Data Scientist", image: Dharani },
                        { name: "Arullaln", title: "Frontend Developer", image: arullaln },
                        { name: "Ujjwal kaushik", title: "Back-end Developer", image: Ujjwal },
                        { name: "Ashwin sundar", title: "Product Manager", image: Ashwin },
                    ].map((team, index) => (
                        <div key={index} className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl">
                            {/* Image Section */}
                            <img src={team.image} alt={team.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                            <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                            <p className="text-gray-300">{team.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-4xl font-bold mb-6">Ready to Experience Future Forecasting?</h2>
                <p className="text-gray-200 max-w-3xl mx-auto text-lg mb-8">
                    Start using WeatherAI today and stay one step ahead of the weather with AI-powered insights.
                </p>
                <button className="px-8 py-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 text-white font-bold">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default AboutPage;
