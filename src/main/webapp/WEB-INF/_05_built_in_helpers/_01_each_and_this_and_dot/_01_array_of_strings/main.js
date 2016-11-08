$(
    function(){
        
        var model = {customers:['John', 'Paul', 'Marc', 'Edward', 'Luc']};
        
        var thereTemplateContent = $("#there").html();
        var thereTemplateFunction = Handlebars.compile(thereTemplateContent);
        
        $(document.body).append(thereTemplateFunction(model));
    }
);
