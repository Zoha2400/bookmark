const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log("it's working on port 3001");
})

app.get('/downloaded', (res, req) => {
    req.json({
        message: 200
    })
})