"use strict";
// generics
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.storage = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.storage[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.storage[key];
    };
    MyMap.prototype.clear = function () {
        this.storage = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.storage)
            console.log(key + ": " + this.storage[key]);
    };
    return MyMap;
}());
var nummberMap = new MyMap();
nummberMap.setItem('apples', 5);
nummberMap.setItem('bananas', 10);
nummberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "John");
stringMap.setItem('age', "30");
stringMap.printMap();
//interfaces
