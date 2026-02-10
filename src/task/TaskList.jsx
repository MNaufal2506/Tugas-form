export default function TaskList({items = []}){

    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {items.map((item, index) => 
                     <li key={index}>{item}</li> )
                }
            </ul>
        </div>
    );
}