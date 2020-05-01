const PAGE_TITLE = "Thomas Breuss";

let HtmlHelper = {
  setActiveMenuItem: function (name = "") {
    let els = document.querySelectorAll(".site-navigation a");
    els.forEach((el) => {
      el.classList.remove("active");
    });

    if (name === "") {
      return;
    }
    let selector = ".site-navigation__" + name + " a";
    let el = document.querySelector(selector);
    if (el) {
      el.classList.add("active");
    }
  },
  setPageTitle: function (title = "") {
    if (title === "") {
      document.title = PAGE_TITLE;
    } else {
      document.title = title + " // " + PAGE_TITLE;
    }
  },
  scrollTop: function () {
    window.scrollTo(0, 0);
  }
};

export default HtmlHelper;
