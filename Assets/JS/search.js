function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function xmlToJson(xml) {
    var obj = {};
    if (xml.nodeType == 3) {
        obj = xml.nodeValue;
    }

    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
        obj = xml.childNodes[0].nodeValue;
    } else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

$(document).ready(function() {
    var query = getParameterByName("query");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', '/feed.xml');
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState != 4) return;
        if (xmlhttp.status != 200 && xmlhttp.status != 304) {
            return;
        }

        var node = (new DOMParser).parseFromString(xmlhttp.responseText, 'text/xml');
        node = node.children[0];
        var posts = xmlToJson(node).channel.item;


        var matchingPosts = posts.filter(function(post) {
            if (post.title.indexOf(query) !== -1 || post.description.indexOf(query) !== -1) {
                return true;
            }
        });

        for(var i = 0; i < matchingPosts.length; i++){
          //var date = matchingPosts[i].pubDate;
          //console.log(date);
          $("#search-results").html(`<section><a href = "${matchingPosts[i].link}"></a><h3>${matchingPosts[i].title}</h3><p>Lorem Ipsum</p><p class = "subtitle"><span>${matchingPosts[i].author}</span> • ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</p></section>`);
          console.log(matchingPosts);
        }

        if(matchingPosts.length == 0)
          $("#search-results").html("<p class = 'error'>Sorry! There were no results for " + query + ".</p>")
    }
    xmlhttp.send();
});
