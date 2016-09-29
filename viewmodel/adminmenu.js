ebazar.vm.adminmenu = ebazar.vm.adminmenu||{};
var model = ebazar.vm.adminmenu;

model.showAddMarketView = function(){
    $("#mainview").load("../view/admin/create_market_view.html");
}

model.showAddPointView = function(){
    $("#mainview").load("../view/admin/create_point_view.html");
}