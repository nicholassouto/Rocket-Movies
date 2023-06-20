import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@Rocketmovies: user", JSON.stringify(user));
      localStorage.setItem("@Rocketmovies: token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@Rocketmovies: token");
    localStorage.removeItem("@Rocketmovies: user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      localStorage.setItem("@Rocketmovies: user", JSON.stringify(user));
      setData({ token: data.token, user });
      alert("Perfil atualizado");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@Rocketmovies: token");
    const user = localStorage.getItem("@Rocketmovies: user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
