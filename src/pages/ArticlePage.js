import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
  //useParams and destructure to get param string from path in app.js route
  //no need to have separate page for each article b/c useParams
    const { articleId }= useParams();
    const article = articles.find(article => article.name === articleId);

    return (
    <>
        <h1>{article.title}</h1>
        {article.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
    </>
    );
}

export default ArticlePage;