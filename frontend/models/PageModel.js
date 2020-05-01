import m from "mithril";

let PageModel = {
  html: "",
  load: function (id) {
    return m.request({
      method: "GET",
      url: "/api/page/" + id
    })
      .then(function (result) {
        PageModel.html = result.content
      })
  }
};

export default PageModel;
