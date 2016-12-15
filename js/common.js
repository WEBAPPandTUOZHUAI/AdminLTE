/**
 * Created by zxk175 on 16/12/16.
 */
$(function () {
    $('ul.sidebar-menu > li').click(function (e) {
        //加上这句则导航的<a>标签会失效
        //e.preventDefault();
        $('ul.sidebar-menu > li').removeClass('active');
        $(this).addClass('active');
    });

    $('ul.sidebar-menu > li > a').click(function (e) {
        var url = $(this).attr("data-url");
        if (url != undefined) {
            $.ajax({
                url: url,
                global: false,
                type: "POST",
                dataType: "html",
                success: function (data) {
                    $("#content-wrapper").html(data);
                }
            })
        }
    });

    $('ul.treeview-menu > li').click(function (e) {
        $('ul.treeview-menu > li').removeClass('active');
        $(this).addClass('active');
    });

    $('ul.treeview-menu > li > a').click(function (e) {
        var url = $(this).attr("data-url");
        if (url != undefined) {
            $.ajax({
                url: url,
                global: false,
                type: "POST",
                dataType: "html",
                success: function (data) {
                    $("#content-wrapper").html(data);
                }
            })
        }
    });
});