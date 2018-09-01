// src/views/UserList.js
import m from "mithril";
import User from "../models/User";

export default {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
        }))
    }
}
