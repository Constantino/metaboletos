import express from "express";
import cors from "cors";
import "dotenv/config";
import storeNFT from "./services/nft.storage.service.mjs";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});


app.post("/upload/nft", async (req, res) => {
  console.log("req", req.body);
  const { id } = req.body;
  const result = await storeNFT(id);
  res.header("Access-Control-Allow-Origin", "*").status(200).send(result);
});


app.get("/read/nft", (req, res) => {
  res.send("read nft");
});

app.listen(port, () =>
  console.log("App is listening on url http://localhost:" + port)
);
