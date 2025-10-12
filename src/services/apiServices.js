import axios from "../utils/axiosCustomize.js";

const postCreateNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("/api/v1/participant", data);
};

const putUpdateUser = ( _id, username, role, image) => {
  const data = new FormData();
    data.append("id", _id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("/api/v1/participant", data);
};

const deleteUser = (_id) => {
    return axios.delete("/api/v1/participant", {data: {id: _id}})
}
const getAllUser = () => {
    return axios.get("/api/v1/participant/all");
}
const getListUserWithPaginate = (page, limit) => {
  return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password)=> {
     return axios.post(`/api/v1/login`, {email, password});
};

export {
  postCreateNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getListUserWithPaginate,
  postLogin,
};