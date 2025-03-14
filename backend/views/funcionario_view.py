from flask import Blueprint, request, jsonify
from controllers.funcionario_controller import FuncionarioController

funcionario_bp = Blueprint("funcionario_bp", __name__)

# Listar todos os funcionários
@funcionario_bp.route("/funcionarios", methods=["GET"])
def get_funcionarios():
    funcionarios = FuncionarioController.listar_funcionarios()
    return jsonify(funcionarios), 200

# Criar um funcionário
@funcionario_bp.route("/funcionarios", methods=["POST"])
def create_funcionario():
    data = request.json
    if not data or "nome" not in data or "cargo" not in data or "telefone" not in data or "email" not in data:
        return jsonify({"error": "Dados inválidos"}), 400
    
    response = FuncionarioController.criar_funcionario(data)
    return jsonify(response), 201

# Atualizar um funcionário
@funcionario_bp.route("/funcionarios/<int:id>", methods=["PUT"])
def update_funcionario(id):
    data = request.json
    if not data:
        return jsonify({"error": "Dados inválidos"}), 400

    response = FuncionarioController.atualizar_funcionario(id, data)
    return jsonify(response), 200

# Deletar um funcionário
@funcionario_bp.route("/funcionarios/<int:id>", methods=["DELETE"])
def delete_funcionario(id):
    response = FuncionarioController.excluir_funcionario(id)
    return jsonify(response), 200
