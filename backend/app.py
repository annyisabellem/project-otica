from flask import Flask
from flask_cors import CORS
from views.funcionario_view import funcionario_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(funcionario_bp)

if __name__ == "__main__":
    app.run(debug=True)
