document.addEventListener("DOMContentLoaded", function () {
    const tipForm = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipSlider = document.getElementById("tipSlider");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");

    tipForm.addEventListener("input", updateTip);

    function updateTip() {
        const billValue = parseFloat(billTotal.value);
        const tipValue = parseFloat(tipSlider.value);
        
        if (isNaN(billValue)) {
            alert("Please enter a valid number for Bill Total.");
            return;
        }

        const tipPercentageValue = tipValue + "%";
        tipPercentage.value = tipPercentageValue;

        const tipAmountValue = (billValue * tipValue / 100).toFixed(2);
        tipAmount.value = tipAmountValue;

        const totalWithTipValue = (billValue + parseFloat(tipAmountValue)).toFixed(2);
        totalWithTip.value = totalWithTipValue;
    }
});

