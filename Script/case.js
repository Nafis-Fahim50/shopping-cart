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
}

document.getElementById('btn-casePlus').addEventListener('click',function(){
    updateCase(true);
})

document.getElementById('btn-caseMinus').addEventListener('click',function(){
    updateCase(false);
})