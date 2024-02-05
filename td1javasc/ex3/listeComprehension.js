function genererListe() {
    var str1 = "abc";
    var str2 = "de";
    var resultat = [];

    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            resultat.push(str1[i] + str2[j]);
        }
    }

    document.getElementById('resultat').textContent = resultat.join(', ');
}
