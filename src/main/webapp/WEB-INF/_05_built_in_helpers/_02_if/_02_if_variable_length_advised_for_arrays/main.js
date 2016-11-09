$(
    function () {

        var model = {
            array1: ["white", "grey", "black", "yellow", "green", "blue", "purple", "red", "orange", "brown"]
            , array2: []
        };

        var ifTemplateContent = $("#if").html();
        var ifTemplateFunction = Handlebars.compile(ifTemplateContent);

        $(document.body).append(ifTemplateFunction(model));

    }
);
