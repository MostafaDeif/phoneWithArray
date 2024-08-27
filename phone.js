
let phonename = ["iphone1","iphone2","iphone3","iphone4","iphone5"];
let phoneprice = [10,20,30,40,50];

let phone=[];
phonename.forEach((value, index) => {
    phone.push(value + " " +phoneprice[index]);
    console.log(index + 1 + "-Phone name is  " + phonename[index] + " and his price is : " + phoneprice[index]);
});

function add(){
    console.clear();
    phonename.push(prompt("Enter the new phone name"));
    phoneprice.push(prompt("Enter the new phone price"));
    // console.clear();
    let phone=[];

    phonename.forEach((value, index) => {
        phone.push(value + " " +phoneprice[index]);
        console.log(index + 1 + "-Phone name is  " + phonename[index] + " and his price is : " + phoneprice[index]);
    });
    console.log(phone);
}

function deletePhone() {
    console.clear();
    let phone = [];

    phonename.forEach((value, index) => {
        phone.push(value + " " + phoneprice[index]);
        console.log(index + 1 + "-Phone name is  " + phonename[index] + " and his price is : " + phoneprice[index]);
    });

    let deleteIndex = +prompt("Enter phone number to delete") - 1;
    console.clear();
    if (deleteIndex >= 0 && deleteIndex < phonename.length) {
        phonename.splice(deleteIndex, 1);
        phoneprice.splice(deleteIndex, 1);
    } else {
        console.log("Invalid index");
    }

    phone = [];
    phonename.forEach((value, index) => {
        phone.push(value + " " + phoneprice[index]);
        console.log(index + 1 + "-Phone name is  " + phonename[index] + " and his price is : " + phoneprice[index]);
    });
    console.log(phone);
}

function updatePhone() {
    console.clear();
    let phone = [];

    phonename.forEach((value, index) => {
        phone.push(value + " " + phoneprice[index]);
        // console.log(index + 1 + " name " + phonename[index] + " and his price " + phoneprice[index]);
    });
    let updateIndex = +prompt("Enter phone number to update") - 1;
    phonename.splice(updateIndex, 1,  prompt("update phone name "));
    phoneprice.splice(updateIndex, 1 ,prompt("update phone price ") );
    phone = [];
    phonename.forEach((value, index) => {
        phone.push(value + " " + phoneprice[index]);
        console.log(index + 1 + "-Phone name is  " + phonename[index] + " and his price is : " + phoneprice[index]);
    });
    console.log(phone);
}
