import axios from "axios";
import {host} from './host';

const api = () => {
    axios.create({
        baseURL: host
    })
}

export {api}