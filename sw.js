self.onmessage = function (event,data) {
    console.log(obj)
    fetch("https://gamedashboarducp.azurewebsites.net/api/game",{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    
    
});
}