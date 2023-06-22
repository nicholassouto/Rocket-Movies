import axios from "axios";

export const api = axios.create({
  baseURL: "https://tabela-filmes-rocket-movies.onrender.com",
});