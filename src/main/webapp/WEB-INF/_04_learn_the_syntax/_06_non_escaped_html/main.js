$(
    function(){
        
        var model = {html : "<h1>Super !</h1>"}
        
        var escapedTemplate = $("#escaped").html();
        var nonEscapedTemplate = $("#non-escaped").html();
        
        var escapedTemplateFunction = Handlebars.compile(escapedTemplate);
        var nonEscapedTemplateFunction = Handlebars.compile(nonEscapedTemplate);
        
        $(document.body).append(escapedTemplateFunction(model));
        $(document.body).append("<br />");
        $(document.body).append(nonEscapedTemplateFunction(model));
        
    }
);
