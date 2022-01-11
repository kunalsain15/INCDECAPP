import React, { useState , useEffect } from 'react';
import  "./Main.css"

const Main =()=>{
    
    const [Num , setNum] = useState(0);

    const update=()=>{
        setNum(Num + 1);
    };

    const setupdate=()=>{
        if (Num>0){
        setNum(Num - 1);
        }
        else{
           alert("OPPS");
        }
    };

        useEffect(() => {     
        document.title = `chats(${Num})`;
    } );
        return(
   <div>
    <div className="main">
     <div className="center_div"> 
      <h1>{Num}</h1>
      <div className="btn_div">
           <button onClick={update}> Increment </button>
            <button onClick={setupdate}> Decrement </button>
   </div>
   </div>
   </div>

  </div>
);

}

export default Main;



/*()=>setNum(Num + 1)
()=> Num > 0 ? setNum(Num - 1) : setNum(0)*/