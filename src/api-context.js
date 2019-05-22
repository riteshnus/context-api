import React from 'react';

export default React.createContext({
  name: null,
  token: null,
  changeName : (name, token) => {},
  clearValue: () => {} 
})