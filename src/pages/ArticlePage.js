import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
    //useParams and destructure to get param string from path in app.js route
    //no need to have separate page for each article b/c useParams
    const { articleId }= useParams();

    useEffect(() => {
        //need internal function b/c fo async/await
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        //call async function to make it run
        loadArticleInfo();
    });
    

    const article = articles.find(article => article.name === articleId);

    if( !article) {
        return <NotFoundPage />
    }
    return (
    <>
        <h1>{article.title}</h1>
        <p>This article has {articleInfo.upvotes} upvotes</p>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
    </>
    );
}

export default ArticlePage;