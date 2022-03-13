import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import { ArticelCard } from "./Articel-card";
import ArticelTitleCard from "./ArticeTitle-card";
import NavBar from "./NavBar";
export default function HomeArticle({ topic }) {
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
      .catch((err) => {
        setErr(true);
        setArticles([]);
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>loading..</p>;
  else if (err)
    return <h1 className="error">LOOKS LIKE YOU ARE LOST CLICK HERE</h1>;

  return (
    <>
      <nav>
        <NavBar topic={"/"} />
      </nav>

      {isLoading ? (
        <p>loading..</p>
      ) : (
        <section>
          <ArticelTitleCard article={articles[0]} />

          <ArticelCard article={articles[10]} key="mainarticel" />
          <ArticelCard article={articles[21]} key="mainarticel2" />
        </section>
      )}

    </>
  );
}
