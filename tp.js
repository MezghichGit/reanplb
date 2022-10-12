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

let frameworks = ["Spring","Symfony","React Native"];
/*for(let framework of frameworks)
{
    console.log(framework);
}*/
for(let [index, framework] of frameworks.entries())
{
    console.log(`Indice : ${index} -- Valeur : ${framework}`);
}

