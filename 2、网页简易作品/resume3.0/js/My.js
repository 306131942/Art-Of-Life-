
//回到顶部，滚动一定距离出现
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var top_div = document.getElementById( "top_div" );
    if( t >= 400 ) {
        top_div.style.display = "inline";
    } else {
        top_div.style.display = "none";
    }
}


//图片轮播
$(function () {
    $('#ad-carousel').carousel();
    $('#menu-nav .navbar-collapse a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                $('#feature-tab a[href=#' + tabId + ']').tab('show');
            }
        }
    });
});

