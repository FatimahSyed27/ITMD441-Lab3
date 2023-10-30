const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalWithTip = document.getElementById('totalWithTip');

document.getElementById('tipForm').addEventListener('input', function() {
    let bill = parseFloat(billTotal.value);
    let tip = parseFloat(tipSlider.value);
    let tipValue = (bill * tip) / 100;
    let total = bill + tipValue;

    if (isNaN(bill)) {
        alert("Please enter a valid bill amount.");
        return;
    }

    tipPercentage.textContent = tip + "%";
    tipAmount.value = tipValue.toFixed(2);
    totalWithTip.value = total.toFixed(2);
});
