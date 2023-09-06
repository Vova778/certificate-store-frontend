import axios from "axios";
import {Cookies} from "react-cookie";

import ApiConfig from "../../../config/ApiConfig";

const API_URL = `${ApiConfig}/users`;

const cookies = new Cookies();

class UserService {
    static async getAllUsers(page = 1, size = 10) {
        return await axios.get(`API_URL/find-all`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                },
                params: {
                    page: page,
                    size: size,
                }
            }
        );
    };

    static async getUserById(id) {
        return await axios.get(`${API_URL}/find-by-id/${id}`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };

    static async getUserByEmail(email) {
        return await axios.get(`${API_URL}/find-by-email`,
            {
                headers: {
                    'Authorization': "Bearer " + cookies.get("token"),
                    'jwt' : cookies.get("token")
                },
                params: {
                    email: email
                }
            }
        );
    };

    static async getUserOrders(id) {
        return await axios.get(`${API_URL}/${id}/receipts`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };

    static async getCount() {
        return await axios.get(`${API_URL}/count`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };
}

export default UserService;