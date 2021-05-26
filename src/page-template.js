
const generatepage = (manager, engineer, intern) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <title>My Team!</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/939fa0d1ce.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
    
    </head>
    <body>
        <header><h1 class="align-middle">My Team</h1></header>
        <main>
            <section id="section">
                ${manager}
                ${engineer}
                ${intern}                                 
            </section>
        </main>
        
    </body>
    </html>`
}

module.exports = generatepage