import React, { useState } from 'react'

export default function Form1({onSubmit}) {
  const style = {
    width: "800px",
    hieght: "600px",
    border: "2px solid black",
    backgroundColor:'rgb(73, 94, 87)'
  }
  const style1 = {
    backgroundColor: "wheat",
    border: "1px solid black",
    display: "block",
    width: "fit-content",
    padding: "5px 10px"
  }
  const style2 = {
    backgroundColor: "blue",
    color: "black",
    border: "1px solid black",
    display: "block",
    width: "fit-content",
    padding: "5px 10px",
  }
  const style3 = {
    width: "400px",
    height: "200px",
    padding: "5px 10px",
  }
  const [score, setSocre] = useState(10)
  const [comment, setComment] = useState('')
  const isDisable = Number(score) < 5 && comment.length <= 10
  const textAreaPlaceholder = isDisable 
  ? 'Please provide a comment explaining why the experience was not good'
  : 'Optional feddback'
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({score, comment})
  }
  return (
    <div className='App'>
    <div className='form1-component'>
      <form onSubmit={handleSubmit}>
        <fieldset style={style}>
          <h2 style={{color:'white'}}>Meta from</h2>
          <div className='field'>
            <label style={style1}>Score: {score}</label>
            {console.log(score)}
            <input 
            style={style2}
            type="range"
            title='input'
            min="0"
            max="10"
            name='socre'
            value={score}
            onChange={e => {setSocre(e.target.value)}}
            />
          </div>
          <div style={style3} className='field'>
            <label style={{marginBottom:"8px", display:"inline-block", color:'white'}} >Comment:</label>
          <textarea title='area' placeholder={textAreaPlaceholder} style={{width:"300px",minHeight:"150px", marginLeft:"8px", display:"block"}} value={comment} onChange={e => setComment(e.target.value)}/>
          </div>
          <button
          style={{display: "block", padding:"5px 10px", backgroundColor:"lightblue"}}
          type='submit'>
            submit
          </button>
        </fieldset>
      </form>
    </div>
    </div>
  )
}
// import React from 'react'
// import Form1 from './advanced-components/Form1'
// export default function App() {
//   const handleSubmit = () => {
//     console.log('Form Submitted!')
//   }
//   return (
//     <div className='App'>
//       <Form1 onSubmit={handleSubmit}/>
//     </div>
//   )
// }
// The Other Solution
// const handleSubmit = ({socre, comment}) => {
//   if(Number(socre) < 5 && comment.length <= 10){
//     return prompt('Please Provide a comment explaining why the experience was not good!')
//   }
//   console.log(`${socre}'Form Submitted!${comment}'`)
// }