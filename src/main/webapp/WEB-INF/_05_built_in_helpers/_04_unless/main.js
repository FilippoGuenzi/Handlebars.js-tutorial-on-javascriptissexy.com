$(
    function () {

        var model = {
            variable1: {}
            , variable2: "yes"
            , variable3: 3
            , variable4: true
            , variable5: [2, 3, 7]
            , variable6: ""
            , variable7: 0
            , variable8: false
            , variable9: []
            , variable10: null
            , variable11: undefined
            , variable12: NaN
        };

        var templateContent = $("#unless").html();
        var templateFunction = Handlebars.compile(templateContent);

        $(document.body).append(templateFunction(model));

    }
);
