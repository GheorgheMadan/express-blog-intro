const express = require('express');
const app = express();
const port = 3000;

// definisco l'uso di una cartella per i file statici 
app.use(express.static('public'));
