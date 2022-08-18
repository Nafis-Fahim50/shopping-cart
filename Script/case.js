document.getElementById('btn-casePlus').addEventListener('click',function(){
    const caseField = document.getElementById('case-field');
    const caseValueString = caseField.value;
    const previousCaseValue = parseInt(caseValueString);

    const newCaseValue = previousCaseValue + 1;
    caseField.value = newCaseValue;
})