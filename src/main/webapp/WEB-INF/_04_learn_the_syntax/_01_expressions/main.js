$(
    function(){
        
        var model = {title:"Le règne animal"};
        
        var pageTitleTemplateContent = $("#pageTitle").html();
        var bodyTitleTemplateContent = $("#bodyTitle").html();
        
        var pageTitleTemplateFunction = Handlebars.compile(pageTitleTemplateContent);
        var bodyTitleTemplateFunction = Handlebars.compile(bodyTitleTemplateContent);
        
        $(document.head).append(pageTitleTemplateFunction(model));
        $(document.body).append(bodyTitleTemplateFunction(model));
        
    }
);
