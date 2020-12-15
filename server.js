const express = require('express');
const app = express();
const port = 3000;
const constructPageBody = require('./checkOrder');


const pageHead =
`
<!DOCTYPE html>
<html lang="ru">
<head>
<title>Результат заказа питомца</title>
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<main>
<h1>Результат заказа питомца</h1>
`;

const pageFoot =
`
<a href="/">⃪ Вернуться к форме заказа</a>
</main>
</body>
</html>
`;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

function ChangeElement(data){
    var re = /\W+/;
    let newdata = data.split(re);
    switch(newdata.petType){
        case 'dog': newdata.petType = 'Собака'; break; 
        case 'cat': newdata.petType = 'Кот'; break; 
        case 'tiger': newdata.petType = 'Тигр'; break; 
    };
    return newdata;
}
 

app.post('/pets/orders', (request, response) => {
    const reqBody = request.body;
    const pageBody = constructPageBody(reqBody);
    console.log(request.body);
    let f = ChangeElement(pageBody);
    console.log(f);
    response.send(`${pageHead}${pageBody}${pageFoot}`);
});


