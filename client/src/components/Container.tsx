import React from "react";

interface TContainer {
  children: React.ReactNode;
}

export const Container: React.FC<TContainer> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};
