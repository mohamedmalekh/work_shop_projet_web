function valideDateOfBirth() {
    var elementDate = document.getElementById("date_naissance");
    var elementValue = new Date(elementDate.value);
    const dateAujourdhui = new Date();
    if(elementValue>=dateAujourdhui)
    {
        alert("La date de naissance doit être inférieur à la date d'aujourd'hui");
       
    }
    else
    {
        alert("Date de naissance valide");
    }
}
formElement = document.getElementById("form");
formElement.addEventListener("submit",);

function validateName () {
    var NameValue nameElement.value;
    var regex = /^[a-zA-Z]+$/;
    var nomError = document.getElementById("nomError");
    if (!NameValue.match(regex)) {
        nomError.innerHTML = "Nom invalide";
    +}
    else {
        nomError.innerHTML = "<span> style= color:green;>Nom valide</span>";
    }