const express = require('express');
const app = express();
const port = 3000;

// definisco l'uso di una cartella per i file statici 
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.send('Server del mio blog');
})
app.get('/bacheca', (req, res) =>{
    const posts = [
        {
          titolo: "Ciambellone soffice alla vaniglia",
          contenuto: "Un dolce classico, soffice e profumato, perfetto per la colazione o la merenda.",
          immagine: "http://localhost:3000/ciambellone.jpeg",
          tags: ["dolce", "colazione", "merenda", "vaniglia", "soffice"]
        },
        {
          titolo: "Cracker alla barbabietola croccanti",
          contenuto: "Cracker leggeri e gustosi con un tocco naturale di barbabietola, ideali come snack salutare.",
          immagine: "http://localhost:3000/cracker_barbabietola.jpeg",
          tags: ["cracker", "snack", "barbabietola", "croccante", "salutare"]
        },
        {
          titolo: "Pane fritto dolce con zucchero e cannella",
          contenuto: "Fette di pane fritte e avvolte nello zucchero e cannella, perfette per una colazione golosa.",
          immagine: "http://localhost:3000/pane_fritto_dolce.jpeg",
          tags: ["pane", "dolce", "fritto", "cannella", "colazione"]
        },
        {
          titolo: "Pasta alla barbabietola con crema di formaggio",
          contenuto: "Un primo piatto colorato e saporito, con pasta alla barbabietola e una morbida crema di formaggio.",
          immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
          tags: ["pasta", "barbabietola", "primo", "formaggio", "colorato"]
        },
        {
          titolo: "Torta paesana della tradizione lombarda",
          contenuto: "Un dolce rustico e ricco di sapore, preparato con pane raffermo, cacao e uvetta.",
          immagine: "http://localhost:3000/images/torta_paesana.jpeg",
          tags: ["torta", "paesana", "tradizione", "cacao", "uvetta"]
        }
      ];
    res.json(posts)
})

app.listen(port, () => {
    console.log(`l'app è in ascolto sul port ${port}`)
});

