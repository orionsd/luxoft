var column_01 = $(".column_01"),
    column_02 = $(".column_02"),
    column_03 = $(".column_03"),
    column_01_text_initial_height;

/* Generating content of the main block dynamically*/

var xhr = new XMLHttpRequest();
xhr.open("GET", "json/news.json", true);
xhr.send();
xhr.onload = function () {
    if (xhr.status === 200) {
        var data = xhr.responseText;
    }
    var apps = JSON.parse(data);
    insertBlocks(apps);
};

function insertBlocks(apps) {
    for (var i = 0; i < apps.column_01.length; i++) {

        var column_01_wrapper = $('<div>').addClass("column_01-wrapper");
        column_01.append(column_01_wrapper);

        var column_01_title = $('<h3>').addClass("column_01__title");
        column_01_wrapper.append(column_01_title);
        column_01_title.text(apps.column_01[i].title);

        var column_01_head = $('<div>').addClass("column_01-head")
            .addClass("clearfix");
        column_01_wrapper.append(column_01_head);

        var column_01_head_name = $('<h4>').addClass("column_01-head__name");
        column_01_head.append(column_01_head_name);
        column_01_head_name.text(apps.column_01[i].name);

        var column_01_head_date = $('<time>').addClass("column_01-head__date");
        column_01_head.append(column_01_head_date);
        column_01_head_date.text(apps.column_01[i].date);

        var column_01_text_container = $('<div>').addClass("column_01__text-container")
            .addClass("clearfix");
        column_01_wrapper.append(column_01_text_container);

        var column_01_text_inner = $('<div>').addClass("column_01__text-inner");
        column_01_text_container.append(column_01_text_inner);

        var column_01_text = $('<p>').addClass("column_01__text");
        column_01_text_inner.append(column_01_text)
            .text(apps.column_01[i].text);

        column_01_text_initial_height = column_01_text_inner.height();
        column_01_text_inner.addClass("column_01__text-inner_inactive");

        var column_01_link = $('<a>').addClass("column_01__link");
        column_01_wrapper.append(column_01_link);
        column_01_link.attr("href", "#")
            .text(apps.column_01[i].link_text);

        var hr = $('<div>').addClass("hr");
        column_01.append(hr);
    }

    for (var i = 0; i < apps.column_02.length; i++) {

        var column_02_title = $('<h3>').addClass("column_02__title");
        column_02.append(column_02_title);
        column_02_title.text(apps.column_02[i].title);

        var column_02_text = $('<p>').addClass("column_02__text");
        column_02.append(column_02_text);
        column_02_text.text(apps.column_02[i].text);

        var column_02_link_01 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_01);
        column_02_link_01.attr("href", "#")
            .text(apps.column_02[i].link_text_01);

        var column_02_link_02 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_02);
        column_02_link_02.attr("href", "#")
            .text(apps.column_02[i].link_text_02);

        var column_02_link_03 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_03);
        column_02_link_03.attr("href", "#")
            .text(apps.column_02[i].link_text_03);

        var column_02_link_04 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_04);
        column_02_link_04.attr("href", "#")
            .text(apps.column_02[i].link_text_04);

        var column_02_link_05 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_05);
        column_02_link_05.attr("href", "#")
            .text(apps.column_02[i].link_text_05);

        var column_02_link_06 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_06);
        column_02_link_06.attr("href", "#")
            .text(apps.column_02[i].link_text_06);

        var column_02_link_07 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_07);
        column_02_link_07.attr("href", "#")
            .text(apps.column_02[i].link_text_07);

        var column_02_link_08 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_08);
        column_02_link_08.attr("href", "#")
            .text(apps.column_02[i].link_text_08);

        var column_02_link_09 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_09);
        column_02_link_09.attr("href", "#")
            .text(apps.column_02[i].link_text_09);

        var column_02_link_10 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_10);
        column_02_link_10.attr("href", "#")
            .text(apps.column_02[i].link_text_10);

        var column_02_link_11 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_11);
        column_02_link_11.attr("href", "#")
            .text(apps.column_02[i].link_text_11);

        var column_02_link_12 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_12);
        column_02_link_12.attr("href", "#")
            .text(apps.column_02[i].link_text_12);

        var column_02_link_13 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_13);
        column_02_link_13.attr("href", "#")
            .text(apps.column_02[i].link_text_13);

        var column_02_link_14 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_14);
        column_02_link_14.attr("href", "#")
            .text(apps.column_02[i].link_text_14);

        var column_02_link_15 = $('<a>').addClass("column_02__link");
        column_02.append(column_02_link_15);
        column_02_link_15.attr("href", "#")
            .text(apps.column_02[i].link_text_15);
    }

    for (var i = 0; i < apps.column_03.length; i++) {

        var column_03_title = $('<h3>').addClass("column_03__title");
        column_03.append(column_03_title);
        column_03_title.text(apps.column_03[i].title);

        var column_03_title_yellow = $('<span>').addClass("column_03__title_yellow");
        column_03_title.append(column_03_title_yellow);
        column_03_title_yellow.text(apps.column_03[i].title_yellow);

        var column_03_text = $('<p>').addClass("column_03__text");
        column_03.append(column_03_text);
        column_03_text.text(apps.column_03[i].text);

        var column_03_img = $('<img>').addClass("column_03__img");
        column_03.append(column_03_img);
        column_03_img.attr("src", "img/01.jpg");
    }
}

/* Show/Hide buttons functioning*/

    $(".column_01").on("click", ".column_01__link", function (e) {
        e.preventDefault();
        if ($(this).text() == "more >") {
            $(this).text("hide");
            $(this).closest(".column_01-wrapper").find(".column_01__text-inner")
                .animate({"height": column_01_text_initial_height + 40}, 380)
                .animate({"height": column_01_text_initial_height + 0}, 420)
                .removeClass("column_01__text-inner_inactive")
                .addClass("column_01__text-inner_active");
        } else {
            $(this).text("more >");
            var column_01_text_inner = $(this).closest(".column_01-wrapper").find(".column_01__text-inner")
                .animate({"height": column_01_text_initial_height + 40}, 380)
                .animate({"height": "190"}, 280)
                .removeClass("column_01__text-inner_active");

            setTimeout(function () {
                column_01_text_inner
                    .addClass("column_01__text-inner_inactive");
            }, 700);
        }
    });


/* Slider*/

jQuery(document).ready(function () {
    function Slider() {

        var sliderWrap = jQuery('.slider-wrap'),
            sliderWidth = jQuery('.slider__item').outerWidth(),
            scrollSlider = sliderWrap.position().left - sliderWidth;

        sliderWrap.animate({left: scrollSlider}, 500, function () {
            sliderWrap
                .find('.slider__item:first')
                .appendTo(sliderWrap)
                .parent()
                .css({'left': 0});
        });
    }

    Slider();

});

