import React, {useState} from "react";



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }

    const handleDownClick = ()=>{
        // console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("onchnage was clicked")
        setText(event.target.value)
        
    }

    // const handleCopy = ()=>{
    //     var text = document.getElementById('myBox');
    //     text.Select();
    //     navigator.clipboard.writeText(text.value);
    // }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }

    // hook
    const [text, setText] = useState("");
    // text  = "new text"    // wrong way to change the state
    // setText("new text");  // right way to change the state
  return (
      <>

    <div className="container"  style={{color: props.mode==='dark'?'white':'black', fontWeight: 'bold'}}>
        <h1>{props.heading}</h1>
        <hr/>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode==='dark'?'rgb(203 225 243)':'white'}}
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn  mx-2 " style={{background: '#46afb9', color: '#070a00fa', border: '2px solid #4a21c8', borderRadius: '21px'}} onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{background: '#46afb9', color: '#070a00fa', border: '2px solid #4a21c8', borderRadius: '21px'}} onClick={handleDownClick}>Convert to lowercase</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button> */}
      <button  disabled={text.length===0} className="btn btn-primary mx-2" style={{background: '#46afb9', color: '#070a00fa', border: '2px solid #4a21c8', borderRadius: '21px'}} onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <hr/>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>

        {/* <p>{0.008 * text.split(" ").length}  time to read</p> */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <hr/>
        <p>{text.length>0?text:'Enter something to preview'}</p>
    </div>
    </>
  );
}
