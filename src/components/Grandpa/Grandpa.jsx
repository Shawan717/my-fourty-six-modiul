import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


const Grandpa = () => {
    const asset='diamond'
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Anty asset={asset}></Anty>
            </section>
        </div>
    );
};

export default Grandpa;