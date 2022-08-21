import { useState } from "react";
import EventsList from "./webComponents/EventsList";
import NavBar from "./webComponents/Navbar";
import { getETHPrice } from "./utils/getETHPrice";
import App from "./App";

const App2 = () => {
  const [ethPrice, setEthPrice] = useState(0);

  const displayPrice = async () => {
    let value = await getETHPrice();
    console.log("value", value);
    return value;
  };

  displayPrice().then((val) => setEthPrice(val));
  return (
    <div>
      {/* <p>The price of ETH is {ethPrice ? ethPrice : "Loading..."}</p> */}
      <NavBar />
      {/* <App /> */}
      <EventsList ethPrice={ethPrice} />
    </div>
  );
};

export default App2;
