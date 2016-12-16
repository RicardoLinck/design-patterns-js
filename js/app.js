(function(){
    var app = angular.module('catApp',[]);

    app.controller('CatController', function(){
        this.clicks = 0;

        this.click  = function(){
            this.clicks++;
        }
    });
}());