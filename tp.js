//console.log("Hello REAN");

//1) let vs var
/*
function doSomething()
{
    //for(var i=0; i<10; i++)
    for(let i=0; i<10; i++)
    {
        console.log("i = "+i);
    }
    console.log("Final i = "+i);
}

doSomething();*/
// 2) Template String
/*
let formation="REAN";
let nbreJours = 3;
let apropos = `Une formation sur ${formation} durant ${nbreJours} jours`;
console.log(apropos);*/

// 3) paramètres par  defaut d'une fonction
/*
function somme(a=0,b=0)
{
    console.log("La somme = "+ (a+b));
}

somme(20,10);*/

// 4) Le foreach

//let frameworks = ["Spring","Symfony","React Native"];
/*for(let framework of frameworks)
{
    console.log(framework);
}*/
/*for(let [index, framework] of frameworks.entries())
{
    console.log(`Indice : ${index} -- Valeur : ${framework}`);
}*/

// 5) Arrow function
/*
function somme(a = 0,b = 0)
{
    console.log(`La somme de ${a} + ${b} = ${a+b}`)
}

somme(10,2);*/

// version Arrow function
/*let somme = (a,b) =>  console.log(`La somme de ${a} + ${b} = ${a+b}`);
somme(10,2);*/
/*
let tab = [10,14,8,24,33,2];

tab.sort((a,b)=>b-a);   // tri par ordre décroisant
for(let v of tab)
{
    console.log(v);
}*/

// 6) ES 8 : async/await
/*
function resolveAfter3Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter3Seconds();
    console.log("Autre traitement...");
    console.log(result);
    // expected output: "resolved"
  }
  
function classicCall(){
    console.log("classicCall");
};
  asyncCall();  // traitement bloquant pendant 3 secondes
  classicCall();
  */

/*const arr1 = [0, 1, 2, [3, 4],[11,2,8]];
console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(3));*/


const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num*2);

console.log(flattened);

//const arr1 = [1, 2, 3, 4, 5, 6];

//const mapped = arr1.map(num => num*2);
//console.log(mapped);


