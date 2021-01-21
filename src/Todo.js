import react from 'react';
import db from './firebase';
import './Todo.css';
import { Button } from '@material-ui/core';
const todo = props =>{
   return  (
      <div>
         <li>{props.todo.todo}
         <Button className="button-delete" onClick={event =>{db.collection('todos').doc(props.todo.id).delete()}} variant="contained" color="secondary">
            Delete
         </Button>
         </li>
      </div>
   );
};
export default todo;