import { Card } from "react-bootstrap";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineCreate, MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
export default function ArticelTitleCard({ article }) {
  return (
    <Card
      bg="dark"
      text="light"
      style={{ width: "100%" }}
      className={`${article.article_id}`}
    >
      <Card.Header>
        <h1 className="Welcome">Welcome to NC News</h1>
      </Card.Header>
      <Card.Title>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/articles/${article.topic}/${article.article_id}`,
          }}
        >
          {" "}
          <p className="title-main">{article.title}</p>
        </Link>
      </Card.Title>

      <p className="date-main">
        <MdUpdate />
        {article.created_at.slice(0, -14)}
      </p>
      <Card.Footer>
        <p className="author-comments">
          <MdOutlineCreate />
          {article.author} <FaRegCommentDots /> {article.comment_count}{" "}
        </p>{" "}
        {article.votes === 0 ? "" : article.votes}
      </Card.Footer>
    </Card>
  );
}
