let refrehDOMTable = () => {
    let contactContainer = document.getElementById("contactTable");

    let oldContactBody = document.getElementById("contactLists");   //array
    contactContainer.removeChild(oldContactBody); //removing ul

    let newContactBody = document.createElement('ul');
    newContactBody.id = "contactLists";
    newContactBody.className = "contact-lists";
    contactContainer.appendChild(newContactBody);

    for(let i=0; i<cmsTable.length; i++){
        let listsofContact =    `<a href="./Contact-profile/profile.html" class="myHref">
                                    <div class="contact-section">
                                        <li class="list-item">
                                            <p class="contact-name">${cmsTable[i].key}</p>
                                            <p class="contact-rel">${cmsTable[i].relation}</p>
                                        </li>
                                        <li class="list-item">
                                            <i class="fas fa-phone"></i>
                                            <i class="fas fa-sms text"></i>
                                        </li>
                                    </div>
                                    <hr>
                                </a>`
        
        let div = document.createElement("div");
        div.innerHTML = listsofContact;
        newContactBody.append(div);
    }
    
}

let init = () => {
    if(localStorage.getItem(cmsKey)){
        cmsTable = JSON.parse(localStorage.getItem(cmsKey));
    }else {
        cmsTable = cmsTableDemo;
        localStorage.setItem(cmsKey, JSON.stringify(cmsTable));
    }
    refrehDOMTable();
}
init();

const searchContact = () => {
    let filter = document.getElementById("contactSearch").value.toUpperCase();
    let ul = document.getElementById("contactLists");
    let li = ul.getElementsByTagName("a");

    for(var i=0; i<li.length; i++){
        let a = li[i].getElementsByClassName("contact-name")[0];
        let textValue = a.textContent.toUp || a.innerHTML;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none'
        }
        
    }
    
}





