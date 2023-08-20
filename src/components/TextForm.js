import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        console.log("LowerCase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        console.log("Copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container my-4'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn-primary" onClick={handleLowClick} >Convert to LowerCase</button>
            <button className="btn-primary" onClick={handleCopy} >Copy to clipboard</button>
        </div>
        <div className="container my-4">
            <h1>Your text summary..!</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length}Minutes to read.</p>
            <h2>Preview</h2>
            <p id="preview">{text}</p>
        </div>
        </>
  )
}
