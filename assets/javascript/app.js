$(document).ready(function () {

    var projects = [
        {
            image: "giphy.png",
            title: "Gif Search",
            description: "Find cool gifs, powered by Giphy!",
            appUrl: "https://ernie1994.github.io/gifTastic/",
            githubUrl: "https://github.com/ernie1994/gifTastic"
        },
        {
            image: "cute-dog.jpg",
            title: "Event Me",
            description: "Plan your next fun event!",
            appUrl: "https://medricr.github.io/group-project/",
            githubUrl: "https://github.com/medricr/group-project"
        },
        {
            image: "Ned_Stark.jpg",
            title: "Game of Thrones Trivia",
            description: "Test your Game of Thrones knowledge!",
            appUrl: "https://ernie1994.github.io/TriviaGame/",
            githubUrl: "https://github.com/ernie1994/TriviaGame"
        },
        {
            image: "node.png",
            title: "Liri Search App",
            description: "Search for movies, concerts, and songs.<br>Powered by Node.js",
            appUrl: null,
            githubUrl: "https://github.com/ernie1994/liri-node-app"
        },
    ];

    function createProjectsHTML() {
        projects.forEach((proj) => {

            var $parent = $("#projects");

            var side = projects.indexOf(proj) % 2 == 0 ? 0 : 1;

            var $project = $("<div>")
                .addClass("col project my-5")
                .attr("data-side", side);

            var $row = $("<div>")
                .addClass("row justify-content-center justify-content-md-start");

            var $imgCol = $("<div>")
                .addClass("col-md-6 d-flex justify-content-center justify-content-md-end");

            var $img = $("<img>")
                .addClass("img-fluid img-thumbnail")
                .attr("src", "./assets/images/" + proj.image);

            var $projectInfo = $("<div>")
                .addClass("project-info col-md-6 text-center text-md-left")
                .append("<br>")
                .append($("<h2>")
                    .html(proj.title))
                .append($("<h6>")
                    .addClass("project-descr text-center text-md-left")
                    .html(proj.description))
                .append("<br>");

            if (proj.appUrl) {
                $projectInfo.append($("<a>")
                    .addClass("btn btn-secondary btn-sm")
                    .attr("href", proj.appUrl)
                    .text("Open App"));
            }

            $projectInfo.append($("<a>")
                .addClass("btn btn-dark btn-sm")
                .attr("href", proj.githubUrl)
                .text("GitHub Code"));


            $project.append($row);
            $row.append($imgCol);
            $imgCol.append($img);
            $row.append($projectInfo);

            $parent.append($project);

            $divider = $("<div>")
                .addClass("w-100");

            $parent.append($divider);

        });
    }

    function setUpPage() {
        $("#stars").height($("#stars").height() * 1.60);

        ["background-color", "border-color"].forEach((str) => {
            $("#html-tags").css(str, $("nav").css("background-color"));
        });

        $("a").attr("target", "_blank");

        $(".card-img-top").height($(".card-img-top").height());

        $(".project").each(function (_index, element) {
            var width = screen.width;
            var left = $(element).attr("data-side") == 0 ? "-" : "+";
            left += "=" + width;
            $(element).css({ left: left });
        });
    }

    function hideNavMenu() {
        $(".navbar-collapse").collapse("hide");
    }

    $(".myWork").click(() => {
        window.scroll({
            top: $("#portfolio").offset().top - $("nav").height()
        });
    });

    $(".contact").click(() => {
        window.scroll({
            top: $("#contact").offset().top - $("nav").height()
        });
    });

    $("#submit").click(() => {
        event.preventDefault();

        var phoneDigits = $("#phone").val();

        var phone = "(" + phoneDigits.slice(0, 3) + ")" + phoneDigits.slice(3, 6) + "-" + phoneDigits.slice(6);

        var url = "mailto:ernesto.garcia.lb@gmail.com?subject=" + encodeURIComponent("Job Offer") + "&body=" + encodeURIComponent($("#message").val()) + encodeURIComponent(" \n \nCall or text me at ") + encodeURIComponent(phone) + "!";

        window.open(url);

        $("form").remove();
    });

    $(document).scroll(() => {
        $(".project").each(function (_index, element) {
            if (element.getBoundingClientRect().top <= window.innerHeight) {
                $(element).animate({ left: 0 }, 650);
            }
        });
    });

    $(document.body).click(() => {
        hideNavMenu();
    });

    createProjectsHTML();

    setUpPage();
});