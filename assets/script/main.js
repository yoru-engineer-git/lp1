// ドロワーメニュー
var drawer = $('.header__commonMenu');
$('.drawer-button').on('click', function () {
    // 表示・非表示
    drawer.toggleClass('header__commonMenu-active');
});
$(window).
    on('resize', function () {
        drawer.removeClass('header__commonMenu-active');
    });