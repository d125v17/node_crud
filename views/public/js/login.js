function login(event) {
    event.preventDefault();
    var form = document.getElementById('login-form');
    var formData    = new FormData(form);
    fetch("users/login",
    {
        method: "POST",
        body: formData,
        credentials: 'same-origin',
    })
    .then(function(res){ return res.text(); })
    .then(function(json){
        let data = JSON.parse(json);
        console.log('data=', data);
        if (!data.error) {
            window.location = '/cabinet';
        } else {
            var alertLog = document.getElementById('login-alert');
            alertLog.textContent = data.error;
            alertLog.style.display = 'block';
        }
    });
}