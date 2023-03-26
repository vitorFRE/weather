import React from 'react';

interface SearchContextInterface {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext({} as SearchContextInterface);

export const SerchProvider = (props: { children: React.ReactNode }) => {
  const [search, setSearch] = React.useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};
