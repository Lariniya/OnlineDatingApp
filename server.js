const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
// environment variable for port
// for localhost port = 3000
const port = process.env.PORT || 3000;
// setup view engine
app.engine('handlebars',exphbs.engine({defaultLayout:'main'}));
// в курсе написано app.engine('handlebars',exphbs({defaultLayout:'main'}));, но это курс 2019 года, сейчас так не работает
app.set('view engine', 'handlebars');

app.get('/',(req,res) => {
    res.render('home',{
        title: 'Home'
    });
});

app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/contact',(req,res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})