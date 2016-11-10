$(
    function () {

        var model = {
            activities: {
                outdoorActivity: "horse-ridding"
                , indoorActivity: "reading"
            }
            , recipes: {
                forChildren: "pasta in bianco"
                , forParents: "oysters"
                , sundayRecipes: {
                    desssert: "montebianco"
                    , mainPlate: "insalata russa"
                }
            }
        }

        var withTemplateContent = $("#with").html();
        var withTemplateFunction = Handlebars.compile(withTemplateContent);

        $(document.body).append(withTemplateFunction(model));

    }
);
