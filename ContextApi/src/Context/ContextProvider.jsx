import React, { useState } from "react";
import UserContext from "./UserContext";
const ContextProvider = ({ childern }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {childern}
    </UserContext.Provider>
  );
};

export default ContextProvider;
