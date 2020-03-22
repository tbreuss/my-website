import m from "mithril";

let PageModel = {
    html: "",
    load: function (id) {
        return m.request({
            method: "GET",
            url: "/api/page.php?id=" + id
        })
            .then(function (result) {
                PageModel.html = result.html
            })
    }
};

export default PageModel;
