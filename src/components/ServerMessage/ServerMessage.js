import { useEffect, useState } from "react";

const ServerMessage = () => {
  const [serverStartUpMessage, setServerStartUpMessage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setServerStartUpMessage(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleServerStartUpMessage = () => {
    setServerStartUpMessage((prev) => !prev);
  };
  console.log("serverStartUpMessage----------", serverStartUpMessage);
  return (
    <>
      {serverStartUpMessage && (
        <div className="server__message-container">
          <p data-test="startup-message" className="server__startup-message">
            The server spins down after 15 mins of inactivaty 😅, loading may be
            slow.
          </p>
          <p
            data-test="startup-message-hide"
            className="server__startup-message-hide"
            onClick={handleServerStartUpMessage}
          >
            X
          </p>
        </div>
      )}
    </>
  );
};

export default ServerMessage;
