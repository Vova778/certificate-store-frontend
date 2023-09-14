import axios from "axios";
import {Cookies} from "react-cookie";

import ApiConfig from "../../../config/ApiConfig";

const API_URL = `${ApiConfig}/users`;

const cookies = new Cookies();

class UserService {

    static async getUserByEmail(email) {
        return await axios.get(`${API_URL}/findByEmail/${email}`,
            {
                headers: {
                    Authorization: `Bearer ${cookies.get("user-token")}`,
                }
            }
        );
    };
    static async getAllUsers(page = 1, size = 10) {
        return await axios.get(`API_URL/find-all`,
            {
                headers: {
                    'Authorization': cookies.get("user-token"),
                },
                params: {
                    page: page,
                    size: size,
                }
            }
        );
    };

    static async getUserById(id) {
        return await axios.get(`${API_URL}/findById/${id}`,
            {
                headers: {
                    Authorization: "Bearer " + cookies.get("user-token"),
                }
            }
        );
    };



    static async getUserOrders(id) {
        return await axios.get(`${API_URL}/${id}/receipts`,
            {
                headers: {
                    'Authorization': cookies.get("user-token"),
                }
            }
        );
    };

    static async getCount() {
        return await axios.get(`${API_URL}/count`,
            {
                headers: {
                    'Authorization': cookies.get("user-token"),
                }
            }
        );
    };
}

export default UserService;