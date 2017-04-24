var $body = $('#orderTable');
var $subTotal = $('#subTotal');
var $tax = $('#tax');
var $finalPrice = $('#totalBill');
var numItems = 0;

function addOrderItem(event){
  var $event = $(event.target);
  if(!$event.data('price')){
    return;
  }
  var $element = $('<tr>');
  var $td1 = $('<td>');
  var $td2 = $('<td>');
  $td1.html($event.data('item'));
  $td2.html("$" + $event.data('price'));
  $td2.addClass("right-align");
  $element.append($td1);
  $element.append($td2);
  $body.append($element);
  let subString = $subTotal.html();
  let currentSub = parseFloat(subString.substr(1));
  let itemPrice = parseFloat($event.data('price'));
  let newSub = currentSub + itemPrice;
  $subTotal.html("$" + newSub);
  let tax = parseFloat(newSub * 0.10);
  $tax.html("$" + tax.toFixed(2));
  let totalPrice = parseFloat(newSub + tax);
  $finalPrice.html("$" + totalPrice.toFixed(2));
  numItems++;
}

function placeOrder(event) {
  if(numItems === 0){
    alert("An order has to contain items yo.");
    return false;
  }
  Materialize.toast("Congratulations on ordering food!", 5000);
  event.preventDefault();
}

$('.cards-container').on('click', addOrderItem);
$('#userInfo').on('submit', placeOrder);
