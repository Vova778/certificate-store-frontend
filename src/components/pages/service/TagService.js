import axios from "axios";
import {Cookies} from "react-cookie";



import ApiConfig from "../../../config/ApiConfig";

const API_URL = `${ApiConfig}/tags`;
const cookies = new Cookies();

class TagService {
    static async getAll(page = 1, size = 10) {
        return await axios.get(API_URL, {
            params: {
                pageIndex: page,
                size: size,
            },
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    }

    static async findMostPopularTags(page = 1, size = 10) {
        return await axios.get(`${API_URL}/most-popular`, {
            params: {
                pageIndex: page,
                size: size,
            },
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    }
}

export default TagService;