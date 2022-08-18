function updateCase(isIncrease){
    const caseField = document.getElementById('case-field');
    const caseValueString = caseField.value;
    const previousCaseValue = parseInt(caseValueString);

    let newCaseValue;
    if(isIncrease === true){
        newCaseValue = previousCaseValue + 1;
    }
    else{
        newCaseValue = previousCaseValue - 1;
    }
    caseField.value = newCaseValue;

    return newCaseValue;
}

function updateCasePrice(newCaseValue){
    const caseTotalPrice = newCaseValue * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-casePlus').addEventListener('click',function(){
    const newCaseValue = updateCase(true);
    updateCasePrice(newCaseValue)
})

document.getElementById('btn-caseMinus').addEventListener('click',function(){
   const newCaseValue =  updateCase(false);
   updateCasePrice(newCaseValue)
})