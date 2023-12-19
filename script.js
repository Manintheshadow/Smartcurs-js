/* let js = "Hi there";
if (js === "boo") alert("Lock the door!");

console.log(40 + 8 * 2 + 16 + 53);
let myName = Alex;
let age = 35;
console.log(myName + " " + age);

//camel casing */

let JavascriptIsFun = true;

console.log(typeof true);
JavascriptIsFun = 23;

console.log(typeof JavascriptIsFun);
JavascriptIsFun="Ion"
console.log(typeof JavascriptIsFun);

// let age = 30;
// age = 31;
// console.log(age)

// const birthYear = 1988;
// console.log(birthYear);

// var myAge = 35;
// console.log(myAge);

age = 35;
console.log(age);

let now = 2037;
const ageJonah = now -1991;
const ageSarah = now -2021;
//Math Operators
console.log(ageJonah);
console.log(ageSarah);
console.log(ageJonah, ageSarah);
console.log(ageJonah * 2, ageJonah / 10, 2 ** 3)

//Strings

const firstName = "Ion";
const lastName= "Harry";
const space = " ";
console.log(firstName, lastName);
console.log(firstName + lastName);
// in loc de space poti pune " "

// Assignment operators;
let x = 10 + 5; //15
x +=10; // x = x +10 //25
x -= 5 //20
x *=5 //100
console.log(x)

x++ //x= x + 1
x--
x--
console.log(x);

//Comparison operators
console.log(ageJonah >= ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(isFullAge)

console.log(now - 1991 > now - 2021);

const averageAge = ageJonah + ageSarah / 2
console.log(ageJonah, ageSarah, averageAge);

const numelePersoanei = "Ion";
const job ="profesor";
const anulNasterii = 1991;
const curentYear = 2037;

//concatinare
const stringNou = "Eu sunt " + numelePersoanei + ", job , care are " + (curentYear - anulNasterii) + " ani."

console.log(stringNou)

//template literal
const stringMainou = `Eu sunt $- un profesor, care are` + `${curentYear - anulNasterii}`//repeti manevra 

console.log(`Acesta este\n\
un string\n\
in mai multe randuri`)
//se poate scrie si  fara \n\

//if si else



const Age = 14;

if (Age >=18) {
console.log("Esti destul de in varsta pentru a conduce o masina")
} else {
    console.log(`Nu ai varsta necesara. trebuie sa mai cresti ${18-Age} ani`)
}

const yearbirth = 1991;

let century;
if (yearbirth <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`Ai fost nascut in secolul ${century}`)

//Type conversion

const inputYear = "1991"; 
console.log(Number(inputYear) + 18)  //+18, inputyear sub forma de string

//convertire numere in stringuri
const numepersoana ="Ion"
console.log(Number(numepersoana))
console.log(String(23),23)//imi arata in consola un un string un numar

// Type coercion

console.log("Eu am " + 23 + " ani")
console.log("23" - "10" - 3)
console.log("23" / "2")

let n = "1" + 1;
n -= 1
console.log(n)


// 5 valori : 0,"", undefined, null, NaN

const salariu = 130;
if (salariu) {
    console.log("Ai luat banii. Nu ii cheltui pe toti!");
} else {
    console.log("Vin camatarii dupa tine, da-le banii.");
}

let inaltime = 1.82;
if (inaltime) {
    console.log("Acum variabila este definita")
} else {
    console.log("Variabila nu este definita")
}
