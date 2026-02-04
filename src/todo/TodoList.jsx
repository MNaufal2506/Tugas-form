import Todo from "./Todo" 
export default function TodoList (){
    const data = [
        {   id: 0,
            text : "Learn HTML",
            isCompleted:true
        },
        {   id:1,
            text : "Learn React",
            isCompleted : true
        },
         {  id:2,
            text : "Learn Tailwind",
            isCompleted : true
        },
         {  id:3,
            text : "Learn Boostrap",
            isCompleted : false
        },
        
    ]
   

return (
    <ul>
       {data.map((todo)=>(
       <Todo key={todo.id} {...todo}/>
       ))}
    </ul>
)
}