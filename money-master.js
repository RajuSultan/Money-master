function expansesInput(inputId) {

    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseInt(inputText);
    if (inputValue >= 0) {
        return inputValue;
    } else {
        console.log("Enter a Positive Number!")
    }

}
document.getElementById("cal-expanses").addEventListener("click", function () {
    const income = expansesInput("income-input");
    // console.log(income);
    const food = expansesInput("food-input");
    const rent = expansesInput("rent-input");
    const clothes = expansesInput("clothes-input");
    const totalExpanses = food + rent + clothes;
    const expanses = document.getElementById("total-expanses");
    // console.log(totalExpanses);

    if (isNaN(totalExpanses)) {
        console.log("Enter the Valid Number!");
        expanses.innerText = "00";
    } else {
        if (totalExpanses > income) {
            console.log("Your Expanses is over your income!");
            expanses.innerText = totalExpanses;
        } else {
            expanses.innerText = totalExpanses;
        }
    }

    const balanceInner = document.getElementById("balance");
    const balance = income - totalExpanses;

    if (isNaN(totalExpanses) || isNaN(income)) {
        console.log("Enter the Valid Number!");
        balanceInner.innerText = "00";
    } else {
        if (balance < 0) {
            console.log("Your are in Lose");

        } else {
            balanceInner.innerText = balance;
        }
    }

})
document.getElementById("save-btn").addEventListener("click", function () {
    const saveInputParsentage = document.getElementById("save-input");
    const saveInputParsentageText = saveInputParsentage.value;
    const saveInputParsentageValue = parseInt(saveInputParsentageText);
    const income = expansesInput("income-input");
    const savingAmount = (income * saveInputParsentageValue) / 100;
    const savingAmountInner = document.getElementById("saving-amount");
    // savingAmountInner.innerText = savingAmount;
    const balanceInner = document.getElementById("balance");
    const balance = parseInt(balanceInner.innerText);
    const remainingAmount = balance - savingAmount;
    const remainingAmountInner = document.getElementById("remaining-amount");
    // remainingAmountInner.innerText = remainingAmount;
    if (isNaN(saveInputParsentageValue)) {
        console.log("Enter the Valid Number!");
        savingAmountInner.innerText = "00";
        remainingAmountInner.innerText = "00";
    } else {
        if (saveInputParsentageValue > 0) {
            savingAmountInner.innerText = savingAmount;
            remainingAmountInner.innerText = remainingAmount;
        } else {
            console.log("Enter a Valid/Positive Number!");
            savingAmountInner.innerText = "00";
            remainingAmountInner.innerText = "00";
        }
    }


    // console.log(balance);
})