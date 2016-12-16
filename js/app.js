(function(){
    var app = angular.module('catApp',[]);

    app.controller('CatController', function(){
        this.cats = [new Cat('John'), new Cat('Mike')];
    });

    function Cat(name){
        this.clicks = 0;
        this.name = name;
        this.click = function(){
            this.clicks++;
        }
    }
}());