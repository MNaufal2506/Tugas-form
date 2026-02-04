import Card from '../Card/Card'
import TodoList from '../todo/TodoList'

function HelloWorld() {
  const props = {
    text: "hello dunia",
    deskripsi: "belajar react dasar"
  }
  const cardData = {
    imageUrl :"",
    title :"Card Title menggunakan spread syntax",
    desc:"ini adalah card menggunakan spread syntax",
    btn:"Klik Saya"
  }
  return (
    <>
        <HeaderHelloWorld {...props}/>
        <DescriptionHelloWorld deskripsi ="belajar react dasar" />
        <Card {...cardData} />
        <TodoList />
    </>
  )
}
export default HelloWorld


export  function HeaderHelloWorld({text = "belum di isi",...props}){
    return <h1>{text.toUpperCase()}</h1>
}
export function DescriptionHelloWorld({deskripsi = "belum di isi"}){

    return <p>{deskripsi.toLocaleLowerCase()}</p>
}

//data diri 
//coba buat contoh  props biasa ,props default parameter dan props destructuring,spread syntax