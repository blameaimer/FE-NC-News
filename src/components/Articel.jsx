import { useEffect, useState } from "react";
import { selectArticel, selectComments } from "../api";
import { ArticelCard } from "./Articel-card";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Commentbox from "./comment-box";
import { PostComment } from "./post-comment";
import ErrorPage from "./ErrorPage";
export default function Articel() {
  let { id, topic } = useParams();
  const [articel, setArticel] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    selectArticel(id)
      .then((article) => {
        setArticel(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr({ err });
        setArticel([]);
        setComments([]);
      });
  }, [id]);
  useEffect(() => {
    setIsLoading(true);
    selectComments(id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading({ err });
        setErr(true);
        setArticel([]);
        setComments([]);
      });
  }, [id]);
  console.log(err);
  if (isLoading) return <p>loading..</p>;
  if (err) return <ErrorPage />;
  return (
    <>
      <nav>
        <NavBar topic={topic} />
      </nav>
      <section>
        <ArticelCard article={articel} />
        <PostComment id={articel.article_id} setComments={setComments} />
        <Commentbox comments={comments} />
      </section>
    </>
  );
}
