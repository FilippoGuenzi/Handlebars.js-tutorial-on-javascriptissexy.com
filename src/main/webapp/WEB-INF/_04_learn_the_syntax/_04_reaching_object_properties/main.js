$(
    function () {

        var model = {
            pageTitle: "La salvia"
            , bodyTitle: "Tassonomia della Salvia Officinalis"
            , dominio: {
                nome: "Eukaryota"
                , regno: {
                    nome: "Plantae"
                    , divisione: {
                        nome: "Magnioliophyta"
                        , classe: {
                            nome: "Magnioliopsida"
                            , ordine: {
                                nome: "Lamiales"
                                , famiglia: {
                                    nome: "Lamiaceae"
                                    , sottofamiglia: {
                                        nome: "Neptoideae"
                                        , tribu: {
                                            nome: "Mentheae"
                                            , genere: {
                                                nome: "Salvia"
                                                , specie: {
                                                    nome: "Salvia Officinalis"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        var pageTitleTemplateContent = $("#pageTitle").html();
        var bodyTitleTemplateContent = $("#bodyTitle").html();
        var sageTaxonomyTemplateContent = $("#sageTaxonomy").html();

        var pageTitleTemplateFunction = Handlebars.compile(pageTitleTemplateContent);
        var bodyTitleTemplateFunction = Handlebars.compile(bodyTitleTemplateContent);
        var sageTaxonomyTemplateFunction = Handlebars.compile(sageTaxonomyTemplateContent);

        $(document.head).append(pageTitleTemplateFunction(model));
        $(document.body).append(bodyTitleTemplateFunction(model));
        $(document.body).append(sageTaxonomyTemplateFunction(model));

    }
);
