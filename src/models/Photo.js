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
    }
};

export default Photo;
