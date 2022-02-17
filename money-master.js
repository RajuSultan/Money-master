function expansesInput(inputId) {

    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseInt(inputText);
    if (inputValue >= 0) {
        return inputValue;
    } else {
        alert("Enter a Positive Number in " + inputId + "!")
    }

}
document.getElementById("cal-expanses").addEventListener("click", function () {
    const income = expansesInput("income-input");
    const food = expansesInput("food-input");
    const rent = expansesInput("rent-input");
    const clothes = expansesInput("clothes-input");
    const totalExpanses = food + rent + clothes;
    const expanses = document.getElementById("total-expanses");

    if (isNaN(totalExpanses)) {
        console.log("Enter the Valid Number!");
        expanses.innerText = "00";
    } else {
        if (totalExpanses > income) {
            alert("Your Expanses is over your income!");
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
            alert("Your are in Lose" + balance);

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
    const balanceInner = document.getElementById("balance");
    const balance = parseInt(balanceInner.innerText);
    const remainingAmount = balance - savingAmount;
    const remainingAmountInner = document.getElementById("remaining-amount");
    if (isNaN(saveInputParsentageValue)) {
        alert("Enter the Valid Paesentage Number!");
        savingAmountInner.innerText = "00";
        remainingAmountInner.innerText = "00";
    } else {
        if (saveInputParsentageValue > 0) {
            savingAmountInner.innerText = savingAmount;
            if (remainingAmount >= 0) {
                remainingAmountInner.innerText = remainingAmount;
            } else {
                remainingAmountInner.innerText = "00";
            }

        } else {
            alert("Enter a Valid/Positive Number as a Parsentage!");
            savingAmountInner.innerText = "00";
            remainingAmountInner.innerText = "00";
        }
    }
})