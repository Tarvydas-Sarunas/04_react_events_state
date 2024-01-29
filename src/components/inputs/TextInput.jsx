import { useState } from "react"

export default function TextInput() {

  const [title, setTitle] = useState('')
  const [textArea, setTextArea] = useState('')
  const [isTitleUpdated, setIsTitleUpdated] = useState(false)
  const [isFieldset, setIsFieldset] = useState(true)

  function upDateTitle(event) {
    // console.log('event ===', event);
    // console.log('upDateTitle ===', upDateTitle);
    const inputEl = event.target
    // console.log('inputEl ===', inputEl);
    const ivesta = inputEl.value
    // setTitle(ivesta)
    setTitle(event.target.value)
  }

  function makeTitle() {
    setIsTitleUpdated(!isTitleUpdated)
    // if (isTitleUpdated === true) {
    //   setIsTitleUpdated(false)
    // } else {setIsTitleUpdated(true)} 
  }

  function hideFieldset() {
    setIsFieldset(false)
  }

  function makeTextArea(event) {
    setTextArea(event.target.value)
  }

  return <div>
    <h2>{isTitleUpdated ? title : 'Main title'}</h2>
    <h2>{title}</h2>
    
    {isFieldset && (<fieldset>
      <legend>Update</legend>
      <input onChange={upDateTitle} type="text" placeholder="enter here" />
      <textarea onChange={makeTextArea} cols="30" rows="10"></textarea>
      <button onClick={hideFieldset}>Update title</button>
    </fieldset>)}

    <div>
      <h2>{title}</h2>
      <p >{textArea}</p>
    </div>
  </div>
}