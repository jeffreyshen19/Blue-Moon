function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
];

$(function() {
    var query = getUrlParameter("query");
    $("#search-box").val(query);
    var results = [];
    $.getJSON('/search.json', function(data) {
        var arr = $.map(data, function(el) { return el });
        for(i in arr){
          var alldata = "";
          for(key in arr[i]){
            alldata += arr[i][key] + " ";
          }
          if(alldata.toLowerCase().indexOf(query.toLowerCase()) != -1){
            results.push(arr[i]);
            var d = new Date(arr[i].date);
            var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
            $("#search-results").append("<section><a href = \"" + arr[i].url +"\"></a><h3>" + arr[i].title + "</h3><p>" + arr[i].description +"</p><p class = 'subtitle'><span>" + arr[i].author.toUpperCase() + "</span> • " + date +" </p></section>");
          }
        }
        if(results.length == 0) $("#search-results").html("<h1>Oops! Your search for \""+ query + "\" didn't yield any results</h1>");
    });
});
