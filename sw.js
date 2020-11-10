self.onmessage = function (event) {
    fetch("https://gamedashboarducp.azurewebsites.net/api/game",{
        method: 'post', body: event
    });
    console.log(fetch.body);
}