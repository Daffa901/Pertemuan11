import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage 
      errorCode="404"
      errorTitle="Lost In Metaverse"
      errorDescription="Oops it seems you follow backlink"
    />
  );
}
