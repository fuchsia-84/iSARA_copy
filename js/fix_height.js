//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height=$("#header").height();
    $("#top").css("padding-top", height);
});