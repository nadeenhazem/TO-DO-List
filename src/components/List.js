import Task from "./Task"
function List( {onDelete,tasks,onToggel}) {
    
    return (
        <>
{tasks.map((todo, index)=>(
    <Task key={index} task={todo} onDelete={onDelete} onToggel={onToggel}/>
))}

        </>
    )
}

export default List
