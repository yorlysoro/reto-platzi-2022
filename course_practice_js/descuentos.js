// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function clickPriceDiscount() {
    const price = document.getElementById("precio");
    const discount = document.getElementById("descuento");
    const priceValue = parseFloat(price.value);
    const discountValue = parseFloat(discount.value);
    const priceWithDiscount = calcularPrecioConDescuento(priceValue, discountValue);
    const result = document.getElementById("ResultPrice");
    result.innerText = `El precio con descuento es: ${priceWithDiscount}`;
}