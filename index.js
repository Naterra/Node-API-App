const express = require('express');
const bodyParser = require('body-parser');


process.on('uncaughtException', function(err) {
    console.error('Uncaught Exception: ', err);
});

process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason);
});

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || 5555;

const expressApp = express();
expressApp.use(bodyParser.json({limit: '100mb', extended: true} ));
expressApp.use(bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit:50000 }));



expressApp.get('/', (req, res) => {
    return res.sendFile('./home.html', { root: __dirname });
});


expressApp.use('/api', require('./api/index'));


expressApp.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
