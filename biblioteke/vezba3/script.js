$(function () {

    var timeout;
    $('input#search').on('input', function () {
        if (this.value !== "") {
            if (timeout != undefined) {
                window.clearTimeout(timeout);

            }
             
            timeout = setTimeout(function () {

                $.ajax({
                    method: "GET",
                    url: "https://run.mocky.io/v3/c16e64b1-fa0e-4940-999b-7b3de87b4323"
                }).done(function(data){
                    var filterData = data.filter(person => person.name.toLowerCase().includes(searchTerm)).map(person => person.name);
                    setElementsInSuggestionBox(filterData);
                    console.log(filterData);
                })
            }, 600);

        } else {
            var list = $('ul');
            list.empty();
        }
    })
});

const setElementsInSuggestionBox = function (filteredNames) {
    var list = $('ul');
    list.empty();
    filteredNames.forEach(name => {
        $('<li>').text(name).appendTo(list);
    });
}