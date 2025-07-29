import React from "react";
import "./Algo.css";
import { useState, useEffect } from "react";
import axios from 'axios';
export default function YourSong()
{
    const [model, setModel] = useState("");
    const [inputText, setInputText] = useState("");
    const [artists, setArtists] = useState([]);
    const [renderKey, setRenderKey] = useState(0);

    useEffect(() => {
        setRenderKey(prev => prev + 1);

  // Trigger reflow to reset animation
  const letters = document.querySelectorAll(".fade-letter");
  letters.forEach(el => {
    el.classList.remove("fade-letter"); // remove
    void el.offsetWidth; // trigger reflow
    el.classList.add("fade-letter"); // re-add
  });
}, [artists]);

    const handleSubmit = async () =>{
      if (inputText.trim() !== ""){
        try {
          const response = await axios.post("http://localhost:8000/bgepost",{
            text:inputText,
          });
          if (response.data.artists){
            setArtists(response.data.artists);
          }
          // else{
          //   setArti
          // }
        }catch(error){
                console.error("Axios error:", error);
      const errorMessage = error.response?.data?.error || error.message;
      setArtists(["Error: " + errorMessage]);

        }
      } else{
        alert("please select the correct model");
      }
    }
  
    return(
        <>
            <div className="container d-flex flex-column align-items-center mt-3 card-box" >
                <div className="row justify-content-center mb-3 w-100">
                    <div className="col-md-5  mx-2 p-4 text-center">
                    <i className="fab fa-python fa-3x icon-hover-spin"></i>
            <p style={{fontSize:'18px'}}className="my-3 text-center"> Backend developed using python </p>

                    </div>
                    <div className="col-md-5 mx-2 p-4 text-center">
                        <i className="fas fa-code fa-3x icon-hover-spin"></i>
                <p style={{fontSize:'18px'}}className="my-3 text-center"> Deployed on prefect </p>

                    </div>
                </div>
                <div className="row justify-content-center w-100 ">
                    <div className="col-md-5 mx-2 p-4 text-center">
                    <i className="fas fa-sync fa-3x fa-pulse"></i>
            <p style={{fontSize:'18px'}}className="my-3 text-center"> 
                Continuous training & evaluation
                 </p>
                   <div className="d-flex justify-content-center mt-4">
    {/* Dropdown */}
    <div className="me-3">
      <button className="custom-button " onClick={handleSubmit}>
    Search
  </button>
    </div>

    {/* Textarea */}
    <div>
      <textarea
        className="form-control dark-focus"
        rows="4"
        placeholder="Type your thoughts here..."
        style={{ width: "500px" }}
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
      ></textarea>
    </div>


  </div>
      
           



                    </div> 
                    <div className="col-md-5 mx-2 p-4 text-center">
                    <i className="fas fa-bolt fa-3x icon-hover-spin"></i>
                    <p style={{fontSize:'18px'}}className="my-3 text-center"> 
                Quick results using FAISS and HNSW </p> 
                <div className="mt-4">
                      <h1 style={{ marginLeft:'120px',fontSize: '24px', textAlign: 'Left' }}>
    Most likely artists  </h1>  
    {/* {<p style={{fontSize: '20px', marginLeft:'70px', textAlign:'Left'}}> new element </p>
    <p style={{fontSize: '20px', marginLeft:'70px', textAlign:'Left'}}> new element </p>} */}
    {artists.map((artist, index) => (
  <div key={`${renderKey}-${index}`}  style={{ marginLeft: '120px', textAlign: 'left' }}>
    {artist.split('').map((letter, i) => (
      <span
        key={i}
        className="fade-letter"
        style={{
          animation: `fadeOnly 0.4s ease forwards`,
          animationDelay: `${i * 0.1}s`,
          display: 'inline-block',
          fontSize: '20px'
        }}
      >
        {letter}
      </span>
    ))}
  </div>
))}

    
                </div>
                    </div>
                    

                </div>
               

            </div>
               

        </>
    )
}