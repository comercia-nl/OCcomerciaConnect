$(function() {
    $(".simpleConnectButton").click(function () {
        $storeElement = $(this).parents(".store");
        storeId = $storeElement.data("store");
        var simpleConnectUrl=$storeElement.data("scu");

        var w = 800;
        var h = 500;
        var left = (screen.width - w) / 2;
        var top = (screen.width - h) / 2;


        window.open(simpleConnectUrl, "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);
    });

    function setStoreMode(){
        var storeMode=$("#comerciaConnect_syncMethod").val();
        if(storeMode==0){
            $(".store:not([data-store='0'])").hide();
        }else{
            $(".store:not([data-store='0'])").show();
        }
    }

    setStoreMode();
    $("#comerciaConnect_syncMethod").change(setStoreMode);

    $(".openButton").click(function(){
        $storeElement = $(this).parents(".store");
        $storeElement.addClass("opened");
    });

    $(".closeButton").click(function(){
        $storeElement = $(this).parents(".store");
        $storeElement.removeClass("opened");
    });
});

var storeId = 0;
function simple_connect_finish(base_url, auth_url, api_url, api_key) {
    $("#" + storeId + "_base_url").val(base_url)
    $("#" + storeId + "_auth_url").val(auth_url)
    $("#" + storeId + "_api_url").val(api_url);
    $("#" + storeId + "_api_key").val(api_key);
    $("#" + storeId + "_status").val(1);
    $('#form').submit();
}