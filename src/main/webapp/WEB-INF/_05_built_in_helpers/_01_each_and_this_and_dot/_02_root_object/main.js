$(
    function () {

        var model = {firstName: 'Marc', lastName: 'Furlain'};

        var thereTemplateContent = $("#there").html();
        var thereTemplateFunction = Handlebars.compile(thereTemplateContent);

        $(document.body).append(thereTemplateFunction(model));
    }
);
