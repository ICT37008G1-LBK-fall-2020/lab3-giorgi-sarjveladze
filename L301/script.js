let banned = ['რეკლამა', 'მარკეტინგი', 'ვირუსი'];
let input = prompt('შეიტანე ტექსტი', '');
let containsBanned = false;
for (let i = 0; i < banned.length; i++) {
    if (input.indexOf(banned[i]) > -1) {
        containsBanned = true;
        break;
    }
}
containsBanned ? alert('ტექსტი შეიცავს აკრძალულ სიტყვას') : alert('ტექსტი არ შეიცავს აკრძალულ სიტყვას');
