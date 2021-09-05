import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("");
    const changeUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText)  // This is used to reassign text value in the state
        props.showalert("Converted to Uppercase","success");

    }
    const changelo =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lowercase","success");
    }
    const handleChange = (event)=>{
        setText(event.target.value) // This will handle the changes we make in our input area;
    }
    const emailExta = (text) =>{
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        
    }
    const emailExt = () =>{
        setText(emailExta(text).join('\n'));
        props.showalert("Email has been Extracted","success");
    }
    const clearText = ()=>{
        setText(" ")
        props.showalert("Text has been Cleared","success");
    }
    const handleCopy =()=>{
        var text =document.querySelector('#textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text has been Copied","success");
        
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Extra Spaces has been Adjusted","success");
    }
   
    return (
        <>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="textBox" className="form-label">Input Text</label>
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#2a2828':'white',color:props.mode==='dark'?'white':'#2a2828'}} value={text} id="textBox" onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2"  onClick={changeUp}>Change to UpperCase</button>
            <button className="btn btn-primary mx-2"  onClick={changelo}>Change to Lowercase</button>
            <button className="btn btn-primary mx-2"  onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-2"  onClick={emailExt}>Extract Email id</button>
            
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h2> Your text Summary</h2>
            <p>{text.length>0?`${text.split(' ').length} words and ${text.length} characters.`:"Enter Text"}</p>
            <p>{text.length>0?`${0.008* text.split(' ').length} minute read.`:"" }</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something in Text Box to Preview it Here"}</p>
            
            
        </div>
        </>
    )
}
Textform.propTypes = {
    heading:PropTypes.string
}
