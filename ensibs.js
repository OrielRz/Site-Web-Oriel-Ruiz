function changerImage() {

    // récupérer le menu déroulant
    let menu = document.getElementById("choixImage");

    // récupérer l'image
    let image = document.getElementById("imageAffichee");

    // changer la source de l'image
    image.src = menu.value;

}