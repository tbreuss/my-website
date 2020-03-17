import m from "mithril";

let Photo = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "/api/photo.php",
            withCredentials: true,
        })
            .then(function (result) {
                Photo.list = result
            })
    },
    latest: {},
    loadLatest: function () {
        return m.request({
            method: "GET",
            url: "/api/photo_latest.php",
            withCredentials: true,
        })
            .then(function (result) {
                Photo.latest = result
            })
    }
};

export default Photo;
