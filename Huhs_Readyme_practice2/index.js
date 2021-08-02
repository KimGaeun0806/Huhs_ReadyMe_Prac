import axios from "axios";

const button = document.querySelector('#btn_submit');
button.addEventListener("click", submit);

function submit (){
    let user = {
        username: input_id.value,
        password: input_pw.value
    };

    const data = {
        "username": "admin",
        "password": "admin"
    }

    axios.post("http://3.37.140.20:5000/api/v1/account/login", data) 
    .then(res => {
        console.log(data);

        const profileImg = document.querySelector('#img');
        profileImg.src = res.data.profile_url;

        const profileId = document.querySelector('#p_user_id');
        profileId.textContent = res.data.user_id;

        const profileName = document.querySelector('#p_username');
        profileName.textContent = res.data.username;

        const profileBio = document.querySelector('#p_bio');
        profileBio.textContent = res.data.bio;

        const profileAccess = document.querySelector('#p_access_token');
        profileBio.textContent = res.data.access_token;

        button.addEventListener("click", newPage);

        function newPage(){
            window.location.href="netflix.html";
        }
    }).catch(error => {console.log(error)})
}

function netflix(){
    
}