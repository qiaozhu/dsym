/**
  扩展一个mask模块
  用于元素遮罩
**/
// 提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
layui.define('layer', function (exports) {
    var obj = {
        hello: function (str) {
            console.log(layer);
            console.log(layui.$);
            console.log($('.blockUI-content').html());
            alert('Hello ' + (str || 'mask'));
        }
    };

    //输出test接口
    exports('mask', obj);
});