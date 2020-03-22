import m from "mithril";

let ArticleModel = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "/api/article",
            withCredentials: true,
        })
            .then(function (result) {
                ArticleModel.list = result
            })
    },
    current: {},
    load: function (slug) {
        return m.request({
            method: "GET",
            url: "/api/article/" + slug,
            withCredentials: true,
        })
            .then(function (result) {
                ArticleModel.current = result
            })
    }
};

export default ArticleModel;
