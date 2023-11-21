import api from "../api";

export async function cadastrarUsuario(data) {
  console.log("Usuario: ", data);
  try {
    await api.post("/usuarios/", {
      name: data.nome,
      phone: data.telefone,
      email: data.email,
      senha: data.senha,
    });
    return "Cadastrado!";
  } catch (error) {
    // throw error;
    return "Erro ao cadastrar!" + error;
  }
}

export async function verificarEmailRepetido(novoEmail) {
  try {
    const response = await api.get("/usuarios/");
    const Emails = response.data.map((usuario) => usuario["email"]);
    const emailJaUtilizado = Emails.some((email) => email === novoEmail);
    return emailJaUtilizado;
  } catch (error) {
    return error;
  }
}

export async function validarUsuario(email, senha) {
  try {
    const response = await api.get(`/usuarios?email=${email}&senha=${senha}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
