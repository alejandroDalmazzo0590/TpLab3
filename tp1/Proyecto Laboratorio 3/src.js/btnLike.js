let btnLike = document.getElementById("btnlike");
let like = 0;

btnLike.addEventListener("click", function()
{
    if(like === 0) {
        like = 1;
        
        btnLike.innerHTML = "Ya No Me Gusta";
        btnLike.classList.remove("like");
        btnLike.classList.add("dislike");
        btnLike.classList.add("cambio");
        let contadorLike = document.getElementById("contador");
        numerofinal = "<strong>" + 201 + " Likes"+"<strong>"  ;
        contadorLike.innerHTML = numerofinal; 
    }
    else {
        like = 0;
        
        btnLike.innerHTML = "Me Gusta";
        btnLike.classList.remove("dislike");
        btnLike.classList.add("like");
        btnLike.classList.add("cambio");
        let contadorLike = document.getElementById("contador");
        numerofinal ="<strong>" +  200 + " Likes" +"<strong>" ;
        contadorLike.innerHTML = numerofinal;
    }
});
