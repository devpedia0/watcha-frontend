const siteConfig = {
    movies: {
        path: "/movies",
        headers: [
            { key: "id", title: "#" },
            { key: "image", title: "사진" },
            { key: "title", title: "제목" },
            { key: "title", title: "내용" },
        ],
    },
    books: {
        path: "/books",
        headers: [],
    },
    tv_shows: {
        path: "/tv_shows",
        headers: [],
    },
    collections: {
        path: "/collections",
        headers: [],
    },
    tags: {
        path: "/tags",
        headers: [],
    },
    participants: {
        path: "/participants",
        headers: [],
    },
};

export default siteConfig;
