import axios from "axios";
import ApiConfig from "../../../config/ApiConfig";
import {Cookies} from "react-cookie";

const URL = `${ApiConfig}/auth`;
const cookies = new Cookies();
class AuthService {

    static async login(request) {
        return await axios.post(`${URL}/sign-in`, request);
    };

    static async register(request) {
        return await axios.post(`${URL}/sign-up`, request);
    };

    static async logout() {
        cookies.remove("user-token", {path: '/'});
        localStorage.removeItem("user-email");
        localStorage.removeItem("user-role");
    }
}

export default AuthService;