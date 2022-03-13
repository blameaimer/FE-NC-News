import { useEffect, useState } from "react";
import { selectArticles } from "../api";
import { ArticelCard } from "./Articel-card";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";
export default function ArticlesList() {
  let { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const [sortBy, setNewSortBy] = useState(null);
  const [orderBy, setNewOrderBy] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    selectArticles(topic, sortBy, orderBy).then((articles) => {
      setArticles(articles);

      setIsLoading(false);
    })  .catch(() => {
        setErr(true);
        setArticles([]);
        setIsLoading(false);
      });;
  }, [topic, sortBy, orderBy]);
  const sorts = {
    created_at: "Date",
    votes: "Vote",
    comment_count: "Comments",
  };
  const orders = {
    asc: "Ascending",
    desc: "Descending",
  };
  const handleSort = (event) => {
    setNewSortBy(event.target.value);


    if (err) return <ErrorPage />;
  return (
    <>
      <nav>
        <NavBar topic={topic} />
      </nav>

      {isLoading ? (
        <p>loading..</p>
      ) : (
        <section>
          <select
            onChange={(event) => {
              handleSort(event);
            }}
          >
            <option className="d-none">
              {sortBy ? sorts[sortBy] : "Sort by"}
            </option>
            <option value="comment_count">Comments</option>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
          </select>

          <select
            onChange={(event) => {
              handleOrder(event);
            }}
          >
            <option className="d-none">
              {orderBy ? orders[orderBy] : "Asc/Desc"}
            </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          {articles.map((article, index) => {
            return <ArticelCard article={article} key={index} />;
          })}
        </section>
      )}

    </>
  );
}
