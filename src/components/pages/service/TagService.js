import axios from "axios";
import {Cookies} from "react-cookie";


import ApiConfig from "../../../config/ApiConfig";

const API_URL = `${ApiConfig}/tags`;
const cookies = new Cookies();

class TagService {
    static async getAll(page = 1, size = 10) {
        return await axios.get(API_URL, {
            headers: {
                'Authorization': cookies.get("token"),
            },
            params: {
                page: page,
                size: size,
            }
        });
    }

    static async findMostPopularTags(page = 1, size = 10) {
        return await axios.get(`${API_URL}/find-most-widely-used-tag`, {
            headers: {
                'Authorization': cookies.get("token"),
            },
            params: {
                page: page,
                size: size,
            }
        });
    }
}

export default TagService;