import { Link } from "react-router-dom";

export const NoChat = () => (
  <>
    <span>Такого чата не существует. Выберите другой чат!
      <Link to="/chats/chat-1">Вернуться к списку чатов</Link>
    </span>
  </>
)