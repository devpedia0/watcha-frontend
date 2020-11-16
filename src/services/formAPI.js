import axios from "axios";

const formAPI = {
    async submit(pathname, data) {
        const res = await axios.post(pathname, data);

        return res.data.content_id;
    },
};

export default formAPI;
