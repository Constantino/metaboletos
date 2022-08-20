import express from 'express';
import cors from "cors";
import 'dotenv/config';
import storeNFT from './services/nft.storage.service.mjs';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/upload/nft', async (req, res) => {    
    const result = await storeNFT();
    res.status(200).send(result);
});

app.get('/read/nft', (req, res) => {
    res.send('read nft');
});

 app.listen(port, () => console.log('App is listening on url http://localhost:' + port));
