function Nombres_parfait(n) {
    var somme = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) {
            somme += i;
        }
    }
    return somme === n;
}

function verifierNombreParfait() {
    var num = Number(document.getElementById('num').value);
    var resultat = document.getElementById('resultat');
    if (Nombres_parfait(num)) {
        resultat.textContent = num + " est un nombre parfait.";
    } else {
        resultat.textContent = num + " n'est pas un nombre parfait.";
    }
}
