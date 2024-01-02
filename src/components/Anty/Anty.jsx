import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Anty = ({asset}) => {
    const [money ,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h3>Anty</h3>
            <section className="flex">
                <Cousin name={"Joy"} asset={asset}></Cousin>
                <Cousin name={"Polash"}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add To 1000</button>
        </div>
    );
};

export default Anty;