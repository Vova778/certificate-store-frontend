import axios from "axios";
import ApiConfig from "../../../config/ApiConfig";

const URL = `${ApiConfig}/auth`;

class AuthService {
    static async login(request) {
        return await axios.post(`${URL}/sign-in`, request);
    };

    static async register(request) {
        return await axios.post(`${URL}/sign-up`, request);
    };

    static async logout(request){
        return await axios.post(`${URL}/logout`, request)
    }
}

export default AuthService;