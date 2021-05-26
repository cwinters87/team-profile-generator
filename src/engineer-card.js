
function generateEngineerCards(data) {
    let cardText = ''
    for (i=1; i < data.length; i++){
        cardText = cardText + `<div class="card" style="width: 18rem;">                    
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text"><i class='fas fa-glasses'></i> ${data[i].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].id}</li>
            <li class="list-group-item">Email: <br><a href="mailto:${data[i].email}">${data[i].email}</a></li>
            <li class="list-group-item">GitHub: <br><a href="https://github.com/${data[i].getGithub()}" target="_blank">${data[i].getGithub()}</a></li>
        </ul>                
        </div>`    
    }    
    return cardText    
}

module.exports = generateEngineerCards

