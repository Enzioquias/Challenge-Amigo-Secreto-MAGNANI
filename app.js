let amigos = [];

const agregarAmigo = () => {
  let amigo = document.getElementById("amigo").value;
  if (amigo != "") {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    escribirLista();
  } else {
    alert("¡Intentas agregar un campo vacío!");
  }
};

const escribirLista = () => {
  const listaEscrita = document.querySelector("#listaAmigos");
  listaEscrita.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    // Crea un li vacio con variable de nombre "li"
    let li = document.createElement("li");
    // Asignamos a esa variable y nodo el valor del string en la posicion index del array
    li.innerText = `${amigos[index]}`;
    // Agregamos el nodo al nodo padre capturado previamente, el padre es el "ul"
    listaEscrita.appendChild(li);
  }
};

const sortearAmigo = () => {
  if (amigos.length == 0) {
    alert("No has agregado amigos, agrega algunos para iniciar el sorteo");
  } else if (amigos.length == 1) {
    alert("Solo has agregado un amigo/a, agrega más para realizar un sorteo!");
  } else {
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];

    document.querySelector("#resultado").innerText=`${amigoSorteado}`;
  }
};
