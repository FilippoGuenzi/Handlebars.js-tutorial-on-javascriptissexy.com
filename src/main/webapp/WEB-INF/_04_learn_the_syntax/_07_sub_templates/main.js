$(
    function () {

        var model = {
            discs: [
                {title: "The Rolling Stones", releaseDate: "16 aprile, 1964", recordings: "Decca Records"}
                , {title: "12 x 5", releaseDate: "17 ottobre, 1964", recordings: "London Records"}
                , {title: "The Rolling Stones No.2", releaseDate: "15 gennaio, 1965", recordings: "Decca Records"}
                , {title: "The Rolling Stones, Now!", releaseDate: "13 febbraio, 1965", recordings: "London Records"}
                , {title: "Out of Our Heads", releaseDate: "24 settembre, 1965", recordings: "Decca Records"}
            ]
        };

        var discographyTemplateContent = $("#discography").html();
        var detailsTemplateContent = $("#details").html();

        var discographyTemplateFunction = Handlebars.compile(discographyTemplateContent);
        Handlebars.registerPartial("details", detailsTemplateContent);

        $(document.body).append(discographyTemplateFunction(model));

    }
);
