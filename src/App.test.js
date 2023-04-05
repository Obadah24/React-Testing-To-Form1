import {render, fireEvent, screen} from '@testing-library/react'
import Form1 from './advanced-components/Form1'
describe('Facebook Form', () => {
  test('User is able to submit the form if the score is lower', () => {
    const score = '3'
    const comment = 'The Pizza crust was too thick '
    const handleSubmit = jest.fn()
    render(<Form1 onSubmit={handleSubmit}/>)
    const rangeInput = screen.getByTitle(/input/)
    fireEvent.change(rangeInput, {target: {value: score}})
    const textArea = screen.getByTitle(/area/)
    fireEvent.change(textArea, {target: {value: comment}})
    const submitButton = screen.getByRole('button', {
      name:'submit'
    })
    fireEvent.click(submitButton)
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    })
  })
})







































