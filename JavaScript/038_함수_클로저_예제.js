// JS 스나이퍼 예제

var outer = function () {
    var a = 1;
    var inner = function () {
        var b = 5;
        var c = 6;
        a = a + b + c;
        console.log(a);
    };
    inner();
};
outer();

//------------------------------------//

var outer = function () {
    var a = 1;
    var inner = function () {
        var b = 5;
        var c = 6;
        a = a + b + c;
        console.log(a);
    };
    return inner;
};

var newInner = outer();
newInner();

//------------------------------------//

var person = (function () {
    var age = 15;

    return {
        name: "wade",

        getAge: function () {
            console.log(age);
            return age;
        },

        setAge: function (val) {
            age = val;
            console.log(age);
        }
    }
})();

person.getAge();
person.setAge(20);

person.age = 30;
person.getAge();