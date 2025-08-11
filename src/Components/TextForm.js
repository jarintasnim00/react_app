import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
    //   console.log("Uppercase was clicked" + text);
     let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
    //   console.log("Uppercase was clicked" + text);
     let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
         let newText= '';
        setText(newText);
    }    
    const handleOnChange = (event) => {
      //console.log("On change");
      setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <div>
          <>
          <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To toLowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          </div>
          <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} character in this box</p>
            <h3>Preview</h3>
            <p>{text}</p>
          </div>
          
          </>
    </div>
  )
}
