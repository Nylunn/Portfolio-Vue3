var app = new Vue({
    el: '#modalContent',
    data: {
        todos: [
            { text: 'Les commentaires dynamiques servent à afficher directement le commentaire sans raffraichir la page.' },
            { text: 'Mais ils servent aussi à vérifier que les champs sont valides.' },
            { text: 'Voici le codesource : https://github.com/Nylunn/dynamiccomments' }
        ]
    }
})

/* 
Une modal en javascript sans vue.js 
*/

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    openModalBtn.addEventListener("click", function () {
        // Ouvrir la modal
        modal.style.display = "block";

    });

    closeModalBtn.addEventListener("click", function () {
        // Fermer la modal
        modal.style.display = "none";
    });

    // Fermer la modal si l'utilisateur clique en dehors du contenu de la modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});





/*Deuxième Modal*/

var app2 = new Vue({
    el: '#modalContent2',
    data: {
        todos: [
            { text: 'Voici un CV effectué avec HTML5/CSS3 exclusivement !' },
            { text: 'Cette exercice à fais progresser mes compétences en CSS3 et HTML5 et à lire/effectuer du code.' },
            { text: 'Voici le codesource : https://github.com/Nylunn/CV' }
        ]
    }
})

/* 
Une modal en javascript sans vue.js 
*/

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn2");
    const closeModalBtn = document.getElementById("closeModalBtn2");
    const modal = document.getElementById("modal2");

    openModalBtn2.addEventListener("click", function () {
        
        // Ouvrir la modal
        modal2.style.display = "block";

    });

    closeModalBtn2.addEventListener("click", function () {
        // Fermer la modal
        modal2.style.display = "none";
    });

    // Fermer la modal si l'utilisateur clique en dehors du contenu de la modal
    window.addEventListener("click", function (event) {
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
    });
});





/*Troisième Modal*/

var app3 = new Vue({
    el: '#modalContent3',
    data: {
        todos: [
            { text: 'Et pour finir, le projet qui est celui que vous voyez actuellement !' },
            { text: 'Ce projet à servis a aguérrir mes compétences pour chercher des solutions aux problèmes rencontrés lors du développement' },
            { text: 'Voici le code source : https://github.com/Nylunn/Portfolio' }
        ]
    }
})

/* 
Une modal en javascript sans vue.js 
*/

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn3");
    const closeModalBtn = document.getElementById("closeModalBtn3");
    const modal = document.getElementById("modal3");

    openModalBtn3.addEventListener("click", function () {
        
        // Ouvrir la modal
        modal3.style.display = "block";

    });

    closeModalBtn3.addEventListener("click", function () {
        // Fermer la modal
        modal3.style.display = "none";
    });

    // Fermer la modal si l'utilisateur clique en dehors du contenu de la modal
    window.addEventListener("click", function (event) {
        if (event.target === modal3) {
            modal3.style.display = "none";
        }
    });
});



