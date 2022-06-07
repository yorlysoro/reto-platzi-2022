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

// Array cupones

const coupons = [
    "JuandDC_es_Batman",
    "pero_no_le_digas_a_Nadie",
    "es_un_secreto",
];



function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("precio")
    const priceValue = parseFloat(inputPrice.value);
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;
    switch(couponValue){
        case coupons[0]:
            descuento = 15;
            break;
        case coupons[1]:
            descuento = 30;
            break;
        case coupons[2]:
            descuento = 25;
            break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = `El precio con descuento es: ${precioConDescuento}`;
}

