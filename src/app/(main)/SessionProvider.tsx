"use client";

import React, { useContext, createContext } from "react";
import { Session, User } from "lucia";

type SessionContext = {
  user: User;
  session: Session;
};

const SessionContext = createContext<SessionContext | null>(null);

const SessionProvider = ({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContext }>) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
};

export default SessionProvider;
