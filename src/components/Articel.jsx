import { useEffect, useState } from "react";
import { selectArticel, selectComments } from "../api";
import { ArticelCard } from "./Articel-card";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";
import Commentbox from "./comment-box";
import { PostComment } from "./post-comment";
import { Spinner } from "react-bootstrap";
export default function Articel() {
  let { id, topic } = useParams();
  const [articel, setArticel] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [err, setErr] = useState(false);

  useEffect(() => {
    selectArticel(id)
      .then((article) => {
        setArticel(article);
        return selectComments(id);
      })
      .then((comment) => {
        setIsLoading(false);
        setComments(comment);
      })
      .catch((error) => {
        setErr(true);
        setIsLoading(false);
        setArticel([]);
        setComments([]);
      });
  }, [id]);
  if (err) return <ErrorPage />;

  return (
    <>
      <nav>
        <NavBar topic={topic} />
      </nav>

      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <section>
          <ArticelCard article={articel} />
          <PostComment id={articel.article_id} setComments={setComments} />
          <Commentbox
            comments={comments}
            setComments={setComments}
            ArticleId={id}
          />
        </section>
      )}
    </>
  );
}
