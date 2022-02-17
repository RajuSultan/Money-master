
//--------food ,rent, clothes and income input function------//
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
//------------calculation button addEventListener--------//
document.getElementById("cal-expanses").addEventListener("click", function () {
    const income = expansesInput("income-input");
    const food = expansesInput("food-input");
    const rent = expansesInput("rent-input");
    const clothes = expansesInput("clothes-input");
    //-------------total Expanses calculation---------//
    const totalExpanses = food + rent + clothes;
    const expanses = document.getElementById("total-expanses");

    //-------------Nan error check----------//
    if (isNaN(totalExpanses)) {
        console.log("Enter the Valid Number!");
        expanses.innerText = "00";
    } else {
        //--------over expanses alert--------//
        if (totalExpanses > income) {
            alert("Your Expanses is over your income!");
            expanses.innerText = totalExpanses;
        } else {
            expanses.innerText = totalExpanses;
        }
    }

    //-----------get balance----------//

    const balanceInner = document.getElementById("balance");
    //----------balance calculation----------//
    const balance = income - totalExpanses;
    //-------------Nan error check----------//
    if (isNaN(totalExpanses) || isNaN(income)) {
        console.log("Enter the Valid Number!");
        balanceInner.innerText = "00";
    } else {
        //----------negative error check-----//
        if (balance < 0) {
            alert("Your are in Lose" + balance);
        } else {
            balanceInner.innerText = balance;
        }
    }

})

//------------save button addEventListener-----------//
document.getElementById("save-btn").addEventListener("click", function () {
    //-----------collect Parcentage----------//
    const saveInputParsentage = document.getElementById("save-input");
    const saveInputParsentageText = saveInputParsentage.value;
    const saveInputParsentageValue = parseInt(saveInputParsentageText);
    const income = expansesInput("income-input");
    //-----------parcent amount calculation---------//
    const savingAmount = (income * saveInputParsentageValue) / 100;
    const savingAmountInner = document.getElementById("saving-amount");
    //---------get balance------------//
    const balanceInner = document.getElementById("balance");
    const balance = parseInt(balanceInner.innerText);
    //----------remainingAmount calculation-------------//
    const remainingAmount = balance - savingAmount;
    const remainingAmountInner = document.getElementById("remaining-amount");
    //-------------Nan error check----------//
    if (isNaN(saveInputParsentageValue)) {
        alert("Enter the Valid Paesentage Number!");
        savingAmountInner.innerText = "00";
        remainingAmountInner.innerText = "00";
    } else {
        //----------negative error check-----//
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