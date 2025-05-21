import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage 
      errorCode="400"
      errorTitle="Lost In Metaverse"
      errorDescription="Oops it seems you followed a broken link."
    />
  );
}