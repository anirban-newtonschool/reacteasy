
function Dataset({data}){


    return(
        data.map(element => {
            return(
            <div className="row">
            <div className="col">{element.name}</div>
            <div className="col">{element.roll} </div>
            </div>)
        
    })
       


    )


}

export default Dataset