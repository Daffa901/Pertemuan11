import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage 
      errorCode="403"
      errorTitle="Forbidden"
      errorDescription="Oops it seems you're not allowed to view this page."
    />
  );
}
