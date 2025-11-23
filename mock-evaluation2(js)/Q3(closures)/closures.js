//Q10

function counter(){
    let count = 1;
    function increment(){
        console.log(count++);
    }
    return increment;
}

let c= counter();
c();
c();
c();

//Q11

function createWallet(){
    let balance = 0;

    function addMoney(amount){
        balance += amount;
    }
    function checkBalance(){
        console.log("Wallet Balance:", balance);
    }
    return { addMoney, checkBalance };
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();



