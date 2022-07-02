import {user} from "./user"

const logForm = document.getElementById('logform');

logForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElemtnById('exampleFormControlname').value;
    
    const email = document.getElemtnById('exampleFormControlEname').value;
    
    const comment = document.getElemtnById('exampleFormControlTextarea').value;

    console.log({
        name,
        email,
        comment
        
    });
}