function estValide(button) {
    return button.innerHTML.length === 0;
}

function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function rechercherVainqueur(pions, joueurs, tour) {
    if (
        pions[0].innerHTML === joueurs[tour] &&
        pions[1].innerHTML === joueurs[tour] &&
        pions[2].innerHTML === joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#3254cd";
        pions[1].style.backgroundColor = "#323acd";
        pions[2].style.backgroundColor = "#3251cd";
        return true;
    }

    if (
        pions[3].innerHTML === joueurs[tour] &&
        pions[4].innerHTML === joueurs[tour] &&
        pions[5].innerHTML === joueurs[tour]
    ) {
        pions[3].style.backgroundColor = "#3251cd";
        pions[4].style.backgroundColor = "#323acd";
        pions[5].style.backgroundColor = "#3251cd";
        return true;
    }

    if (
        pions[6].innerHTML === joueurs[tour] &&
        pions[7].innerHTML === joueurs[tour] &&
        pions[8].innerHTML === joueurs[tour]
    ) {
        pions[6].style.backgroundColor = "#3256cd";
        pions[7].style.backgroundColor = "#3263cd";
        pions[8].style.backgroundColor = "#3251cd";
        return true;
    }

    if (
        pions[0].innerHTML === joueurs[tour] &&
        pions[3].innerHTML === joueurs[tour] &&
        pions[6].innerHTML === joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#323fcd";
        pions[3].style.backgroundColor = "#3251cd";
        pions[6].style.backgroundColor = "#3251cd";
        return true;
    }

    if (
        pions[1].innerHTML === joueurs[tour] &&
        pions[4].innerHTML === joueurs[tour] &&
        pions[7].innerHTML === joueurs[tour]
    ) {
        pions[1].style.backgroundColor = "#323acd";
        pions[4].style.backgroundColor = "#323acd";
        pions[7].style.backgroundColor = "#3251cd";
        return true;
    }

    if (
        pions[2].innerHTML === joueurs[tour] &&
        pions[5].innerHTML === joueurs[tour] &&
        pions[8].innerHTML === joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#324ccd";
        pions[5].style.backgroundColor = "#3247cd";
        pions[8].style.backgroundColor = "#325ecd";
        return true;
    }

    if (
        pions[0].innerHTML === joueurs[tour] &&
        pions[4].innerHTML === joueurs[tour] &&
        pions[8].innerHTML === joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#3256cd";
        pions[4].style.backgroundColor = "#3251cd";
        pions[8].style.backgroundColor = "#3256cd";
        return true;
    }

    if (
        pions[2].innerHTML === joueurs[tour] &&
        pions[4].innerHTML === joueurs[tour] &&
        pions[6].innerHTML === joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#325ecd";
        pions[4].style.backgroundColor = "#325ecd";
        pions[6].style.backgroundColor = "#324ccd";
        return true;
    }
}

function matchNul(pions) {
    for (let i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length === 0) return false;
    }

    return true;
}

let Afficheur = function(element) {
    let affichage = element;

    function setText(message) {
        affichage.innerHTML = message;
    }

    return { sendMessage: setText };
};

function main() {
    let pions = document.querySelectorAll("#Jeu button");
    let joueurs = ["X", "O"];
    let tour = 0;
    let jeuEstFini = false;
    let afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage(
        "Le jeu peut commencer ! <br /> Joueur " +
        joueurs[tour] +
        " c'est votre tour."
    );
    for (let i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener("click", function () {
                if (jeuEstFini) return;

                if (!estValide(this)) {
                    afficheur.sendMessage(
                        "Case occupée ! <br />Joueur " +
                        joueurs[tour] +
                        " c'est toujours à vous !"
                    );
                } else {
                    setSymbol(this, joueurs[tour]);
                    jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

                    if (jeuEstFini) {
                        afficheur.sendMessage(
                            "Le joueur " +
                            joueurs[tour] +
                            ' a gagné ! <br /> <a href="morpion.html">Rejouer</a>'
                        );
                        return;
                    }

                    if (matchNul(pions)) {
                        afficheur.sendMessage(
                            'Match Nul ! <br/> <a href="index.html">Rejouer</a>'
                        );
                        return;
                    }

                    tour++;
                    tour = tour % 2;
                    afficheur
                }
            }
        )
    }
}
main();