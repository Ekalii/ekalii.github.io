import React from 'react';
import './blog.css';
import { blogs } from '../../portfolio';
import BlogCard from '../blogcard/blogcard';

function Blog() {
    return (
        <section className="section--blog" id="blog">
            <div className="inner">
                
                <div className="blog-title">
                    <p>{blogs.title}</p>
                </div>

                <div className="blog-subtitle">
                    <p>{blogs.subTitle}</p>
                </div>

                <div className="blog-content">
                    {blogs.lists.map(list => {
                        return <BlogCard blogs={list} key={list.key} />
                    })}
                </div>
                
            </div>
        </section>
    );
}
export default Blog;