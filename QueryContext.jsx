import { createContext, useContext, useState } from "react";

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [queries, setQueries] = useState({});

  return (
    <QueryContext.Provider value={{ queries, setQueries }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => {
  return useContext(QueryContext);
};
