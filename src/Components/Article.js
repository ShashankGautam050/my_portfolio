// Article.js
import React from 'react';

const Article = ({ title, content }) => {
    return (
        <div style={styles.articleContainer}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.content}>{content}</p>
        </div>
    );
};

const styles = {
    articleContainer: {
        padding: '20px',
        margin: '20px auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '800px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
        fontFamily: 'Arial, sans-serif', // Feel free to use any calligraphy font if preferred
    },
    content: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#666',
        fontFamily: 'Georgia, serif',
    },
};

export default Article;
