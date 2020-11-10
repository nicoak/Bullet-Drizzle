self.onmessage = function (event) {
    fetch("https://gamedashboarducp.azurewebsites.net/api/game",{
        method: 'post', body: JSON.stringify(event)
    });
}