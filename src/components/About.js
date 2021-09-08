import React from 'react'

export default function About(props) {
    let myStyle ={
       
        backgroundColor:props.mode==='dark'?'#2a2828':'white',
        color:props.mode==='dark'?'white':'#2a2828',
        
    }
    
    

    
    return (
        
        <>
        <div className="container" style={myStyle}>
            <h1 className="my-3 mx-2" style={{color:props.mode==='dark'?'white':'#2a2828'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                 <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong><i>Analyze your Text</i></strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                   Play-W-Text gives you a way to analyze your text quickly and efficiently. Be it word count, character count, extracting email etc.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong><i>Free to use</i></strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Play-W-Text is a free character counter tool which provides basic analysis of your text. And also helps you to perform certain operations.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong><i>Browser Compatible</i></strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                It is responsive in nature, thus can be used on any device be it mobile,laptop,tablet etc and also seemlessly work irrespective of browser you use.
            </div>
            </div>
        </div>
        </div>
        
        </div>
        </>
    )
}
