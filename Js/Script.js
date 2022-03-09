 
 //DOM
 //On commence par recuperer nos touches
 
const touches = [...document.querySelectorAll('.bouton')];
//on recupere les key*codes associé à nos touchent 
//map recupere le tableau effectue une operation et stoque le resultat dans un nouveau tableau
const listeKeycode = touches.map(touche => touche.dataset.key);
//recuperer l'ecran 
const ecran = document.querySelector('.ecran');
/*
keydown event (pavé numérique)
click event (souris)

*/
document.addEventListener('keydown', (e)=> { 
    const valeur = e.keyCode.toString;
    calculer(valeur);
})

document.addEventListener('click', (e)=> { 
    const valeur = e.target.dataset.key;
     calculer(valeur);
})

//function calculer
const calculer = (valeur) =>{
    //verifiaue que la valeur inclue dans le parametre appartient à la liste de Keycode de notre tableau
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            case '8': 
                ecran.textContent = "";
                break;

            case '13':
                //evalue la valeur quil a en parametre on va evaluer l'interieur de l'ecran
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            
            default:
                //on recupère l'index du keycode
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error',(e) => {
        alert('Une erreur est survenue dans votre calcul : '+e.message);
})