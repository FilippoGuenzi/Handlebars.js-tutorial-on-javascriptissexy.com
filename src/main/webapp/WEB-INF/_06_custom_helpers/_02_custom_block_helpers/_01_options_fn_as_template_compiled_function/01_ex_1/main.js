$(
    function () {

        var model = [
            {firstName: "John", lastName: "Milestone", score: 8}
            , {firstName: "Edward", lastName: "Fitzgerald", score: 17}
        ];

        Handlebars.registerHelper(
            "for"
            , function(data, options) {
                var template = "";
                for(var i = 0 ; i < data.length ; i++) {
                    template += options.fn(data[i]);
                }
                return template;
            }
        );

        var templateContent = $("#score").html();
        var templateFunction = Handlebars.compile(templateContent);

        $(document.body).append(templateFunction(model));
    }
);
