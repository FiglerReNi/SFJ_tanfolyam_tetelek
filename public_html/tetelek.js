//Unio tétele
var tomb12 = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
var meret4 = tomb12.length;
var tomb13 = [44, 5, 13, 10, 7, 12, 14, 61];
var meret5 = tomb13.length;
var tombUnio = [];
for (var i = 0; i < meret4; i++) {
    tombUnio[i] = tomb12[i];
}
var k = meret4;
for (var i = 0; i < meret5; i++) {
    var j = 0;
    while(j < meret4 && tomb13[i] !== tomb12[j]){
        j++;       
    }
    if(j >= meret4){
        tombUnio[k++] = tomb13[i];
    }
}
alert('Unio mérete: ' + k);
alert(tombUnio);

//Metszet tétele 
var tomb10 = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
var meret2 = tomb10.length;
var tomb11 = [44, 5, 13, 10, 7, 12, 14, 61];
var meret3 = tomb11.length;
var metszetTomb = [];
var j;
var k = 0;
for (var i = 0; i < meret2; i++) {
    j = 0;
    while (j < meret3 && tomb10[i] !== tomb11[j]) {
        j++;
    }
    if (j < meret3) {
        metszetTomb[k++] = tomb10[i];
    }
}
for (var i = 0; i < metszetTomb.length; i++) {
    alert(metszetTomb[i]);
}

//Minimum és Maximum kiválasztás tétele
var tomb9 = [1,2,3,4,5,6,7,10,8,9];
var meret1 = tomb9.length;
var min = tomb9[0];
var max = tomb9[0];
for (var i = 0; i < meret1; i++) {
    if(tomb9[i] < min){
        min = tomb9[i];
    }
}
for (var i = 0; i < meret1; i++) {
    if(tomb9[i] > max){
        max = tomb9[i];
    }
}
alert(min);
alert(max);

//Szétválogatás tétele
var tomb6 = [1,2,3,4,5,6,7,8,9,10];
var tomb7 = [];
var tomb8 = [];
var j = 0;
var k = 0;
for (var i = 0; i < tomb6.length; i++) {
    if(tomb6[i] > 5){
       tomb7[j++] = tomb6[i]; 
    }
    else{
       tomb8[k++] = tomb6[i];  
    }
}
alert('Eredeti tömb:');
for (var i = 0; i < tomb6.length; i++) {
    alert(tomb6[i]);
}
alert('2. tömb:');
for (var i = 0; i < tomb7.length; i++) {
    alert(tomb7[i]);
}
alert('3. tömb:');
for (var i = 0; i < tomb8.length; i++) {
    alert(tomb8[i]);
}

//Kiválogatás tétele
var tomb5 = [1,3,5,6,43,8];
var meret = tomb5.length;
var ujTomb = [];
var j = 0;
for (var i = 0; i < meret; i++) {
    if(tomb5[i] > 6){
        ujTomb[j++] = tomb5[i];
    }
}
var ujTombMeret = j;
for (var i = 0; i < meret; i++) {
    alert(tomb5[i]);
}
for (var i = 0; i < ujTombMeret; i++) {
    alert(ujTomb[i]);
}
alert(tomb5 + "\n" + ujTomb);

//Keresés tétele 
var tomb4 = [1,3,5,6,43,8];
var keresett2 = 42;
var i =0;
while(i < tomb4.length && tomb4[i] !== keresett2){
    i++;
}
if(i < tomb4.length){
    alert('Van találat! ' + (i+1));
}
else{
    alert('Nincs találat!');
}

//Kiválasztás tétele 
var tomb3 = [1,3,5,6,43,8];
var keresett1 = 43;
var i =0;
while(i < tomb3.length && tomb3[i] !== keresett1){
    i++;
}
var eredmeny = (i+1);
alert(eredmeny);

//Eldöntés tétele 
var tomb2 = [1,3,5,8,5,43];
var keresett = 8;
var i = 0;
while(i < tomb2.length && tomb2[i] !== 8){
    i++;
}
if(i < tomb2.length){
    alert('Találat')
}
else{
    alert('Nincs találat')
}

//Megszámolás tétele 
var tomb1 = [3,4,5,7,2,1,10];
var szamlalo = 0;
for (var i = 0; i < tomb1.length; i++) {
    if(tomb1[i] > 6){
        szamlalo++;
    }
}
alert(szamlalo);

//Összegzés tétele
var tomb = [1,2,4,5,6,8,10];
var osszeg = 0;
for (var i = 0; i < tomb.length; i++) {
    osszeg = osszeg + tomb[i];
}
alert(osszeg);
