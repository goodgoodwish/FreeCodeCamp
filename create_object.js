//The Prototype Pattern
function Person() {
}

Person.prototype = {
  constructor: Person,
  name: "Yi",
  age: 40,
  friends: ["Vicky", "Ivy"],
  logName: function() {
    console.log(this.name);
  }
};

var p1 = new Person();
p1.friends.push("Lei");

var p2 = new Person();

console.log(p1.friends);
console.log(p2.friends);

p2.name = "Qi";

p1.logName();
p2.logName();

p1.friends = ["John","Blair"];
console.log(p1.friends);
console.log(p2.friends);

function Person() {

}

// Combination Constructor/Prototype Pattern
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.friends = ["Ivy","Amy"];
}

Person.prototype = {
  constructor: Person,
  logName: function() {
    console.log(this.name);
  }
};

var p1 = new Person("Yi", 40);
var p2 = new Person("Qi", 45);
p1.friends.push("Lei");

p1.friends;
p2.friends;

Person.prototype.logName = function(argument){
	console.log(this.name + ": " + this.age);
};

(p1.friends === p2.friends);
(p1.logName === p2.logName);

//Durable Constructor Pattern
function Person(name, age, job) {
  //create the object to return 
  var o = new Object();
  //optional: define private variables/functions here
  //attach methods 
  o.sayName = function() {
    console.log(name);
  };
  //return the object
  return o;
}
var friend = Person("Charlie", 40, "Software Engineer");
friend.sayName();

//Inheritance,

// Prototype Chaining,

function ParentType (pAge) {
	this.name = "Parent";
	this.colors = ["red","yellow"];
	this.age = pAge;
}

ParentType.prototype.getParent = function () {
	return this.name;
}

function ChildType () {
	this.childName = "Child";
}

ChildType.prototype = new ParentType(5);

ChildType.prototype.getChild = function(){
	return this.childName;
};

var c1 = new ChildType();
console.log(c1.getParent());
console.log(c1.getChild());

var c2 = new ChildType();

c1.colors.push("black");

c1.colors;
c2.colors;

(c2.getParent === c3.getParent);
(c2.getChild === c3.getChild);

// Constructor Stealing,
// Passing Arguments,
function ParentType (newColor) {
	this.colors = ["red","yellow"]
	this.colors.push(newColor);
	this.listColors = function () {
		console.log(this.colors);
	}
}
function ChildType (newColor, pAge) {
	ParentType.call(this, newColor);
	this.age = pAge;
}
var c1 = new ChildType("white", 18);
var c2 = new ChildType("orange", 40);

c1.colors.push("black");

c1.colors;
c2.colors;
c1.listColors();
c2.listColors();

var c2 = new ChildType();
c2.colors;

(c1.listColors === c2.listColors); // false,

// Combination Inheritance

function ParentType (newColor) {
	this.colors = ["red","yellow"]
	this.colors.push(newColor);
}
ParentType.prototype.listColors = function(){
	console.log(this.colors);
};

function ChildType (newColor, pAge) {
	//inherit properties,
	ParentType.call(this, newColor);
	this.age = pAge;
}

ChildType.prototype = new ParentType();

ChildType.prototype.showAge = function(){
	return this.age;
};

var c1 = new ChildType("white", 18);
var c2 = new ChildType("orange", 40);

c1.colors.push("black");

c1.showAge();
c2.showAge();

c1.listColors();
c2.listColors();

var c2 = new ChildType();
c2.colors;

(c1.listColors === c2.listColors); // true,
(c1.showAge === c2.showAge); // true,

// Prototypal Inheritance,
var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var p1 = Object.create(person);
var p2 = Object.create(person, { name: { value: "Dog" } });

(p1.name === p2.name);
(p1.friends === p2.friends);

// Parasitic Inheritance
function createAnother(original) {
  // object(original); // it will get ReferenceError: object is not defined.
  var clone = Object.create(original); //create a new object by calling a function
  clone.sayHi = function() { //augment the object in some way
    console.log("hi");
  };
  return clone; //return the object
}

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();

// Parasitic Combination Inheritance
function inheritPrototype (p_childType, p_parentType) {
	var l_prototype = Object.create(p_parentType.prototype); // create object,
	l_prototype.constructor = p_childType; // augment object,
	p_childType.prototype = l_prototype; // assign object
}

function ParentType (newColor) {
	this.colors = ["red","yellow"]
	this.colors.push(newColor);
}
ParentType.prototype.listColors = function(){
	console.log(this.colors);
};

function ChildType (newColor, pAge) {
	//inherit properties,
	ParentType.call(this, newColor);
	this.age = pAge;
}

inheritPrototype(ChildType, ParentType);

ChildType.prototype.showAge = function(){
	return this.age;
};

var c1 = new ChildType("white", 18);
var c2 = new ChildType("orange", 40);

//Function Expressions,

(function (num) {
	console.log('abc:' + num);
})(5);

var result = new Array();

for (var i = 0; i < 3; i++) {
  result[i] = function(num) {
    return function() {
      return num;
    };
  }(i);
  console.log(result[i].toString());
  console.log(result[i]());
}

// Mimic block scope,
(function() {
  for (var i = 0; i < 2; i++) {
    console.log(i);
  }
})();

console.log(i);  // ReferenceError: i is not defined.
