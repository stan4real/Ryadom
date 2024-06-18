import axios from "axios";
import { CatData } from "../utils/types";

class CatService {
    private URL = 'https://api.thecatapi.com/v1/images/search'
    private KEY = 'live_WYBA9DlZKodHkyTmfqLTb8aTrNdwCL2GjBm6JI714ZxaHFo807VJCH69JNJmBGS7'
    async getAll() {
        return axios.get<CatData>(`${this.URL}?limit=20&api_key=${this.KEY}`)
        // const response = await fetch(`${this.URL}?limit=20&api_key=${this.KEY}`)
        // if (response.ok) {
        //     // Get JSON value from the response body
        //     return response.json();
        //   }
    }

}
export default new CatService