import { useEffect, useState } from 'react';
import '../App.css'
import '../init'
import { API,graphqlOperation } from 'aws-amplify';
import { createTask } from '../graphql/mutations';
import {listTasks} from '../graphql/queries'

function Task(){
    const [taskList,setTaskList]=useState([]);


    useEffect(()=>{
      async function loadTask (){
       const result=await API.graphql(graphqlOperation(listTasks))
       setTaskList(result.data.listTasks.items)
      }
      loadTask()
    },[])
  
    const[task,setTask]= useState({
      name: "",
      description:""
    });
  
    const handleSubmit= async(e)=>{
      e.preventDefault();
      console.log(task);
      const result= await API.graphql(graphqlOperation(createTask,{input:task}))
      console.log(result);
    }

    return (
        <>
          <form onSubmit={handleSubmit} className='lel'>
            <input type="text" name='name' placeholder='Titulo' onChange={e=>setTask({
              ...task,name:e.target.value
            } )}/>
            <textarea name="Description" id="" cols="30" rows="10" placeholder='Description' onChange={e=>setTask({
              ...task,description:e.target.value
            })}>
            </textarea>
            <button>Submit</button>
          </form>
           {taskList.map(item=>{
            return <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h4>{item.description}</h4>
                    </div>
           })}
        </>
      )
}

export default Task;