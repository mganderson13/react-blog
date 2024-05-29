import articles from "./article-content";
import { Link } from "react-router-dom";

const ArticlesListPage = () => {
    return (
    <>
        <h1>Articles</h1>
        {/* map through articles to display preview list */}
        {articles.map(article => (
            // to prop fills in param with article name from imported articles data
        <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
        ))}
    </>
    );
}

export default ArticlesListPage;