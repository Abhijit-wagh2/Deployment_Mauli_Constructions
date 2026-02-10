import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import Products from './Admin/Product.js';
import BlogSection from './Admin/Section/BlogSection.js';
import ArticleSection from './Admin/Section/ArticleSection.js';
import '../styles/Homepage.css';

function HomePage() {
  return (
      <Layout>
      <section className="home-admin-cta">
        <div className="home-admin-cta__content">
          <p className="home-admin-cta__eyebrow">Admin Access</p>
          <h2>Manage projects and content from one secure dashboard</h2>
          <p>
            Use the admin panel to create projects, publish blogs, and organize categories.
          </p>
          <Link to="/login" className="home-admin-cta__button">
            Go to Admin Panel
          </Link>
        </div>
      </section>
      <Products/>
      <BlogSection/>
      <ArticleSection/>
      </Layout>
  )
}

export default HomePage
