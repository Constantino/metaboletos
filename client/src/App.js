import { useState } from "react";
import { Prueba } from "./components/Prueba";
import EventsList from "./components/EventsList";
import NavBar from "./components/Navbar";
import { getETHPrice } from "./utils/getETHPrice";

const App = () => {
  const [ethPrice, setEthPrice] = useState(0);

  const displayPrice = async () => {
    let value = await getETHPrice();
    console.log("value", value);
    return value;
  };

  displayPrice().then((val) => setEthPrice(val));
  return (
    <div>
      <p>The price of ETH is {ethPrice ? ethPrice : "Loading..."}</p>
      <NavBar />
      <EventsList />
    </div>
  );
};

export default App;
