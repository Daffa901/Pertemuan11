export default function Error401() {
    return (
      <ErrorPage 
        errorCode="401"
        errorTitle="Unauthorized"
        errorDescription="Oops it seems you're not authorized to view this page."
      />
    );
  }
  