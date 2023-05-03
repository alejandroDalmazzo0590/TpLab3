let btnUsuario=document.getElementById("btnUsuario"); 
btnUsuario.addEventListener("click", login);

function login()
{
  let txtUsuario=document.getElementById("txtUsuario");
  if(txtUsuario.value==="")
  {
    alert("Por favor, ingresá tu nombre de usuario");
  }
  else
  {
    
    alert("Bienvenido "+txtUsuario.value);
    
  }
  return txtUsuario

}

let btnComentarios=document.getElementById("btnComentarios");
btnComentarios.addEventListener("click", comentar);

function comentar()
{
  if(txtUsuario.value==="")
  {
    alert("Por favor, completá el registro para realizar un comentario");
  }
  else
  {
    let txtcomentario=document.getElementById("txtcomentario");
    comentario.innerHTML = txtcomentario.value;
    NombreComentario.innerHTML = txtUsuario.value;
  }
}

