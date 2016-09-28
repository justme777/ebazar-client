var ebazar = window.store||{};
ebazar.vm =ebazar.vm||{};
ebazar.util = ebazar.util||{}; 
ebazar.util.startup = ebazar.util.startup || {};
var model = ebazar.util.startup;

model.loadConfig = function(){
    $.getJSON("config.json", function (json) {
        $.each(json, function (k, v) {
            localStorage.setItem(k, v);
        });
    });
}

model.loadViews=function(){
    $("#mainview").load("/view/mainview.html");
    $("#header").load("/view/headerview.html");
    $("#categories").load("/view/categoriesview.html");
    $("#brands").load("/view/brandsview.html");
    $("#footer").load("/view/footerview.html");
    //$("#slider").load("/view/sliderview.html");
}

model.loadAdminViews=function(){
    $("#sidebar-wrapper").load("/admin/leftmenu.html");
    $("#mainview").load("/admin/mainview.html");
}

model.login = function(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var postData = { 'username': username, 'password': password };



    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: localStorage.getItem("services_url") + "system/auth?token=0",
        data: JSON.stringify(postData),
        dataType: "json",
        success: function (res) {
            alert(res);
            localStorage.setItem("token", res);
            if (res == 401) {

            }
            else {
                window.location = "index.html";
            }
        }
    });
}