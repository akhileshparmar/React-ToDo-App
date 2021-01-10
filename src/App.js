import React, {useState} from 'react';
import Input from './Input'
import Note from './Note'


const App = () => {

  const [notes, newnote] = useState([]);

  const createnote = (note) => {

    newnote((prevdata) => {
      return [...prevdata, note];
    });

  };

  const onDelete = (id) => {

    newnote((prevdata) =>
    prevdata.filter((currdata, index)=>{
      return index !== id;
    })
    );

  };

  return(
    <>

    <div className="">

    <Input note={createnote}/>

    <div className="row" style={{display : 'flex', justifyContent : 'center'}}>
    

    {notes.map((val, index)=>{
      return <Note 
      key={index}
      id={index}
      val={val}
      delete={onDelete} />
    })}
    </div>

    


    </div>

    
    </>
  );
}

export default App;