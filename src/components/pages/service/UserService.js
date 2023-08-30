import axios from "axios";
import {Cookies} from "react-cookie";

import ApiConfig from "../../../config/ApiConfig";

const API_URL = `${ApiConfig}/users`;

const cookies = new Cookies();

class UserService {
    static async getAllUsers(page = 1, size = 10) {
        return await axios.get(API_URL,
            {
                params: {
                    pageIndex: page,
                    size: size,
                },
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };

    static async getUserById(id) {
        return await axios.get(`${API_URL}/${id}`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };

    static async getUserByEmail(email) {
        return await axios.get(`${API_URL}/email/${email}`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };

    static async getUserOrders(id) {
        return await axios.get(`${API_URL}/${id}/orders`,
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