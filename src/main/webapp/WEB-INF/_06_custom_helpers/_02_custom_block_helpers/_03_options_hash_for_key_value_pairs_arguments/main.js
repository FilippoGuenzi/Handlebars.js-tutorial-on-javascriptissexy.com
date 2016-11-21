$(
    function(){
        
        var templateContent = $("#template").html();
        var templateFunction = Handlebars.compile(templateContent);
        Handlebars.registerHelper("show", function(options){
            return options.fn({name:options.hash.name, surname:options.hash.surname});
        });
        $(document.body).append(templateFunction());
    }
);
