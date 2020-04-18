import axios from "axios";

export default {
    methods: {
        getFromGist: async (gist_params) => {
            let url = `https://yacdn.org/proxy/https://gist.githubusercontent.com/${gist_params[0]}/${gist_params[1]}/raw/${gist_params[2]}`;
            console.log(url);
            let response = await axios.get(url)
            return response.data.split(";")
        }
    }
}
