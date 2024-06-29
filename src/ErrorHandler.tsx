import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import PageNotFound from "./errors/PageNotFound";
import UnexpectedError from "./errors/Unexpected";

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <PageNotFound />;
    }
  }

  return <UnexpectedError />;
}

export default ErrorBoundary;
