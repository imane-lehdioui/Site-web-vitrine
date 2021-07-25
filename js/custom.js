$(document).ready(function () {
    
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);

    $("#toutesCategorie").click(function () {
        if (lastPathSegment !== 'index.html') {
            window.location.href = "index.html";
        }
        $("article[data-categorie=1]").show();
        $("article[data-categorie=2]").show();
        $("article[data-categorie=3]").show();
        $("article[data-categorie=4]").show();
    });

    $("#highTechCategorie").click(function () {
        if (lastPathSegment !== 'index.html') {
            window.location.href = "index.html";
        }
        $("article[data-categorie=1]").show();
        $("article[data-categorie=2]").hide();
        $("article[data-categorie=3]").hide();
        $("article[data-categorie=4]").hide();
    });

    $("#jouetsCategorie").click(function () {
        if (lastPathSegment !== 'index.html') {
            window.location.href = "index.html";
        }
        $("article[data-categorie=1]").hide();
        $("article[data-categorie=2]").show();
        $("article[data-categorie=3]").hide();
        $("article[data-categorie=4]").hide();
    });

    $("#maisonCategorie").click(function () {
        if (lastPathSegment !== 'index.html') {
            window.location.href = "index.html";
        }
        $("article[data-categorie=1]").hide();
        $("article[data-categorie=2]").hide();
        $("article[data-categorie=3]").show();
        $("article[data-categorie=4]").hide();
    });

    $("#sportsCategorie").click(function () {
        if (lastPathSegment !== 'index.html') {
            window.location.href = "index.html";
        }
        $("article[data-categorie=1]").hide();
        $("article[data-categorie=2]").hide();
        $("article[data-categorie=3]").hide();
        $("article[data-categorie=4]").show();
    });

});
