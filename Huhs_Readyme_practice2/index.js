const button = document.querySelector('#btn_submit');
button.addEventListener("click", submit);

function submit (){
    let user = {
        username: input_id.value,
        password: input_pw.value
    };

    fetch("http://3.37.140.20:5000/api/v1/account/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const profileImg = document.createElement('img');
        profileImg.src = data.profile_url;
        document.querySelector('#img').innerHTML='';
        const userImg = document.querySelector('#img');
        userImg.append(profileImg);

        const profileId = document.createElement('p');
        profileId.textContent = data.user_id;
        document.querySelector('#p_user_id').innerHTML='';
        const userId = document.querySelector('#p_user_id');
        userId.append(profileId); 

        const profileName = document.createElement('p');
        profileName.textContent = data.username;
        document.querySelector('#p_username').innerHTML='';
        const userName = document.querySelector('#p_username');
        userName.append(profileName);

        const profileBio = document.createElement('p');
        profileBio.textContent = data.bio;
        document.querySelector('#p_bio').innerHTML='';
        const userBio = document.querySelector('#p_bio');
        userBio.append(profileBio);

        const profileAccess = document.createElement('p');
        profileBio.textContent = data.access_token;
        document.querySelector('#p_access_token').innerHTML='';
        const userAccess = document.querySelector('#p_access_token');
        userAccess.append(profileAccess);

        button.addEventListener("click", newPage);

        function newPage(){
            window.location.href="netflix.html";
        }



    }).catch(error => {console.log(error)})
}

function netflix(){
    
}