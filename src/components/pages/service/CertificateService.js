import axios from "axios";
import {Cookies} from "react-cookie";

import ApiConfig from "../../../config/ApiConfig";

const URL = `${ApiConfig}/certificates`;

const cookies = new Cookies();

class CertificateService {
    static async getAll(page = 1, size = 10) {
        return await axios.get(URL, {
            params: {
                pageIndex: page,
                size: size,
            }
        });
    }

    static async getById(id) {
        return await axios.get(`${URL}/${id}`);
    }

    static async save(request) {
        return await axios.post(`${URL}`,  request, {
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    };


    static async update(request) {
        return await axios.patch(`${URL}`,  request, {
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    };

    static async delete(id) {
        return await axios.delete(`${URL}/${id}`, {
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    };

    static async getCount() {
        return await axios.get(`${URL}/count`);
    };
}

export default CertificateService;