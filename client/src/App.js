import { useState } from "react";
import { Prueba } from "./components/Prueba";
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
      <Prueba />
    </div>
  );
};

export default App;
