import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder='Enter your text here' value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery here!</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>You can read this in {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
    </div>
    </>
  )
}
