

const SimpleFrom = () => {
    const handleSubmit=a=>{
        a.preventDefault(); //ar reload kabe na eta dile
        console.log("I also love me");
        console.log(a.target.name.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" id=""/>
                <br />
        
               <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default SimpleFrom;