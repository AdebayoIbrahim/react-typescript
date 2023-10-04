type StatusProps = {
  status: "loading" | "Data Fetched" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "Data Fetched") {
    message = "Fetched Successful";
  } else if (props.status === "error") {
    message = "Error Fetching";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
