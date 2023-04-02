import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    } else {
      init();
    }
  }, []);

  const init = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin");
      const admin = response.data[0];

      localStorage.setItem("user_token", JSON.stringify({ email: admin.email }));
      localStorage.setItem("admin_email", admin.email);
      localStorage.setItem("admin_password", admin.senha);

      setUser(admin);
    } catch (error) {
      console.log("Erro ao buscar usuário admin:", error);
    }
  };

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const adminEmail = localStorage.getItem("admin_email");
    const adminPassword = localStorage.getItem("admin_password");

    if (email === adminEmail && password === adminPassword) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("user_token", JSON.stringify({ email, token }));
      setUser({ email, password });
      return;
    }

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };



  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
    localStorage.removeItem("users_bd")
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
