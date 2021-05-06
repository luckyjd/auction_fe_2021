import http from "../http-common";

class AuthService {
  getToken() {
    return http.post("/token");
  }

  refreshToken() {
    return http.post("/refresh");
  }
  getUser() {
    return http.get("/user/");
  }
  getListUser() {
    return http.get("/users/");
  }

  
}

export default new AuthService();