import NavBar from "./NavBar";

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <a href="/">
        <h1 className="error">Something went wrong , click here!</h1>
      </a>
    </>
  );
}
