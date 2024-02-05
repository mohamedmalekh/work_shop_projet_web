var T = [17, 38, 10, 25, 72];

function trierTableau() {
    T.sort((a, b) => a - b);
    document.getElementById('resultat').textContent = "Tableau trié : " + T.join(', ');
}

function ajouterElement() {
    T.push(12);
    document.getElementById('resultat').textContent = "Après ajout de 12 : " + T.join(', ');
}

function renverserTableau() {
    T.reverse();
    document.getElementById('resultat').textContent = "Tableau renversé : " + T.join(', ');
}

function indiceElement() {
    var indice = T.indexOf(17);
    document.getElementById('resultat').textContent = "Indice de 17 : " + indice;
}

function enleverElement() {
    var indice = T.indexOf(38);
    if (indice > -1) {
        T.splice(indice, 1);
    }
    document.getElementById('resultat').textContent = "Après enlèvement de 38 : " + T.join(', ');
}

function sousTableau1() {
    var sousTableau = T.slice(1, 3);
    document.getElementById('resultat').textContent = "Sous-tableau du 2e au 3e élément : " + sousTableau.join(', ');
}

function sousTableau2() {
    var sousTableau = T.slice(0, 2);
    document.getElementById('resultat').textContent = "Sous-tableau du début au 2e élément : " + sousTableau.join(', ');
}

function sousTableau3() {
    var sousTableau = T.slice(2);
    document.getElementById('resultat').textContent = "Sous-tableau du 3e élément à la fin : " + sousTableau.join(', ');
}
