/* Bryant Bolyen, JavaScript Ex 01, 04/08/20 */

window.addEventListener('DOMContentLoaded',init,false);

//'main body' of the program
function init() 
{
    alert('fool, what hath thou wrought');  //I think I'll leave this like this. :)
    
    //define variables
    var me = document.getElementById("me");
    var me_text = document.getElementById("me_text")
    
    //event handlers. had to look up the syntax for the mouse events.
    me.addEventListener('mouseover',me_funct_on,false); //When mouse is ON *image*
    me_text.addEventListener('mouseout',me_funct_off,false); //When mouse is OFF *text*

}

//event no 1, display text when on image.
function me_funct_on()
{

    //removes image, taken from DH tutorials
    me.style.display = "none";

    //displays text. Intro to Dark Souls(2011) if curious. Check it out if you like a depressing Japanese take on the Silmarilion: https://youtu.be/ylFzJ3wRgHw
    me_text.innerHTML = "in the age of ancients the world was unformed shrouded by fog a land of gray crags archtrees and everlasting dragons but then there was fire and with fire came disparity heat and cold life and death and of course light and dark then from the dark they came and found the souls of lords within the flame nito first of the dead the witch of izalith and her daughters of chaos lord gwyn and his faithful knights and the furtive pygmy so easily forgotten with the strength of lords they challenged the dragons gwyn's mighty bolts peeled apart their stone scales the witches weaved great firestorms nito unleashed a miasma of death and disease and seath the scaleless betrayed his own and the dragons were no more thus began the age of fire but soon the flames will fade and only dark will remain even now there are only embers and man sees not light but only endless nights and amongst the living are seen carriers of the accursed dark sign yes indeed the darksign brands the undead and in this land the undead are coralled and led to the north this is your fate";
    
    //missing piece of the puzzle. ensures text always displays on every mouse over.
    me_text.style.display = "initial";

}

//event no 2, display image when off text.
function me_funct_off()
{
    //removes text
    me_text.style.display = "none";
    
    //resets image
    me.style.display = "initial";
}

//It's simple but it works.