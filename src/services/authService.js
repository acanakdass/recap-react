import axios from "axios";

export default class AuthService {
   baseUrl = "https://localhost:34070/api/auth";

   login(credentials) {
      return axios.post(this.baseUrl + "/login", credentials);
   }

   getCurrentUser(token) {
      return axios.get(this.baseUrl + "/getCurrentUser", token);
   }
}