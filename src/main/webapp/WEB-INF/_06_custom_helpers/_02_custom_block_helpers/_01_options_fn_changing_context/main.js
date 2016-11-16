$(
    function () {

        var model = [
            {firstName: "John", lastName: "Milestone", score: 8}
            , {firstName: "Edward", lastName: "Fitzgerald", score: 17}
        ];

        Handlebars.registerHelper(
            "playerScore"
            , function(data, options) {
                for(var i = 0 ; i < data.length ; i++) {
                    options.fn(data[i]);
                }
            }
        );

        var templateContent = $("#score").html();
        var templateFunction = Handlebars.compile(templateContent);

        $(document.body).append(templateFunction(model));
    }
);
