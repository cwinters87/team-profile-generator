
function generateManagerCard(data) {
    return `
        <div class="card" style="width: 18rem;">                    
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text"><i class='fas fa-mug-hot'></i> ${data.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <br><a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office number: <br>${data.officeNumber}</li>
            </ul>                
        </div>
    `}

module.exports = generateManagerCard