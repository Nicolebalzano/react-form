
import blogPosts from "./blogPosts.js"

function App() {


  return (
    <>
    <div className="container my">
      <form action="">
        <label htmlFor="articleName">Inserisci il nome del nuovo articolo<input type="text" id="articleName"/></label>
        </form> <hr />
    <ul>
      {(blogPosts.map((curPost) => {
       return <li key={curPost.id}><h2>{curPost.titolo}</h2></li>
      }))}
      </ul>
      </div>
    </>
  )
}

export default App
