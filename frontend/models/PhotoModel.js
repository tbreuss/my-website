import m from "mithril";

let PhotoModel = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "/api/photo",
            withCredentials: true,
        })
            .then(function (result) {
                PhotoModel.list = result
            })
    },
    latest: {},
    loadLatest: function () {
        return m.request({
            method: "GET",
            url: "/api/photo/latest",
            withCredentials: true,
        })
            .then(function (result) {
                PhotoModel.latest = result
            })
    }
};

export default PhotoModel;
