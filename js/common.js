function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    alert(out);

    // or, if you wanted to avoid alerts...
    
    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre);
}


function ajax_data(type,url, success)
{
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
    });
}