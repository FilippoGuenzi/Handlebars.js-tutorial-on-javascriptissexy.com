$(
    function () {

        var model = {
            pageTitle: "Les grades de la marine",
            bodyTitle: "Vous rêvez de devenir Amiral ?!",
            grades: [
                {name: "Amiral"}
                , {name: "Vice-amiral d'escadre"}
                , {name: "Vice-amiral"}
                , {name: "Contre-amiral"}
                , {name: "Capitaine de vaisseau"}
                , {name: "Capitaine de frégate"}
                , {name: "Capitaine de corvette"}
                , {name: "Lieutenant de vaisseau"}
                , {name: "Enseigne de vaisseau de 1ère classe"}
                , {name: "Enseigne de vaisseau de 2ème classe"}
                , {name: "Aspirant"}
                , {name: "Major"}
                , {name: "Maître principal"}
                , {name: "Premier maître"}
                , {name: "Maître"}
                , {name: "Second maître"}
                , {name: "Quartier-maître de 1ère classe"}
                , {name: "Quartier-maître de 2ème classe"}
                , {name: "Matelot breveté"}
            ]
        };
        
        var pageTitleTemplateContent = $("#pageTitle").html();
        var bodyTitleTemplateContent = $("#bodyTitle").html();
        var listOfGradesTemplateContent = $("#listOfGrades").html();

        var pageTitleTemplateFunction = Handlebars.compile(pageTitleTemplateContent);
        var bodyTitleTemplateFunction = Handlebars.compile(bodyTitleTemplateContent);
        var listOfGradesTemplateFunction = Handlebars.compile(listOfGradesTemplateContent);
        
        $(document.head).append(pageTitleTemplateFunction(model));
        $(document.body).append(bodyTitleTemplateFunction(model));
        $(document.body).append(listOfGradesTemplateFunction(model));
    }
);
