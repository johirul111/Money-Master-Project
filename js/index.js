document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income-input');
    const incomeValue = income.value;
    const totalIncome = parseFloat(incomeValue);
    income.value = '';
    // ------All expenses addition update------
    let food = document.getElementById('food-input');
    let foodExpense = parseFloat(food.value);
    let rent = document.getElementById('rent-input');
    let rentExpense = parseFloat(rent.value);
    let clothe = document.getElementById('clothe-input');
    let clotheExpense = parseFloat(clothe.value);
    food.value = '';
    rent.value = '';
    clothe.value = '';
    const allExpenses = foodExpense + rentExpense + clotheExpense;
    if (isNaN(allExpenses && totalIncome) || allExpenses < 0 || totalIncome < 0) {
        return alert('please input a valid number');
    };
    // ------All expenses addition-----
    const expense = document.getElementById('total-expense');
    expense.innerText = allExpenses;
    // ------Current balance update------
    const newBalance = totalIncome - allExpenses;
    const balance = document.getElementById('balance');
    balance.innerText = newBalance;
});
// ------Savings part------
document.getElementById('saving-btn').addEventListener('click', function () {
    const saving = document.getElementById('saving-input');
    const savingPercentage = parseFloat(saving.value);
    saving.value = '';
    const currentBalance = document.getElementById('balance').innerText;
    const savingsAmount = parseFloat(savingPercentage) * parseFloat(currentBalance) / 100;
    if (isNaN(savingsAmount) || savingsAmount < 0 || savingsAmount > currentBalance) {
        return alert('Please insert valid number');
    };
    // ------savings amount update------
    const savingsTotal = document.getElementById('saving-amount');
    savingsTotal.innerText = savingsAmount;
    const remainingBalance = currentBalance - savingsAmount;
    // ------Remaining balance update------
    const remaining = document.getElementById('remaining-balance');
    remaining.innerText = remainingBalance;
});