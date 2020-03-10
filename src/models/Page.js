import m from "mithril";

let Page = {
    html: "",
    load: function (id) {
        return m.request({
            method: "GET",
            url: "/api/page.php?id=" + id
        })
            .then(function (result) {
                Page.html = result.html
            })
    }
};

export default Page;
