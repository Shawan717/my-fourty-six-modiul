import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContext=createContext('gold')
export const MoneyContext=createContext(1000);
const Grandpa = () => {
    const [money,setMoney] = useState(1000)
    const asset='diamond'
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <p>Money : {money}</p>
           <MoneyContext.Provider value={[money,setMoney]}>
           <AssetContext.Provider value="gold">
           <section className="flex">
             <Dad asset={asset}></Dad>
             <Uncle asset={asset}></Uncle>
             <Anty asset={asset}></Anty>
           </section>
           </AssetContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;