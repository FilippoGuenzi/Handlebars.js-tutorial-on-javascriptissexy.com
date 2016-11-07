$(
    function () {

        var model = {
            pageTitle : "The Rolling Stones discography"
            , bodyTitle : "The Rolling Stones discs"
            , composer: "Mick Jagger"
            , discs: [
                {
                    title: "The Rolling Stones"
                    , releaseDate: "16.04.1964"
                }
                , {
                    title: "12 x 5"
                    , releaseDate: "17.10.1964"
                }
                , {
                    title: "The Rolling Stones n°2"
                    , releaseDate: "15.01.1965"
                }
            ]
        };

        var pageTitleTemplate = $("#pageTitle").html();
        var bodyTitleTemplate = $("#bodyTitle").html();
        var discographyTemplate = $("#discography").html();

        var pageTitleTemplateFunction = Handlebars.compile(pageTitleTemplate);
        var bodyTitleTemplateFunction = Handlebars.compile(bodyTitleTemplate);
        var discographyTemplateFunction = Handlebars.compile(discographyTemplate);

        $(document.head).append(pageTitleTemplateFunction(model));
        $(document.body).append(bodyTitleTemplateFunction(model));
        $(document.body).append(discographyTemplateFunction(model));

    }
);
