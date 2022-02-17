import data from "./data.json"


const renderList = () => {
    console.log(data)
    return data.map((todo )=>{
       if(todo.completed) return <h1 key={todo.id} style={{color:"green"}}>{todo.title}</h1>;
        return <h1 key={todo.id} style={{color:"red"}}>{todo.title}</h1>;
    });

    
}  

 const Conditionalrendering = () => {

  return (
    <div>{renderList()}</div>
  )
}


export default Conditionalrendering