var chutsu = {
    content: "#content",

    nav: "nav.md",
    home: "home.md",

    blog_path: "blog",
    blog_listing: "blog.md",

    disqus_template: "disqus.html",

    run: initialize
};

function parse_date(post_path) {
    var year = post_path.slice(0, 2);
    var month = post_path.slice(2, 4);
    var day = post_path.slice(4, 6);

    switch (month) {
    case "01":
        month = "JAN";
        break;
    case "02":
        month = "FEB";
        break;
    case "03":
        month = "MAR";
        break;
    case "04":
        month = "APR";
        break;
    case "05":
        month = "MAY";
        break;
    case "06":
        month = "JUN";
        break;
    case "07":
        month = "JUL";
        break;
    case "08":
        month = "AUG";
        break;
    case "09":
        month = "SEP";
        break;
    case "10":
        month = "OCT";
        break;
    case "11":
        month = "NOV";
        break;
    case "12":
        month = "DEC";
        break;
    }
    year = "20" + year;

    return day + " " + month + " " + year;
}

function parse_title(post_path) {
    var title;

    title = post_path.slice(7, -3);
    title  = title.replace(/_/g, " ");

    return title;
}

function list_single_blog_post(post_href) {
    var date = parse_date(post_href);
    var title = parse_title(post_href);
    var path = chutsu.blog_path + "/" + escape(post_href.replace(".md", ""));
    var list_post = [
        '<li class="page">',
        '<span class="date">' + date + '</span>',
        '<span class="title">',
            '<a href="#' + path + '">' + title + '</a>',
        '</span>',
        '</li>'
    ];

    return list_post.join("\n");
}

function list_blog_posts(data) {
    var lines = data.split("\n");
    var post_href;
    var date;
    var title;
    var content = "";

    content += "<ul>";
    for (var i = 0; i < lines.length; i++) {
        post_href = lines[i];
        if (post_href.length > 2) {
            content += list_single_blog_post(post_href);
        }
    }
    content += "</ul>";

    $("#content").html(
        '<section id="' + chutsu.blog_path + '">'
        + content
        + '</section>'
    );
}

function show_blog_posts(post_listing) {
    var origin = document.location.origin;

    $.get(post_listing, function(data) {
        list_blog_posts(data);

    }).fail(function() {
        var path = origin + "/" + post_listing;
        var err = "Opps can't find: " + path;
        alert(err);

    });
}

function normalize_paths() {
    // images
    $(chutsu.content + " img").map(function() {
        var src = $(this).attr("src").replace("./", "");
        if ($(this).attr("src").slice(0, 5) !== "http") {
            var url = location.hash.replace("#", "");

            // split and extract base dir
            url = url.split("/");
            var base_dir = url.slice(0, url.length - 1).toString();

            // normalize the path (i.e. make it absolute)
            if (base_dir) {
                $(this).attr("src", base_dir + "/" + src);
            } else {
                $(this).attr("src", src);
            }
        }
    });
}

function enable_disqus(content, hash, cb) {
    $.get(chutsu.disqus_template , function(data) {
        content += data;
        cb(hash, content);
    }).fail(function() {
        alert("Opps! ... File not found: " + path);
    });
}

function rerun_mathjax() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function load_content(hash, content) {
    $("#content").html(
        '<section id="' + hash.replace("#", "") + '">'
        + content
        + '</section>'
    );

    normalize_paths();
    rerun_mathjax();
}

function page_getter(cb) {
    var path;
    var hash = window.location.hash;

    // modify path
    path = hash.replace(/#/g, "");
    path += ".md";

    // get the markdown file and render it
    $.get(escape(path) , function(data) {
        data = marked(data);

        if (hash.split("/")[0].replace("#", "") == chutsu.blog_path) {
            enable_disqus(data, hash, cb);
        } else {
            load_content(hash, data);
        }
    }).fail(function() {
        alert("Opps! ... File not found: " + path);
    });
}

// function router() {
//     var hash = window.location.hash;
//     $('body').hide().fadeIn();
//
//     // hide all content
//     $("section #content").html("");
//
//     if (hash.replace("#", "") == chutsu.home|| hash == "") {
//         $.get(chutsu.home, function(data) {
//             data = marked(chutsu.home);
//             $("#content").html(data);
//         });
//     } else {
//         page_getter(load_content);
//     }
// }
//
function nav_init() {
    $.get(chutsu.nav, function(data) {
        data = marked(data);
        $("nav").html(data);
    }).fail(function() {
        alert("Opps! ... File " + path + "not found!");
    });
}

function initialize() {
    nav_init();

    // router();
    // $(window).on("hashchange", router);
}
