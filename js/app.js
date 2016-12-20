(function(){
    var app = angular.module('catApp',[]);

    app.controller('CatController', function(){
        this.cats = model;
        this.selectedCat = this.cats[0];

        this.selectCat = function(index){
            this.selectedCat = this.cats[index];
        }

        this.incrementCatCounter = function(cat){
            cat.clickCounter++;
        }
    });

    var model = [
            new Cat('John', 'image/octocat.png'),
            new Cat('Mike', 'image/octocat2.jpg'),
            new Cat('Robert', 'image/octocat3.jpg'),
            new Cat('Dave', 'image/octocat4.png'),
            new Cat('Peter', 'image/octocat5.png')
         ];

    function Cat(name, imageSource){
        this.clickCounter = 0;
        this.name = name;
        this.imageSource = imageSource;
    }
}());