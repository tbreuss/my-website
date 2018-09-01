import m from "mithril";
import Photo from "../models/Photo";

export default {
    oninit: function () {
        Photo.loadList();
    },
    view: function () {
        return m(".photos", [
            m("h2", "Unterwegs"),
            Photo.list.map(function(photo) {
            return m(".img", [
                m("img", {
                    src: "/assets/media/" + photo.id + "." + photo.extension
                }, photo.id),
                m("caption", photo.photodate + " - " + photo.name)
            ])
        })])

    }
}
