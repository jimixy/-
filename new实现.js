/**
*   version1
**/
    
function Otaku (name, age) {
    this.strength = 60;
    this.age = age;
    this.habit = 'Games';
//     return {
//         name: name,
//         habit: 'Games'
//     }
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
    var obj = new Object(),
	Constructor = [].shift.call(arguments);
	obj.__proto__ = Constructor.prototype;
	var ret = Constructor.apply(obj, arguments);
	return obj instanceof Object ? ret : obj
};




var person = objectFactory(Otaku, 'Kevin', '18')
// var person = _new(Otaku, 'Kevin', '18')

console.log(person)
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin


/**
*   version2
**/

function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    console.log('obj', obj);
    const ret = fn.apply(obj, arg);
    console.log('ret', ret);
    return ret instanceof Object ? ret : obj;
}

