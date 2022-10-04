function maFonction(monObjet) {
    monObjet.fabricant = "Toyota";
}

var mavoiture = {fabricant: "Honda", modèle: "Accord", année: 1998};
var x, y;

x = mavoiture.fabricant;

maFonction(mavoiture);
y = mavoiture.fabricant;


console.log("The car x is a ", x);
console.log("The car y is a ", y);