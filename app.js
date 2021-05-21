function getdata() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost/mobile.json", true);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = xmlhttp.responseText;
        var o = JSON.parse(result);
        var data = "";
        for (var i = 0; i < o.length; i++) {
            data += '<div class="table-responsive"><table class="table  table-striped text-align-center my-5  ">\
            <tr><th>Model</th><td>'+ o[i]["Model"] + '</td> <td rowspan=8><img class "img-fluid" src=' + o[i]["image"] + ' width="200px"></td></tr>\
            <tr><th>Brand</th><td>'+ o[i]["Brand"] + '</td></tr>\
            <tr><th>MRP</th><td>'+ o[i]["mrp"] + '</td></tr>\
            <tr><th>RAM</th><td>'+ o[i]["RAM"] + '</td></tr>\
            <tr><th>ROM</th><td>'+ o[i]["ROM"] + '</td></tr>\
            <tr><th>Camera</th><td>'+ o[i]["Camera"] + '</td></tr>\
            <tr><th>isAvailable</th><td>'+ o[i]["isAvailable"] + '</td></tr>\
            <tr><th>Buy Now</th><td>'+ o[i]["Buy Now"] + '</td></tr>\
            </table>\
            </div>\
            ';
        }
        document.getElementById("demo").innerHTML = data;
    }
}