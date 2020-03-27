(() => {

    $(".header__slider").slick();

    const showHeaderMenu = ({ target }) => {
        target
            .closest(".header__nav-toggle")
            .classList.toggle("header__nav-toggle_active");
    };

    $(".header__nav-toggle").on("click", showHeaderMenu)

})();