import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import { ArticelCard } from "./Articel-card";
import ArticelTitleCard from "./ArticeTitle-card";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";
import { Spinner } from "react-bootstrap";
export default function HomeArticle() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    selectArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(true);
        setArticles([]);
        setIsLoading(false);
      });
  }, []);

  if (err) return <ErrorPage />;

  return (
    <>
      <nav>
        <NavBar topic={"/"} />
      </nav>

      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <section>
          <h1 className="Welcome">Welcome to NC News</h1>
          <ArticelTitleCard article={articles[0]} />
          <ArticelTitleCard article={articles[5]} />
          <ArticelTitleCard article={articles[7]} />
          <ArticelCard article={articles[10]} key="mainarticel" />
          <ArticelCard article={articles[11]} key="mainarticel2" />
        </section>
      )}
    </>
  );
}
