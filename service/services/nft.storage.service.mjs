// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from "nft.storage";
import "dotenv/config";

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from "mime";

// The 'fs' builtin module on Node.js provides access to the file system
import fs from "fs";

// The 'path' module provides helpers for manipulating filesystem paths
import path from "path";

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;

const event_nfts = [
  {
    img: "banksy.png",
    name: "Event 1",
    description: "This is the description event with lots of marketing stuff.",
  },
  {
    img: "banksy.png",
    name: "Event 2",
    description: "This is the description event with lots of marketing stuff.",
  },
];

const NEW_EVENT_NFTS = [
  {
    id: 1,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "The Merge",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "15 Sep",
    price: 1534,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Garo",
    ownerAvatar: "",
  },
  {
    id: 2,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "The ChainLinkers",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "22 Sep",
    price: 250,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Constantino",
    ownerAvatar: "",
  },
  {
    id: 3,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "Green Day",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "1 Oct",
    price: 200,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Isaac",
    ownerAvatar: "",
  },
  {
    id: 4,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "Bad Bunny",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "10 Oct",
    price: 100,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Andrés",
    ownerAvatar: "",
  },
  {
    id: 5,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "The Strokes",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "20 Oct",
    price: 1000,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Andrés",
    ownerAvatar: "",
  },
  {
    id: 6,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "The Merge",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "30 Oct",
    price: 500,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Isaac",
    ownerAvatar: "",
  },
  {
    id: 7,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "The Merge",
    evtTitle2: "Ethereum Live: The Merge",
    location: "Crypto.com Arena",
    date: "5 Nov",
    price: 400,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Constantino",
    ownerAvatar: "",
  },
  {
    id: 8,
    img: "banksy.png",
    description: "This is the description event with lots of marketing stuff.",
    evtTitle1: "The ETHKillers",
    evtTitle2: "",
    location: "Crypto.com Arena",
    date: "1 Apr",
    price: 450,
    duration: "10:00 PM - 01:00 AM",
    ownerName: "Garo",
    ownerAvatar: "",
  },
];

/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
 * @param {string} imagePath the path to an image file
 * @param {string} name a name for the NFT
 * @param {string} description a text description for the NFT
 */
export default async function storeNFT(passed_id) {
  // load the file from disk
  let found_event = NEW_EVENT_NFTS.find((evt) => evt.id == passed_id);

  const image = await fileFromPath(
    `./services/assets/0${passed_id}_NFT_Gif.gif`
  );
  const name = found_event.evtTitle1;
  const description = found_event.description;

  // create a new NFTStorage client using our API key
  let tokenAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZDRGJFNWE5MmZkODJjNDYyYjUwMTkyNzY3MDdiOTE0NjFmOTBBRDkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDk3NzQ2ODc2NSwibmFtZSI6Im1ldGFib2xldG9zIn0.IlNlvPbuRhthFmiFrEa05gblU_3IIJtjDtZLKzkTivw";
  const nftstorage = new NFTStorage({ token: tokenAPI});
  console.log("got nft storage key");

  // call client.store, passing in the image & metadata
  const result = await nftstorage.store({
    image,
    name,
    description,
  });

  console.log("result: ", result);

  return result;
}

/**
 * A helper to read a file from a location on disk and return a File object.
 * Note that this reads the entire file into memory and should not be used for
 * very large files.
 * @param {string} filePath the path to a file to store
 * @returns {File} a File object containing the file content
 */
const fileFromPath = async (filePath) => {
  const content = await fs.promises.readFile(filePath);
  const type = mime.getType(filePath);
  return new File([content], path.basename(filePath), { type });
};
