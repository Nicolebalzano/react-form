
import blogPosts from "./blogPosts.js"

function App() {


  return (
    <>
    <div className="container my">
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
