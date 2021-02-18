var input = prompt('შეიტანეთ თანხა', '$10');
var isDollar = input.indexOf('$') > -1;
var amount = parseFloat(input.substring(1, input.length));
if (isDollar) {
    alert(input + '=L' + amount * 2.6);
}else {
    alert(input + '=$' + amount / 2.6);
}