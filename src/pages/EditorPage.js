import { useState } from "react";
import { Client, Editor } from "../components";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Nabin Dhami" },
    { socketId: 2, userName: "Dhami Nabin" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/code-sync.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} userName={client.userName} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <Editor />
    </div>
  );
};

export default EditorPage;
