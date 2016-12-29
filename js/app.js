(function(){
    window.app = window.app ||angular.module('catApp',[]);
      
    window.app.controller('CatController', ['CatFactory', function(catFactory){
        this.cats = catFactory.getCats();
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
    }]);
}());