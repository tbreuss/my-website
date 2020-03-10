// src/views/UserList.js
import m from "mithril";
import User from "../models/User";

export default {
    //oninit: User.loadList,
    view: function () {
        return m(".user-list", User.list.map(function (user) {
            return m(m.route.Link, {
                class: "user-list-item",
                href: "/edit/" + user.id,
            }, user.firstName + " " + user.lastName)
        }))
    }
}
