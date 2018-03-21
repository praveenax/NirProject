$(document).ready(function () {

    function renderTemplate(templateId, targetId, data) {
        $('#' + targetId).html(Handlebars.compile($("#" + templateId).html())(data));
    }


    // Define our data object
    var context = {
        "city": "London",
        "street": "Baker Street",
        "number": "221B"
    };




    renderTemplate("address-template", "openings", context);

    var pList = {
        people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley"
          ]
    }

    renderTemplate("peopleList", "apply", pList);




});
