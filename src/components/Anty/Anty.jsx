import Cousin from "../Cousin/Cousin";


const Anty = ({asset}) => {
    return (
        <div>
            <h3>Anty</h3>
            <section className="flex">
                <Cousin name={"Joy"} asset={asset}></Cousin>
                <Cousin name={"Polash"}></Cousin>
            </section>
        </div>
    );
};

export default Anty;