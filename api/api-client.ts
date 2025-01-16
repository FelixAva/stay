import { UserRegister } from "@/types/user";
import apiManager from "./api-manager";

const register = async ({email, password, age, lastGrade, name, lastName} : UserRegister) => {
  const body = {
    email,
    password,
    age: parseInt(age),
    lastGrade,
    firstName: name,
    lastName
  }

  const { data } = await apiManager.post('signUp', { body });
  console.log(data);
};

const getForm = async () => {
  // Datos que se enviarán al endpoint
  const body = {
    age: 15, // Cambia esto al valor deseado
    lastGrade: "Segundo año de secundaria",
  };

  const { data } = await apiManager.post('Test', { body });
  return data;
};

export {
  getForm,
  register
}
