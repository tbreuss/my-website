import m from "mithril";

var Page = {
    html: "",
    load: function (id) {
        return m.request({
            method: "GET",
            url: "/api/" + id + '.html',
            deserialize: function (value) {
                return value
            }
        })
            .then(function (result) {
                Page.html = result
            })
    }
}

export default Page;
