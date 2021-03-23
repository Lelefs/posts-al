import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const UserContext = createContext({
  user: {},
  users: [],
  selectUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);

  function selectUser(userId) {
    api.get(`/users/${userId}`).then(res => {
      setUser(res.data);
    });
  }

  useEffect(() => {
    api.get(`/users`).then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, users, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
