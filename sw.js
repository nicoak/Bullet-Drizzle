self.onmessage = function (obj) {
    fetch("https://gamedashboarducp.azurewebsites.net/api/game",{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({game: "Bullet-Drizzle-Nico", event: obj.data[0], data: '' })
    

});
}