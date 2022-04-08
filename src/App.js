
import {useState} from "react"

function App() {
  const[stateone, setStateone]=useState( )
  const[statetwo, setStatetwo]=useState( )
  const[result, setResult]=useState()
   const number =  [
      {
        sign:'+',
        
      },
      {
        
        sign:'-',  
          
      },
      {
        
          sign:'*',
         
      },
      {
       
          sign:'/',
      }
      
    
    ]
  
    
 const handleChangeone = (e)=>{
     setStateone(+e.target.value);
     
   }
  
   const handleChangetwo = (e)=>{
     
    setStatetwo(+e.target.value);
     
   }
  
  const newSigns = number.map((num,index)=>{
   
   
   
   
    const btn=(i)=>{
      if(i === index){
       if(num.sign==='+'){
         
         setResult(stateone+statetwo);
       }if(num.sign==='-'){
       setResult(stateone-statetwo);
       }if(num.sign==='*'){
       setResult(stateone*statetwo);
       }if(num.sign==='/'){
       setResult(stateone/statetwo);
       }
       
      }
      
    }
    btn();
    return(
      <button  onClick={()=>btn(index)}>{num.sign}</button>
    )

  })

  
  
  
  return (
    
      <div className="App">
         <div>
      <input className="formone"   onChange={handleChangeone} value={stateone}></input>
     </div>
     <div> 
       <input className="formtwo"  onChange={handleChangetwo} value={statetwo}></input>
     </div>
     <div>
     <input className="formthree"  value={result}></input>
     </div>
     <div className="wrapper">
       {newSigns}
     </div>
     
      </div>
   
  
  );
}

export default App;
