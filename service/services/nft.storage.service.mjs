// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZDRGJFNWE5MmZkODJjNDYyYjUwMTkyNzY3MDdiOTE0NjFmOTBBRDkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDk3NzQ2ODc2NSwibmFtZSI6Im1ldGFib2xldG9zIn0.IlNlvPbuRhthFmiFrEa05gblU_3IIJtjDtZLKzkTivw'

const event_nfts = [
  {
      img: "banksy.png",
      name: "Event 1",
      description: "This is the description event with lots of marketing stuff."
  },
  {
      img: "banksy.png",
      name: "Event 2",
      description: "This is the description event with lots of marketing stuff."
  },
]

/**
  * Reads an image file from `imagePath` and stores an NFT with the given name and description.
  * @param {string} imagePath the path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  */
export default async function storeNFT() {
    // load the file from disk
    const image = await fileFromPath('./services/banksy.png');
    console.log(image);
    const name = event_nfts[0].name;
    console.log(name);
    const description = event_nfts[0].description;
    console.log(description);

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
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
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

