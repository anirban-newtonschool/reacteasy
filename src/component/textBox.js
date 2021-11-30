import Table from './table'
function TextBox({namedata}){


    return(
        <>
        <input className="input-box" type="text" value={namedata}/>
        <Table tabledata={namedata}/>
        </>
       


    )


}

export default TextBox