import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to UpperCase","success");
  }
  const handleLowClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to LowerCase","success")
  }
  const handleClearClick = ()=>{
    let newText = ' ';
    setText(newText)
    props.showAlert("text cleared","success")
    
  }
  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard","success")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces removed","success")
  }
  
  const [text, setText] = useState('');
 // text = "new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
     <h1 className="mb-2"> {props.heading} </h1>
      <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
     </div>
     <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>

     <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
     <button type="button" disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
     <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    <div className="container my-3"  style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Nothing to preview here!"}</p>
    </div>
    </>
  )
}
