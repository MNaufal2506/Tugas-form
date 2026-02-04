export default function SayHello() {
return(
    <div>
        <form>
            <input type="text" id="name-input" />
            <button onClick={(e)=>{
                e.preventDefault();
                const name = document.getElementById("name-input").value;
                document.getElementById("text_helo").innerText = `Hello ${name}`;
            }}>Say Helo</button>
        </form>
        <h1 id="text_helo">Hello world</h1>
    </div>
)

}