window.onload = function ()//Permet d'executer la fonction quand le chargement de la page est terminé.(fonction anonyme que l'on exécute immédiatement).
{
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 100;
    var snakee;

    init();//On exécute la fonction init().

    function init ()//Fonction d'initialisation standard.
    {       
        var canvas = document.createElement('canvas');/*On crée un élément sur notre page html.*/
        canvas.width = canvasWidth;//Largeur du canvas.
        canvas.height = canvasHeight;//Hauteur du canvas.
        canvas.style.border = "1px solid";//Bordure du canvas.
        document.body.appendChild(canvas);//On attache canvas à notre page html.
        ctx = canvas.getContext('2d');//On dessine dans le canvas en deux dimensions.
        snakee = new Snake([[6,4], [5,4], [4,4]], "right");
        refreshCanvas();//La fonction init appelle la fonction refreshConvas().

    }
    function refreshCanvas()//Rafraîchir le canvas.
    {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);//Effacer tout le rectangle.
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas,delay);/*La methode de setTimeout()appelle une fonction aprés un nombre spécifié de millisecondes(100)en effet , elle permet de dire execute-moi la fonction refreshCanvas à chaque 0.1seconde.*/
        
    }
    function drawBlock(ctx, position)
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x ,y , blockSize, blockSize);
    }
    function Snake(body, direction)
    {
        this.body = body; 
        this.direction = direction;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";// Couleur du rectangle.
            for(var i = 0; i < this.body.length; i++)
            {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();

        };
        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            switch(this.direction)
                {                  
                    case "left":
                        nextPosition[0] -= 1;
                        break;
                    case "right":
                        nextPosition[0] += 1;
                        break;
                    case "down":
                        nextPosition[1] += 1;
                        break;
                    case "up":
                        nextPosition[1] -= 1;
                        break;
                    default:
                        throw("Invalid Direction");
                }          
                
            this.body.unshift(nextPosition);
            this.body.pop(); 
};
        this.setDirection = function(newDirection)
        {
            var allowedDirections;
            switch(this.direction)
            {
                case "left":      
                case "right":
                    allowedDirections = ["up", "down"];
                    break;
                case "down":
                case "up":
                    allowedDirections = ["left", "right"];
                    break;
                default:
                    throw("Invalid Direction");
            }
            if (allowedDirections.indexOf(newDirection) > -1)
                {
                    this.direction = newDirection;
                }
        };
    }
                
    document.onkeydown = function handelKeyDown(e)
    {
        var key = e.keyCode;
        var newDirection;
        switch(key)
            {
                case 37:
                    newDirection = "left";
                    break;
                case 38:
                    newDirection = "up";
                    break;
                case 39:
                    newDirection = "right";
                    break;
                case 40:
                    newDirection = "down";
                    break;
                default:
                    return;
            }
        snakee.setDirection(newDirection);
    }
}


