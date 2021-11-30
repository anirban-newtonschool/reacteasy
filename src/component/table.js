
import Dataset from './dataset'
import {useState} from 'react'

function Table({tabledata}){

  const [hidedata,setHideData]=useState(0)
  const [tableData,seTableData]=useState([
    {id:1,name:"anirban",roll:12},
    {id:2,name:"vasudha",roll:13},
    {id:3,name:"Ram",roll:14}
  ])
  
 
    function hideData(){
       if(hidedata==1){
        setHideData(0)
       }else{
        setHideData(1)  
       }
      
    }


    function deleteData(id){

            console.log(id);

           let newData= tableData.filter(singlevalue=>singlevalue.id!=id)  

           console.log(newData);

           seTableData(newData);

            




    }


    //console.log(tabledata)


    return(
        <div className="parent">
            <div className="header">
                <h2> My Data </h2>
                <button onClick={()=>hideData()}>Hide Data</button>
                <button onClick={()=>seTableData([])}> Delete all </button>
            </div>
          
                <div className={hidedata==1?"dataset hide":"dataset nothide"}>
                <div className="row">
                    <div className="col"><strong>Name</strong></div>
                    <div className="col"><strong>Roll </strong></div>
                </div>
                
                {/* <Dataset data={tabledata}/> */}
               { tableData.map(element => {
            return(
            <div className="row">
            <div className="col">{element.name}</div>
            <div className="col">{element.roll} </div>
            <div className="col"><button onClick={()=>deleteData(element.id)} > Delete </button></div>
            </div>)
        
    })}

             
            
             </div>
   
        </div>

    )


}

export default Table

