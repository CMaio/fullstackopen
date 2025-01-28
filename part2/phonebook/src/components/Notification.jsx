const Notification = ({ message, isError }) => {
  if (message === null) {
    return null;
  }

  return !isError ? (
    <div className="notification">{message}</div>
  ) : (
    <div className="error">{message}</div>
  );
};

export default Notification;
