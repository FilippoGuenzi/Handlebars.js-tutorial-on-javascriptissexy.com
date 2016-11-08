$(
    function () {

        var model = {customer : {firstName: 'Marc', lastName: 'Furlain'}};

        var thereTemplateContent = $("#there").html();
        var there2TemplateContent = $("#there2").html();
        var there3TemplateContent = $("#there3").html();
        var there4TemplateContent = $("#there4").html();
        var thereTemplateFunction = Handlebars.compile(thereTemplateContent);
        var there2TemplateFunction = Handlebars.compile(there2TemplateContent);
        var there3TemplateFunction = Handlebars.compile(there3TemplateContent);
        var there4TemplateFunction = Handlebars.compile(there4TemplateContent);

        $(document.body).append(thereTemplateFunction(model));
        $(document.body).append(there2TemplateFunction(model));
        $(document.body).append(there3TemplateFunction(model));
        $(document.body).append(there4TemplateFunction(model));
    }
);
