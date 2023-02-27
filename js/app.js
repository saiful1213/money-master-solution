function getInnerText(elementId){
  const elementTextString = document.getElementById(elementId).innerText;
  const elementText = parseInt(elementTextString);
  return elementText;
}
function getInputValue(inputId){
  const inputElement = document.getElementById(inputId);
  const inputValueString = inputElement.value;
  const inputValue = parseInt(inputValueString);
  return inputValue;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
  const foodValue = getInputValue('food-field');
  const rentValue = getInputValue('rent-field');
  const clothValue = getInputValue('cloth-field');

  if(foodValue < 0 || rentValue < 0 || clothValue < 0){
    alert('input should be positive number');
    document.getElementById('expense-element').innerText = '';
    return
  }

  const totalExpense = foodValue + rentValue + clothValue;
  if(isNaN(totalExpense)){
    alert('please fill up the input with valid data');
    document.getElementById('expense-element').innerText = '';
    return
  }
  
  document.getElementById('expense-element').innerText = totalExpense;

  const incomeField = getInputValue('income-field');
  const totalBalance = incomeField - totalExpense;
  if(isNaN(incomeField) || incomeField < 0 || incomeField < totalExpense){
    alert('cut your coat according to your cloths');
    document.getElementById('balance-element').innerText =  '';
    return
  }
  document.getElementById('balance-element').innerText = totalBalance;
})

document.getElementById('save-btn').addEventListener('click', function(){
  const incomeField = getInputValue('income-field');
  const saveField = getInputValue('save-field');
  if(saveField < 0 || isNaN(saveField)){
    alert('input positive number');
    document.getElementById('saving-element').innerText = '';
    return
  }
  const saveFieldAmount = saveField / 100;
  const savingAmount = incomeField * saveFieldAmount;
  document.getElementById('saving-element').innerText = savingAmount;
  
  const totalBalance = getInnerText('balance-element');
  const saveInput = getInnerText('saving-element');
 
  if(totalBalance < 0 || saveInput < 0 || totalBalance < saveInput){
    alert("you didn't have enough money to save");
    document.getElementById('remaining-element').innerText = '';
    return;
  }
  const remainingBalance = totalBalance - saveInput;  
  document.getElementById('remaining-element').innerText = remainingBalance;
})