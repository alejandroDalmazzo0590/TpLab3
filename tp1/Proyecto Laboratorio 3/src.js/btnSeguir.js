document.getElementById("btnseguir").onclick= function()
{
    clickbtnseguir();
}

function clickbtnseguir()
{
    if(document.getElementById("btnseguir").innerHTML=="Seguir") 
        {
        document.getElementById("btnseguir").innerHTML="Dejar de Seguir";
        }
         
        else
        {
             document.getElementById("btnseguir").innerHTML="Seguir";      
        }  
        
}