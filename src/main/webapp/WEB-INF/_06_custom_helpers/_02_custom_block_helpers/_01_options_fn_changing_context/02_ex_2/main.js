$(
    function () {

        var model = [
            {firstName: "John", lastName: "Milestone", score: [7, 16, 3, 98]}
            , {firstName: "Edward", lastName: "Fitzgerald", score: [1, 8, 43, 68]}
        ];

        Handlebars.registerHelper(
            "for"
            , function(data, options) {
                var template = "";
                for(var i = 0 ; i < data.length ; i++) {
                    data[i].score = data[i].score.reduce(
                        function(a, b){
                            return a + b;
                        }, 0
                    );
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
