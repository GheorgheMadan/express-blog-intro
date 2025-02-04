const express = require('express');
const app = express();
const port = 3000;

// definisco l'uso di una cartella per i file statici 
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.send('Server del mio blog');
})

app.listen(port, () => {
    console.log(`l'app è in ascolto sul port ${port}`)
});