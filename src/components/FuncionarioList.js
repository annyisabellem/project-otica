import React, { useEffect, useState } from "react";
import { getFuncionarios, addFuncionario, deleteFuncionario } from "../services/api";

const FuncionarioList = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: "",
    cargo: "",
    telefone: "",
    email: "",
  });

  useEffect(() => {
    loadFuncionarios();
  }, []);

  const loadFuncionarios = async () => {
    const data = await getFuncionarios();
    setFuncionarios(data);
  };

  const handleChange = (e) => {
    setNovoFuncionario({ ...novoFuncionario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFuncionario(novoFuncionario);
    setNovoFuncionario({ nome: "", cargo: "", telefone: "", email: "" }); // Limpar formulário
    loadFuncionarios();
  };

  const handleDelete = async (id) => {
    await deleteFuncionario(id);
    loadFuncionarios();
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={subTitleStyle}>Cadastro de Novos Funcionários</h2>

        {/* Formulário para adicionar funcionário */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <input type="text" name="nome" placeholder="Nome" value={novoFuncionario.nome} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="cargo" placeholder="Cargo" value={novoFuncionario.cargo} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="telefone" placeholder="Telefone" value={novoFuncionario.telefone} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={novoFuncionario.email} onChange={handleChange} required style={inputStyle} />
          <div style={buttonContainerStyle}>
            <button type="submit" style={buttonStyle}>Adicionar</button>
          </div>
        </form>

        {/* Título da lista de funcionários */}
        {funcionarios.length > 0 && <h3 style={listTitleStyle}>Funcionários Cadastrados</h3>}

        {/* Lista de funcionários */}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {funcionarios.map((func) => (
            <li key={func.id} style={listItemStyle}>
              <span>{func.nome} - {func.cargo} - {func.telefone} - {func.email}</span>
              <button onClick={() => handleDelete(func.id)} style={deleteButtonStyle}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* Estilos */
const pageStyle = {
  backgroundColor: "#d0e1f9",
  minHeight: "100vh",  // Garante que ocupa 100% da altura da tela
  width: "100vw",      // Garante que ocupa toda a largura da tela
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Poppins', sans-serif",
  margin: "0",         // Remove margens externas
  padding: "0",        // Remove espaçamentos internos
  position: "absolute",
  top: "0",
  left: "0",
};

const containerStyle = {
  maxWidth: "850px",
  background: "#E3F2FD",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const subTitleStyle = {
  textAlign: "center",
  color: "#4B0082",
  marginBottom: "20px",
  fontWeight: "bold",
  fontSize: "22px",
};

const formStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
  gap: "10px",
  marginBottom: "20px",
  alignItems: "center",
  justifyContent: "center",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "14px",
  width: "100%",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "20px", // Aumentado para mover mais para a direita
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "8px 12px",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  fontWeight: "bold",
  textAlign: "center",
  width: "120px", // Tamanho ajustado para melhor alinhamento
};


const listTitleStyle = {
  textAlign: "left",
  marginBottom: "10px",
  color: "#4B0082",
  fontWeight: "bold",
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#fff",
  padding: "10px",
  marginBottom: "5px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
};

const deleteButtonStyle = {
  backgroundColor: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default FuncionarioList;
