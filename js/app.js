(function(){
    var app = angular.module('catApp',[]);

    app.controller('CatController', function(){
        this.cats = [
            new Cat('John', 'image/octocat.png'),
            new Cat('Mike', 'image/octocat2.jpg'),
            new Cat('Robert', 'image/octocat3.jpg'),
            new Cat('Dave', 'image/octocat4.png'),
            new Cat('Peter', 'image/octocat5.png')
         ];
        this.selectedCat = this.cats[0];
        this.selectCat = function(index){
            this.selectedCat = this.cats[index];
        }
    });

    function Cat(name, imageSource){
        this.clicks = 0;
        this.name = name;
        this.imageSource = imageSource;

        this.click = function(){
            this.clicks++;
        }
    }
}());