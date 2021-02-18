let studentsList1 = [];
let studentsList2 = [];
let studentName = '';
let message = '';
for (let i = 0; i < 2; i++) {
    let count = 0;
    if (i) {
        message = 'შეიტანე სტუდენტთა რაოდენობა მეორე სიისთვის:';
        messageName = 'შეიტანე სტუდენტის სახელი მეორე სიისთვის:';
    } else {
        message = 'შეიტანე სტუდენტთა რაოდენობა პირველი სიისთვის:';
        messageName = 'შეიტანე სტუდენტის სახელი პირველი სიისთვის:';
    }
    let studentCount = parseInt(prompt(message, ''));
    while (count < studentCount) {
        studentName = prompt(messageName, '');
        if (i) {
            studentsList2.push(studentName);
        } else {
            studentsList1.push(studentName);
        }
        count++;
    }
}


for (let i = 0; i < studentsList1.length; i++) {
    let matched = false;
    for (let j = 0; j < studentsList2.length; j++) {
        if (studentsList2[j] == studentsList1[i]) {
            matched = true;
            break;
        }
    }
    if(!matched){
        studentsList2.push(studentsList1[i]);
    }
}

alert(studentsList2);