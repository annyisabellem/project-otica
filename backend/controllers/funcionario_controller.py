from config import get_connection
from models.funcionario import Funcionario

class FuncionarioController:
    @staticmethod
    def listar_funcionarios():
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, nome, cargo, telefone, email FROM Funcionarios")  # Nome da tabela corrigido
        funcionarios = [Funcionario(*row).to_dict() for row in cursor.fetchall()]
        conn.close()
        return funcionarios

    @staticmethod
    def criar_funcionario(data):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Funcionarios (nome, cargo, telefone, email) VALUES (?, ?, ?, ?)",
                       (data["nome"], data["cargo"], data["telefone"], data["email"]))
        conn.commit()
        conn.close()
        return {"message": "Funcionário cadastrado com sucesso!"}

    @staticmethod
    def atualizar_funcionario(id, data):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE Funcionarios SET nome=?, cargo=?, telefone=?, email=? WHERE id=?",
                       (data["nome"], data["cargo"], data["telefone"], data["email"], id))
        conn.commit()
        conn.close()
        return {"message": "Funcionário atualizado com sucesso!"}

    @staticmethod
    def excluir_funcionario(id):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Funcionarios WHERE id=?", (id,))
        conn.commit()
        conn.close()
        return {"message": "Funcionário excluído com sucesso!"}
