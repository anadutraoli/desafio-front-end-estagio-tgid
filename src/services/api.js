import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const carregarDados = async (base) => {
  if (base === "todos") {
    const [respostaExpansoes, respostaGamePacks] = await Promise.all([
      api.get("/expansion-pack"),
      api.get("/game-pack"),
    ]);

    return [...respostaExpansoes.data, ...respostaGamePacks.data]
  }
  const response = await api.get(`/${base}`);
  return response.data;
};

export const carregarItemPorId = async (categoria, id) => {
  const response = await api.get(`/${categoria}/${id}`);
  return response.data;
};

export default api;
