import React, {useEffect} from 'react';
import ActionsList from "./actions/ActionsList";
import Context from "./context";
import Loader from './actions/Loader';
import Modal from './modal/Modal'

const AddActions = React.lazy(() => import('./actions/AddActions'))

function App() {

    // const [languages, setLanguages] = React.useState(
    // [
    //     {id: 1, titleName: 'JavaScript', titleDesc: 'js - code language', complete: false},
    //     {id: 2, titleName: 'Java', titleDesc: 'java - backend code language', complete: false},
    //     {id: 3, titleName: 'Python', titleDesc: 'python - backend code language', complete: false}
    // ])

    const [languages, setLanguages] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setLanguages(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    //     languages.map(lang => {
            // languages.concat([{
            //     id: Date.now(),
            //     titleName: lang.title,
            //     titleDesc: lang.title,
            //     complete: false
            // }
            //     ])} ) - пока не получается свалидровать модель из прешедшей в текущую, не совсем понял как это сделать

    function pushButton(id)  {
        setLanguages(
            languages.map(lang => {
        if(lang.id === id) {
             lang.complete = !lang.complete
        }
        console.log(lang.complete)
        return lang;
    })
        )
    }

    function removeLang(id) {
        setLanguages(languages.filter(lang => lang.id !== id))
    }

    function addLang(title) {
        // let description = name + ' - backend code language'
        setLanguages(languages.concat([
            {
                id: Date.now(),
                title,
                // titleName: name,
                // titleDesc: description,
                complete: false
        }
        ]))
    }

  return (
      <Context.Provider value={{ removeLang : removeLang }}>
    <div className="App">
      <header className="App-header">
          <Modal></Modal>
          <React.Suspense fallback={<p>Loading ...</p>}>
          <AddActions onCreate={addLang}/>
              </React.Suspense>
          Application for studying
      </header>
        {loading &&  <Loader/> }
        {languages.length ? <ActionsList languages={languages} onToggle={pushButton}/>:<p className='nocontent'> NO ACTIONS!</p> }
    </div>
      </Context.Provider>
  )
}

export default App;
