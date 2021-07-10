let newPersonSubmitBtn = document.getElementById("newPersonSubmitBtn"); //array
let newPersonDeleteBtn = document.getElementById("newDeleteBtn"); //array

console.log(cmsTable)

newPersonSubmitBtn.addEventListener('click', () => {
    let newPersoName = document.getElementById("newPersonName").value.trim();
    let newPersonPhone = document.getElementById("newPersonphone").value.trim();
    let newPersonRelation = document.getElementById("newPersonRelation").value.trim();
    let newPersonEmail = document.getElementById("newPersonEmail").value.trim();
    let newPersonAddress = document.getElementById("newPersonAddress").value.trim();

    if(newPersoName !== '' && newPersonPhone!=='' && newPersonRelation!=='' && newPersonEmail!=='' && newPersonAddress!==''){
        cmsTable[newPersoName] = {
            'phone': newPersonPhone,
            'relation': newPersonRelation,
            'email': newPersonEmail,
            'address': newPersonAddress
        }
        localStorage.setItem(cmsKey, JSON.stringify(cmsTable)); // key, value
        // refrehDOMTable();
    }
})
