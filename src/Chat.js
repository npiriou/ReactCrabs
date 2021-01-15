import Chatlog from "./Chatlog.js";
function Chat(props) {
  return (
    <ul className="Chat">
      <Chatlog log={props.log} />
    </ul>
  );
}

export default Chat;
