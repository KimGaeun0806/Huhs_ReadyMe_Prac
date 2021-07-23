const img = document.querySelector("#img");
const button = document.querySelector('#btn_submit');
button.addEventListener("click", submit);
const userName = document.querySelector('p_user_id');



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
        img.src = data.profile_url;
        userName.textContent = ID; 


        

       

    
    }).catch(error => {console.log(error)})
}