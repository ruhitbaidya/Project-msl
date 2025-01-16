import { createContext, useState } from "react";

export const ContextUsers = createContext(null);

const UsersControl = ({ children }) => {
  const [card, setCard] = useState({ name: "ruhit baidya" });
  const info = { card, setCard };

  return <ContextUsers.Provider value={info}>{children}</ContextUsers.Provider>;
};

export default UsersControl;
