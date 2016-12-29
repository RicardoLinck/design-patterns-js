(function(){
    var app = angular.module('catApp',[]);

    app.controller('CatController', function(){
        this.cats = model;
        this.selectedCatAdmin;
        this.isAdminModeVisible = false;

        this.selectCat = function(cat){
            this.selectedCat = cat;
            this.isAdminModeVisible = false;
            this.selectedCatAdmin = null;
        }

        this.incrementCatCounter = function(cat){
            cat.clickCounter++;
        }

        this.showAdminMode = function(cat){
            this.isAdminModeVisible = true;
            this.selectedCatAdmin = angular.copy(cat);
        }

        this.saveAdminMode = function(){
            this.selectedCat.name = this.selectedCatAdmin.name;
            this.selectedCat.imageSource = this.selectedCatAdmin.imageSource;
            this.selectedCat.clickCounter = this.selectedCatAdmin.clickCounter;
            this.isAdminModeVisible = false;
        }

        this.hideAdminMode = function(){
            this.isAdminModeVisible = false;
        }
    });

    var model = [
            new Cat('Adam', 'image/octocat.png'),
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