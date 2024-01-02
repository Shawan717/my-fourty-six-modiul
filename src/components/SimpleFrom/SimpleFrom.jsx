

const SimpleFrom = () => {
    const handleSubmit=a=>{
        a.preventDefault(); //ar reload kabe na eta dile
        console.log("I also love me");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
               <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default SimpleFrom;