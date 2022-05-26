var numbers1 = (0,1,2,3,4,5);

var numbers2 = [[0,1,2],[3,4,5]]

var myArray = new Array;


var people =[
    ["Tom", 25, false],
    ["Bill", 38, true]
    ["Alice", 23, false]
];

console.log(people[0][2]);

console.log(people[1][1]);

console.log(people[2][2]);

// false, 38, false

console.log(people[0][0] + "  " + people[1][0] + "  " + people[2][0]);

//Tom  Bill  Alice


var income = prompt ("შეიყვანეთ თქვენი მიმდინარე შემოსავალი");
if (income<400){
    var message="თქვენი ანაზღაურება საშუალოზე დაბალია";
    alert(message)
}

else if (income >=400 && income <=800){
    alert("თქვენ გაქვთ საშუალო ანაზღაურება");
}

else{
    alert("თქვენი ანაზღაურება საშუალოზე მაღალია");
}

// დავალება 2

function price (x,testmessage) {
    var message = testmessage(x);
    document.write(message);
}
function informationaboutprice(price){
    if (price<20)
    return "ძალიან იაფია";
    else if (price<50)
    return "საშუალო ფასია";
    else
    return "ძალიან ძვირია";
}
price(45,informationaboutprice);



