
import { useState } from "react"
import blogPosts from "./blogPosts.js"

function App() {
  const [newArticle, setNewArticle] = useState("");
const[newArticleName, setNewArticleName] = useState(blogPosts)

const gestisciSubmit = (event) => {
  event.preventDefault();
  if(newArticle.trim() !== ""){
    setNewArticleName([...newArticleName, { id: blogPosts.length + 1, titolo: newArticle }]);
  setNewArticle("");
  }
  
};

  return (
    <>
    <div className="container my">
      <form onSubmit={gestisciSubmit}>
        <label htmlFor="articleName">
          Inserisci il titolo del nuovo articolo
          <input 
          aria-label="Nuovo titolo"
          value={newArticle}
          onChange={(event)  => setNewArticle(event.target.value)}
          autoComplete="off"
          type="text"
           id="articleName"/>
          </label>
          <button type="submit">Aggiungi</button>
        </form> 
        <hr />
    <ul>
      {(newArticleName.map((curPost, index) => {
       return <li key={index}><h2>{curPost.titolo}</h2></li>
      }))}
      </ul>
      </div>
    </>
  )
}

export default App
