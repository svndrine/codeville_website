function afficherIndice() {
    var indiceBloc = document.createElement('p');
    indiceBloc.innerText = "L'indice est: Des lumières scintillantes dans le ciel nocturne!";
    indiceBloc.classList.add('indice');
    var indiceSection = document.getElementById('indice');
    indiceSection.appendChild(indiceBloc);
    document.getElementById('bouton-indice').disabled = true;
}