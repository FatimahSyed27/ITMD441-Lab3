document.addEventListener("DOMContentLoaded", function () {
    const tForm = document.getElementById("tForm");
    const fullTotal = document.getElementById("fullTotal");
    const tipPer = document.getElementById("tipPer");
    const tipSli = document.getElementById("tipSli");
    const tipAmount = document.getElementById("tipAmount");
    const totalBillWithTip = document.getElementById("totalBillWithTip");

    tForm.addEventListener("input", updateTipAmount);

    function updateTipAmount() {
        const bill = parseFloat(fullTotal.value);
        const tipPercent = tipSli.value;
        const tip = (bill * tipPercent) / 100;
        const total = bill + tip;

        if (isNaN(bill)) {
            tipAmount.value = "Invalid Input";
            totalBillWithTip.value = "Invalid Input";
        } else {
            tipAmount.value = tip.toFixed(2);
            totalBillWithTip.value = total.toFixed(2);
            tipPer.value = tipPercent + "%";
        }
    }
});

