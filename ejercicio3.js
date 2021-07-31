//For
let ejFor = document.getElementById("ejFor");

const emergente = () => {
  for (let i = 0; i < 5; i++) {
    alert("ACTIVA LAS VENTANAS EMERGENTES PARA DETENER ESTE SPAM");
    window.open("https://sites.google.com/site/informaticaephsolanlly/los-virus-informaticos");//permite abrir pestañas, casi no se utiliza o para spam
  }
};

ejFor.onclick = function () {
  emergente();
};
