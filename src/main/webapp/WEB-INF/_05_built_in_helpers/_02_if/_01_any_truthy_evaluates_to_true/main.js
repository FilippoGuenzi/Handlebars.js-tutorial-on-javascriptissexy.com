$(
    function () {

        var model = {
            variable1: {}
            , variable2: "yes"
            , variable3: 3
            , variable4: true
            , variable5: null
            , variable6: undefined
            , variable7: ""
            , variable8: 0
            , variable9: NaN
            , variable10: false
        };

        var ifTemplateContent = $("#if").html();
        var ifTemplateFunction = Handlebars.compile(ifTemplateContent);

        $(document.body).append(ifTemplateFunction(model));

    }
);
