import React from 'react'
import Form1 from './advanced-components/Form1'
export default function App() {
  const handleSubmit = () => {
    console.log('Form Submitted!')
  }
  return (
    <div className='App'>
      <Form1 onSubmit={handleSubmit}/>
    </div>
  )
}
// The Other Solution
// const handleSubmit = ({socre, comment}) => {
//   if(Number(socre) < 5 && comment.length <= 10){
//     return prompt('Please Provide a comment explaining why the experience was not good!')
//   }
//   console.log(`${socre}'Form Submitted!${comment}'`)
// }