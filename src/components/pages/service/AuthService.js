import axios from "axios";
import ApiConfig from "../../../config/ApiConfig";

const URL = `${ApiConfig}/auth`;

class AuthService {
    static async login(request) {
        return await axios.post(`${URL}/login`, request);
    };

    static async register(request) {
        return await axios.post(`${URL}/register`, request);
    };

}

export default AuthService;