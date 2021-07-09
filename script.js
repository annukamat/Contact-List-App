let cmsKey = 'cms-table';
let clearBtn = document.getElementById("clearBtn");

let cmsTableDemo = {
    'Annu Kamat': {
        'phone': '12345',
        'email': 'annu@gmail.com',
        'address': '25/2 gagan vihar'
    },

    'Pooja Kamat': {
        'phone': '987456',
        'email': 'pooja@gmail.com',
        'address': '25/2 gagan vihar'
    },
    'Ranjan Kamat': {
        'phone': '1111111',
        'email': 'pooja@gmail.com',
        'address': '25/2 gagan vihar'
    },
    'Baijantri Kamat': {
        'phone': '22222',
        'email': 'baijantri@gmail.com',
        'address': '25/2 Gagan vihar'
    }
}
let cmsTable = cmsTableDemo;

let refrehDOMTable = () => {
    let cmsTableKeys = Object.keys(cmsTable);
    let contactContainer = document.getElementById("contactTable");
    let oldContactBody = document.getElementById("contactLists");   //array
    
    contactContainer.removeChild(oldContactBody); //removing ul
    console.log(contactContainer);

    let newContactBody = document.createElement('ul');
    newContactBody.id = "contactLists";
    newContactBody.className = "contact-lists";
    contactContainer.appendChild(newContactBody);
    // console.log(contactContainer);

    for(let i=0; i<cmsTableKeys.length; i++){
        let listsofContact =    `<a href="./Contact-profile/profile.html">
                                    <div class="contact-section">
                                        <li class="list-item">
                                            <p class="contact-name">${cmsTableKeys[i]}</p>
                                            <p class="contact-rel">${cmsTable[cmsTableKeys[i]].phone}</p>
                                        </li>
                                        <li class="list-item">
                                            <i class="fas fa-phone"></i>
                                            <i class="fas fa-sms text"></i>
                                        </li>
                                    </div>
                                </a>
                                <hr>`
        
        let div = document.createElement("div");
        div.innerHTML = listsofContact;
        newContactBody.append(div);
    }
    // console.log(newContactBody);
}
// refrehDOMTable();

let newPersonSubmitBtn = document.getElementById("newPersonSubmitBtn"); //array
console.log(newPersonSubmitBtn);
let newPersonDeleteBtn = document.getElementById("newDeleteBtn"); //array

// submit btn pe eventListener
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
        refrehDOMTable();
    }
})


clearBtn.addEventListener("click", () => {
    localStorage.removeItem(cmsKey);
})

