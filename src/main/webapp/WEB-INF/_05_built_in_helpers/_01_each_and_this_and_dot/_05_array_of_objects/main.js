$(
    function () {

        var model = {customers: [{firstName: 'Marc', lastName: 'Furlain'}, {firstName: 'Paul', lastName: 'Snash'}]};

        var thereTemplateContent = $("#there").html();
        var thereTemplateFunction = Handlebars.compile(thereTemplateContent);

        $(document.body).append(thereTemplateFunction(model));
    }
);
