import api from ".";

export const authLogin = (dataUser) => api.post("/login", dataUser);
export const authRegister = (dataUser) => api.post("/register", dataUser);
