ebazar.vm.market = ebazar.vm.market||{};
var model = ebazar.vm.market;

model.marketTypes = ko.observableArray();
model.addresses = ko.observableArray();

model.createMarket = function(){
    //var market;
    //var a = $('#ddlMarketTypes').val();
    
}

model.loadFormData = function(){
    ajax_data("GET","http://ebazar:8181/addresses",model.loadAddresses);
    ajax_data("GET","http://ebazar:8181/markettypes",model.loadMarketTypes);
}

model.loadAddresses = function(res){
    var arr = res['addresses'];
    model.addresses(arr);
}

model.loadMarketTypes = function(res){
    var arr = res['markettypes'];
    model.marketTypes(arr);
}