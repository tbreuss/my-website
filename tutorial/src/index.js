// src/index.js
import m from "mithril";
import User from "./models/User";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import Layout from "./views/Layout";

m.route(document.body, "/list", {
    "/list": {
        onmatch: function() {
            return User.loadList();
        },
        render: function() {
            return m(Layout, m(UserList))
        }
    },
    "/edit/:id": {
        onmatch: function(params) {
            return User.load(params.id);
        },
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    }
})