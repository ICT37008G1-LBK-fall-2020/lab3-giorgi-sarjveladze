let input = prompt('შეიტანე ტექსტი', '');
let intro;
if (input.length > 15) {
    intro = input.substr(0, 15) + '...';
}else {
    intro = input;
}
alert(intro);