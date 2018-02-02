window.onload = function () //Permet d'executer la fonction quand le chargement de la page est terminé.(fonction anonyme que l'on exécute immédiatement).
{
    var canvas; 
    var ctx;
    var delay = 100;
    var xCoord = 0;
    var yCoord = 0;

    init();//On exécute la fonction init().

    function init ()//Fonction d'initialisation standars.
    {       
        canvas = document.createElement('canvas');// On crée un élément sur notre page html.
        canvas.width = 900;//Largeur du canvas.
        canvas.height = 600;//Hauteur du canvas.
        canvas.style.border = "1px solid";//Bordure du canvas.
        document.body.appendChild(canvas);//On attache canvas à notre page html.
        ctx = canvas.getContext('2d');//On dessine dans le canvas en deux dimensions.
        refreshCanvas();//La fonction init appelle la fonction refreshConvas().

    }
    function refreshCanvas()//Rafraîchir le canvas.
    {
        xCoord += 5;//xCoord est egal à xCoord plus 5px.
        yCoord += 5;
        ctx.clearRect(0, 0, canvas.width, canvas.height);//Effacer tout le rectangle.
        ctx.fillStyle = "#ff0000";// Couleur du rectangle.
        ctx.fillRect(xCoord, yCoord, 100, 50);//Création d'un rectangle.
        setTimeout(refreshCanvas, delay);//La methode de setTimeout()appelle une fonction aprés un nombre spécifié de millisecondes(100)en effet , elle permet de dire execute-moi la fonction refreshCanvas à chaque 0.1seconde.
    }

}
