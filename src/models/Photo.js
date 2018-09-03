import m from "mithril";

let Photo = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "/api/photo.php",
            withCredentials: true,
        })
            .then(function(result) {
                Photo.list = result
            })
    },

    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
            .then(function(result) {
                Photo.current = result
            })
    }
};

export default Photo;
