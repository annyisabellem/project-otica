import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // URL do backend Flask

// Buscar todos os funcionários
export const getFuncionarios = async () => {
  try {
    const response = await axios.get(`${API_URL}/funcionarios`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error);
    return [];
  }
};

// Adicionar um novo funcionário
export const addFuncionario = async (funcionario) => {
  try {
    await axios.post(`${API_URL}/funcionarios`, funcionario);
  } catch (error) {
    console.error("Erro ao adicionar funcionário:", error);
  }
};

// Deletar um funcionário
export const deleteFuncionario = async (id) => {
  try {
    await axios.delete(`${API_URL}/funcionarios/${id}`);
  } catch (error) {
    console.error("Erro ao excluir funcionário:", error);
  }
};
