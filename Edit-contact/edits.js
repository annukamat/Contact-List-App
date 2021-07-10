let newPersonSubmitBtn = document.getElementById("newPersonSubmitBtn"); //array
let newPersonDeleteBtn = document.getElementById("newDeleteBtn"); //array

newPersonSubmitBtn.addEventListener('click', () => {
    let newPersoName = document.getElementById("newPersonName").value.trim();
    let newPersonPhone = document.getElementById("newPersonphone").value.trim();
    let newPersonRelation = document.getElementById("newPersonRelation").value.trim();
    let newPersonEmail = document.getElementById("newPersonEmail").value.trim();
    let newPersonAddress = document.getElementById("newPersonAddress").value.trim();

    if(newPersoName !== '' && newPersonPhone!=='' && newPersonRelation!=='' && newPersonEmail!=='' && newPersonAddress!==''){
        let newTable = {
            "key": newPersoName,
            'phone': newPersonPhone,
            'email': newPersonEmail,
            'address': newPersonAddress,
            'relation': newPersonRelation
        }
        let a = [];
        a = JSON.parse(localStorage.getItem(cmsKey)) || [];
        a.push(newTable);
        localStorage.setItem(cmsKey, JSON.stringify(a)); // key, value
        
        alert("Contact has been successfully added !");
        // refrehDOMTable();
    }
})
