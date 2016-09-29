ebazar.util.ajaxrequest = ebazar.util.ajaxrequest || {};


ebazar.util.ajaxrequest.postRequest=function(url, data, callback) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: localStorage.getItem("services_url") + url,
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



ebazar.util.ajaxrequest.getRequest = function(url, callback) {
    $.ajax({
        type: "GET",
        url: localStorage.getItem("services_url") + url,
        dataType: "json",
        success: function (res) {
            if (res == 401) {                        
                window.location = "login.html";
            }
            callback(res);
        }
    });
}

ebazar.util.ajaxrequest = function(type,url, success)
{
    /*
    $.ajax({
        type:type,
        url:url,
        dataType:"json",
        restful:true,
        cache:false,
        timeout:20000,
        async:true,
        beforeSend :function(data) { },
        success:function(data){
            success.call(this, data);
            },
        error:function(data){
            alert("Error In Connecting");
        }
    });*/
    alert('asda');
}

