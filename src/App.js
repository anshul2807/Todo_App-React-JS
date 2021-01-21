import {useEffect, useState} from 'react';
import './App.css';
import Todo from './Todo'
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [listitem,setlistitem] = useState([]);
  const [inputs ,setinputs ] = useState('');
  

  // useEffect(function,dependecies);
  useEffect(
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setlistitem(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
    })
    ,[]);

  
  const addlist = (event) =>{
    event.preventDefault();

    db.collection('todos').add({
      todo : inputs,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // setlistitem([...listitem,inputs]);  no use 
    setinputs('');
  };

  return (
    <div className="App">
      <h1>Welcome To My ToDo App</h1>
      <form>

      <FormControl>
      <InputLabel>Your ToDo</InputLabel>
      <Input  value={inputs} type="text" onChange={event => setinputs(event.target.value) }  />
      <Button disabled={!inputs} type="submit" variant="contained" color="primary" onClick={addlist}>
       Add ToDo
      </Button>
      </FormControl>
      </form>
    
      <ul>
        {listitem.map(list =>{return <Todo todo={list} /> })}  
      </ul>
    </div>
  );
}

export default App;
