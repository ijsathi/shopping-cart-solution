function updateCaseNumber (isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber>0){
        caseNumber = parseInt(caseNumber) -1;
    }
    caseInput.value=caseNumber;
    // update case total
    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59;   
}
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber(false);
});
// phone
function updateProductNumber(phone){
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if(phone == true){
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if(phoneNumber>0){
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    // update phone total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
};
document.getElementById('phone-plus').addEventListener('click', function(){
    
    updateProductNumber(true)
});
document.getElementById('phone-minus').addEventListener('click', function(){
    
    updateProductNumber(false)
})