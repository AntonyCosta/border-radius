function valorBorda() {
    let topLeft = document.querySelector('.top-left').value;
    let topRight = document.querySelector('.top-right').value;
    let bottomRight = document.querySelector('.bottom-right').value;
    let bottomLeft = document.querySelector('.bottom-left').value;
    let brBorder = document.querySelector('.br-border');
    let visualizar = document.querySelector('#codigo');

    brBorder.style.borderTopLeftRadius = topLeft + "px";
    brBorder.style.borderTopRightRadius = topRight + "px";
    brBorder.style.borderBottomRightRadius = bottomRight + "px";
    brBorder.style.borderBottomLeftRadius = bottomLeft + "px";

    topLeftCode = 'border-radius-top-left: ';
    topRightCode = 'border-radius-top-right: ';
    bottomRightCode = 'border-radius-bottom-right: ';
    bottomLeftCode = 'border-radius-bottom-left: ';

    visualizar.innerText = topLeftCode + topLeft + "px;"
        + topRightCode + topRight + "px;"
        + bottomRightCode + bottomRight + "px;"
        + bottomLeftCode + bottomLeft + "px;"

}
function copiarTexto() {
let copy = document.querySelector('#codigo')
    copy.select();

    navigator.clipboard.writeText(copy.value);

    alert("Código copiado para a área de Transferencia");
}
