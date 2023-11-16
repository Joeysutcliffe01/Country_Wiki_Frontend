import { useEffect, useState } from "react";

const ServerMessage = () => {
  const [serverStartUpMessage, setServerStartUpMessage] = useState(
    window.localStorage.getItem("server_message")
  );

  // Ç Turn on to check the serverStartUpMessage
  // window.localStorage.clear();

  useEffect(() => {
    window.localStorage.setItem("server_message", serverStartUpMessage);
  }, [serverStartUpMessage]);

  const handleServerMessage = () => {
    setServerStartUpMessage(false);
  };

  return (
    <>
      {JSON.parse(serverStartUpMessage) !== false && (
        <div className="server__message-container">
          <p data-test="startup-message" className="server__startup-message">
            The server spins down after 15 mins of inactivity 😅, loading may be
            slow.
          </p>
          <p
            data-test="startup-message-hide"
            className="server__startup-message-hide"
            onClick={handleServerMessage}
          >
            X
          </p>
        </div>
      )}
    </>
  );
};

export default ServerMessage;
