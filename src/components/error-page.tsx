import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here
      </Link>
    </div>
  );
}