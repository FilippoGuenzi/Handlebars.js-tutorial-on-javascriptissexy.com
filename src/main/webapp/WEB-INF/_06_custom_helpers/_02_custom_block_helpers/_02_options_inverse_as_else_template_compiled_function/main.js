$(
    function () {

        var model = {
            rows: [
                {highlight: false, h1: "title1.1", h2: "title1.2", h3: "title1.3", h4: "title1.4"}
                , {highlight: false, h1: "title2.1", h2: "title2.2", h3: "title2.3", h4: "title2.4"}
                , {highlight: false, h1: "title3.1", h2: "title3.2", h3: "title3.3", h4: "title3.4"}
                , {highlight: true, h1: "title4.1", h2: "title4.2", h3: "title4.3", h4: "title4.4"}
                , {highlight: true, h1: "title5.1", h2: "title5.2", h3: "title5.3", h4: "title5.4"}
                , {highlight: false, h1: "title6.1", h2: "title6.2", h3: "title6.3", h4: "title6.4"}
            ]
        };

        Handlebars.registerHelper("row", function (array, options) {
            var functionImage = "";
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                if (item.highlight) {
                    item.style = "{bold:true}";
                    functionImage += options.fn(item);
                } else {
                    item.style = "{italic:true}";
                    functionImage += options.inverse(item);
                }
            }
            return functionImage;
        })

        var templateContent = $("#template").html();
        var templateFunction = Handlebars.compile(templateContent);

        $(document.body).append(templateFunction(model));

    }
);
