/* let js = "Hi there";
if (js === "boo") alert("Lock the door!");

console.log(40 + 8 * 2 + 16 + 53);
let myName = "Alex";
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

const Name = "Ion";

const lastName= "Harry";
const space = " ";
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

const numedeNastere = "Ion";
const job ="profesor";
const anulNasterii = 1991;
const curentYear = 2037;

//concatinare
const stringNou = "Eu sunt " + numedeNastere + ", job , care are " + (curentYear - anulNasterii) + " ani."

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

let digit = 18;

if (digit === 18)

if (digit === 18) console.log("Ai devenit un adult (operator strict)")

if (digit == 18) console.log("Ai devenit un adult (operator liber)")

const favorite =Number(prompt("Care este numarul tau favorit"))
console.log(favorite)
console.log(typeof favorite)

if (favorite == 23) { // === -> "23" nu este egal cu numarul 23
    console.log("Numarul meu favorit este 23.")
}else if (favorite == 7) {
    console.log("Cifra 7 se afla si ea printre favoritele mele")
}else if (favorite == 9){
    console.log("Nu e cifra mea favorita")
}else {
console.log("Numarul pe care l-ai introdus nu este 23, nici 9, nici 7.")
}

if (favorite !== 23) { console.log("De ce nu ai ales numarul 23?")} // ->!= 9 != 23 se  executa linia 

const hasDriversLicense = true; //A = TRUE
const hasGoodVision = false; //B = False

console.log(hasDriversLicense && hasGoodVision) //&& operatorul logic AND

console.log(hasDriversLicense || hasGoodVision) // || operator logic OR 

console.log(!hasDriversLicense) // operatorul logic NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive){
console.log("Sarah ar trebui sa fie la volan")
} else{
console.log("Sarah nu ar trebui sa fie in masina")
}

const isTired = false; //C
if (hasDriversLicense && hasGoodVision && !isTired) {
console.log("Sarah ar trebui sa fie la volan")
} else {
console.log("Sarah nu ar trebui sa conduca masina")
}

const day = `paliuga`;
switch (day) {    //day === 'luni'
case `luni`: //if
console.log("luni este prima zi din saptamana")
break
case `marti`: //else if 
console.log("Marti mergem la sala sa tragem de fiare");
break
case `miercuri`://else if 
console.log("Miercuri ne ducem la servici")
break
case `joi`://else if 
case `vineri`:
console.log("Ne odihnim")
break
case `sambata`://else if 
console.log("Sambata ma plimb prin parc")
break 
case "duminica"://else if 
console.log("Duminica scoatem femeia in oras")
break
default: //else
console.log("Ai învățat ceva nou. Bravo!");
break; }

if (day==="luni"){
    console.log("Luni este inceput de saptamana")
}
else if (day ==="marti"){
    console.log("Marti mergem la sala")}

    else if (day ==="miercuri")
        console.log("Miercuri mergem in oras")

        else if (day ==="joi")
        console.log("Joi lenevim")