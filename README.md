.
// const [image, setImage] = useState("");
// const handleChange = (e) => {
// const { files } = e.target;
// setImage(files[0]);
// };
// const handleSubmit = () => {
// const formData = new FormData();
// formData.append("file", image);
// formData.append(
// "body",
// new Blob([JSON.stringify(data2)], { type: "application/json" })
// );

// axios.post("http://121.160.25.204:8080/admin/books", formData, {
// headers: {
// "Content-Type": "multipart/form-data",
// },
// });
// };

const data2 = {
email: "gkb10a@gmail.com",
password: "1234",
};

        const res = await axios.post(
            //"http://222.111.195.42:8080/signin",
            "http://121.160.25.204:8080/signin",
            data2,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
