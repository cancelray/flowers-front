"use strict";

const courierDelivery = document.getElementById('courier-delivery');
const selfCarrier = document.getElementById('self-carrier');
const courierDeliveryCheckout = document.querySelector('.courier-delivery-checkout');

courierDelivery.onclick = () => {
    courierDeliveryCheckout.classList.remove('display-none');
}
selfCarrier.onclick = () => {
    courierDeliveryCheckout.classList.add('display-none');
}