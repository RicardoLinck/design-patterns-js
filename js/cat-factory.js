(function(){
    window.app = window.app ||angular.module('catApp',[]);
      
    window.app.factory('CatFactory', function(){
        var model = [
            new Cat('Adam', 'image/octocat.png'),
            new Cat('Mike', 'image/octocat2.jpg'),
            new Cat('Robert', 'image/octocat3.jpg'),
            new Cat('Dave', 'image/octocat4.png'),
            new Cat('Peter', 'image/octocat5.png')
         ];

         var factory = {};

         factory.getCats = function(){
             return model;
         }

         return factory;
    });

    function Cat(name, imageSource){
        this.clickCounter = 0;
        this.name = name;
        this.imageSource = imageSource;
    }
})();