rssmailer.util.ajaxrequest = rssmailer.util.ajaxrequest || {};


rssmailer.util.ajaxrequest.postRequest=function(url, data, callback) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: localStorage.getItem("services_url") + url + "?token=" + localStorage.getItem("token"),
        data: data,
        dataType: "json",
        success: function (res) {
            if (res == 401) {                        
                window.location = "login.html";
            }
            callback(res);
        }
    });
}



rssmailer.util.ajaxrequest.getRequest = function(url, callback) {
    $.ajax({
        type: "GET",
        url: localStorage.getItem("services_url") + url + "?token=" + localStorage.getItem("token"),
        dataType: "json",
        success: function (res) {
            if (res == 401) {                        
                window.location = "login.html";
            }
            callback(res);
        }
    });
}