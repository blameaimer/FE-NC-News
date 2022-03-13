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
      <Card.Title>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/articles/${article.article_id}/${article.topic}`,
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
          {article.author}
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/articles/${article.article_id}/${article.topic}`,
            }}
          >
            <FaRegCommentDots className="comment-icon" />{" "}
            {article.comment_count}
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
}
