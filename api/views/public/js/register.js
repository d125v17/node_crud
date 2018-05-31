function register(event) {
    event.preventDefault();
    var form = document.getElementById('reg-form');
    var formData    = new FormData(form);
    fetch("users/register",
    {
        method: "POST",
        body: formData
    })
    .then(function(res){ return res.text(); })
    .then(function(json){
        let data = JSON.parse(json);
        console.log('data=', data);
        if (!data.error) {
            window.location = '/login';
        } else {
            var alertLog = document.getElementById('register-alert');
            alertLog.textContent = data.error;
            alertLog.style.display = 'block';
        }
    });
}