$(
    function(){

        var XOR = function(a, b){
            if(typeof a === "boolean" && typeof b === "boolean" && (a||b) && (a!==b)){
                return true;
            } else {
                return false;
            }
        };
        Handlebars.registerHelper("XOR", XOR);

        var templateContent = $("#customFunctionHelpers").html();
        var templateFunction = Handlebars.compile(templateContent);
        $(document.body).append(templateFunction());

    }
);
