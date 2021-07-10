let profile = document.getElementsByClassName("myHref");

var profileKey = 'profile-table';
var profileTable;
for(let i=0; i<profile.length; i++){
    profile[i].addEventListener("click", () => {
        // profileKey = profile[i].children[0].innerText.split("\n")[0];
        profileTable = [{
            "key": cmsTable[i].key,
            'phone': cmsTable[i].phone,
            'email': cmsTable[i].email,
            'address': cmsTable[i].address,
            'relation': cmsTable[i].relation
        }]
        localStorage.setItem(profileKey, JSON.stringify(profileTable));
        console.log(typeof(profileTable))
    })
}

let profileToShow = JSON.parse(localStorage.getItem(profileKey));



