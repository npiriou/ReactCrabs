import Chatlog from "./Chatlog.js";
import "./Chat.css";

function Chat(props) {
  return (
    <ul className="Chat">
      <Chatlog log={props.log} />
    </ul>
  );
}

export default Chat;
