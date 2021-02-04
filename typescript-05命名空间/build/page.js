"use strict";
var Components;
(function (Components) {
    var Animal = /** @class */ (function () {
        function Animal() {
            var elem = document.createElement('div');
            elem.innerText = 'I am an Animal';
            document.body.appendChild(elem);
        }
        return Animal;
    }());
    Components.Animal = Animal;
    var People = /** @class */ (function () {
        function People() {
            var elem = document.createElement('div');
            elem.innerText = 'I am a People';
            document.body.appendChild(elem);
        }
        return People;
    }());
    Components.People = People;
    var Car = /** @class */ (function () {
        function Car() {
            var elem = document.createElement('div');
            elem.innerText = 'I am a Car';
            document.body.appendChild(elem);
        }
        return Car;
    }());
    Components.Car = Car;
})(Components || (Components = {}));
System.register("useNameSpace", [], function (exports_1, context_1) {
    "use strict";
    var Page;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Page = /** @class */ (function () {
                function Page() {
                    new Components.Animal();
                    new Components.People();
                    new Components.Car();
                }
                return Page;
            }());
            exports_1("Page", Page);
        }
    };
});
