import http from "../http-common";

class AuthService {
  async getToken(data) {
    return await http.post("/token/", data);
  }
  refreshToken() {
    return http.post("/refresh");
  }
  async getUser() {
    return await http.get("/user/");
  }
  getListUser() {
    return http.get("/users/");
  } 
}

export default new AuthService();
