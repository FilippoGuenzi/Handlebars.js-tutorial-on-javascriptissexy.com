$(
    function () {

        var model = [
                {name: "Nike", price: 199.00}
                , {name: "Loafers", price: 59.00}
                , {name: "WingTip", price: 259.00}
            ];

        var shoeTemplateRawContent = $("#shoe-template").html();
        var compiledShoeTemplate = Handlebars.compile(shoeTemplateRawContent);

        $(".shoesNav").append(compiledShoeTemplate(model));
    }
);
