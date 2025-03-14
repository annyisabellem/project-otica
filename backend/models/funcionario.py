class Funcionario:
    def __init__(self, id=None, nome=None, cargo=None, telefone=None, email=None):
        self.id = id
        self.nome = nome
        self.cargo = cargo
        self.telefone = telefone
        self.email = email

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "cargo": self.cargo,
            "telefone": self.telefone,
            "email": self.email
        }
