import http from "../http-common";

class UserDataService {
    async putUser(data) {
        return await http.put("/user/", data);
    }
}

export default new UserDataService();
