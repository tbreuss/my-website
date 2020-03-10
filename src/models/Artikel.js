import m from "mithril";

let Artikel = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "/api/artikel.php",
            withCredentials: true,
        })
            .then(function (result) {
                Artikel.list = result
            })
    },
    current: {},
    load: function (slug) {
        return m.request({
            method: "GET",
            url: "/api/artikel.php?slug=" + slug,
            withCredentials: true,
        })
            .then(function (result) {
                Artikel.current = result
            })
    }
};

export default Artikel;
