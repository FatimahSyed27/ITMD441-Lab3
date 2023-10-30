document.addEventListener("DOMContentLoaded", function() {
    const tipForm = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");
    const tipSlider = document.getElementById("tipSlider");

    tipForm.addEventListener("input", calculateTip);

    function calculateTip() {
        const bill = parseFloat(billTotal.value);
        const tipPercent = tipSlider.value;
        const tip = (bill * tipPercent / 100).toFixed(2);
        const total = (bill + parseFloat(tip)).toFixed(2);

        if (isNaN(bill)) {
            tipAmount.value = "Invalid Input";
            totalWithTip.value = "Invalid Input";
        } else {
            tipPercentage.value = tipPercent + "%";
            tipAmount.value = tip;
            totalWithTip.value = total;
        }
    }
});






