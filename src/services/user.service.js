import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/auth/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "auth");
  }

  getGreetings() {
    return axios.get(API_URL + "auth", { headers: authHeader() });
  }
  
}

export default new UserService();
