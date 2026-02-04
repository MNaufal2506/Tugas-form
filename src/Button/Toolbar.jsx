export default function Toolbar({onClick}){
    return(
        <div onClick={onClick}>
            <button onClick={onClick}>Button 1</button>
            <button onClick={onClick}>Button 2</button>
        </div>
    )
}