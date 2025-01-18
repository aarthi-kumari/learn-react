import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = ' ';
    setText(newText)
  }
  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  const [text, setText] = useState('');
 // text = "new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
     <h1 > {props.heading} </h1>
      <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
     </div>
     <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>

     <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
     <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
     <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    <div className="container my-3"  style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
