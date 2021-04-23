import http from "../http-common";

class AuthService {
  getToken() {
    return http.post("/token");
  }

  refreshToken(id) {
    return http.post("/refresh");
  }
  
}

export default new ProductDataService();