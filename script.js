

let refrehDOMTable = () => {
    let contactContainer = document.getElementById("contactTable");

    let oldContactBody = document.getElementById("contactLists");   //array
    contactContainer.removeChild(oldContactBody); //removing ul

    let newContactBody = document.createElement('ul');
    newContactBody.id = "contactLists";
    newContactBody.className = "contact-lists";
    contactContainer.appendChild(newContactBody);

    for(let i=0; i<cmsTable.length; i++){
        let listsofContact =    `
                                <a href="./Contact-profile/profile.html" class="myHref">
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
                                </a>
                                
                                <hr>`
        
        let div = document.createElement("div");
        div.innerHTML = listsofContact;
        newContactBody.append(div);
    }
    
}
refrehDOMTable();






