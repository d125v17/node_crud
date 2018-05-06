function logout(event) {
    event.preventDefault();
    fetch("users/logout",
    {
        method: "POST",
        credentials: 'same-origin',
    })
    .then(function(res){ return res.text(); })
    .then(function(json){
        let data = JSON.parse(json);
        console.log('data=', data);
        if (!data.error) {
            window.location = '/';
        }
    });
}