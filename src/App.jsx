import './App.css'

function App() {

  //  button event way 01
  function buttonCalling01() {
      alert('Button 01')
    
  }

  //  button event way 02
  const buttonCalling02 = () => {
    alert('Button 02')
  }

  //  button event way 04
  const addTen = (num) => {
    alert(num + 10)
  }

  return (
    <div>
      <button onClick={buttonCalling01}>Button 01</button>
      <button onClick={buttonCalling02}>Button 02</button>
      <button onClick={ () => { alert('button 03') } } >Button 03</button>
      <button onClick={()=>{addTen(43)}} >Button 04</button>
    </div>
  )
}

export default App
