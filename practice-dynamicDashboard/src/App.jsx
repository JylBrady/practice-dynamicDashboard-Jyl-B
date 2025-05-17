
import './App.css'
import Greeting from './components/Greeting'
import ConditionalPremium from './components/ConditionalPremium'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <>
      <div>
        <Greeting />
        <ConditionalPremium />
        <h3>...Your Tasks...</h3>
        <div className = "toDoList">
          <ToDoList />  
        </div>
      </div>
    </>
  )
}

export default App
