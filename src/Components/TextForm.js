import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
    //   console.log("Uppercase was clicked" + text);
     let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
    //   console.log("Uppercase was clicked" + text);
     let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
         let newText= '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }    
    const handleOnChange = (event) => {
      //console.log("On change");
      setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <div>
          <>
          <div className="container"  style={{color:props.mode === 'dark'?'white':'#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#042743'  }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To toLowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          </div>
          <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743' }}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} character in this box</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text to preview here...." }</p>
          </div>
          
          </>
    </div>
  )
}
