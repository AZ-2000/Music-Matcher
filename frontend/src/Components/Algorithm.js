import React from "react";
import "./Algo.css";

export default function YourSong()
{
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
      <select
        className="form-select"
        style={{ width: "100px" }}
      >
        <option>Model</option>
        <option>MiniLM</option>
        <option>Big-E-small</option>
      </select>
    </div>

    {/* Textarea */}
    <div>
      <textarea
        className="form-control dark-focus"
        rows="4"
        placeholder="Type your thoughts here..."
        style={{ width: "500px" }}
      ></textarea>
    </div>
   

  </div>

           



                    </div> 
                    <div className="col-md-5 mx-2 p-4 text-center">
                    <i className="fas fa-bolt fa-3x icon-hover-spin"></i>
                    <p style={{fontSize:'18px'}}className="my-3 text-center"> 
                Quick results using FAISS and HNSW </p> 
                <div className="mt-4">
                      <h1 style={{ marginLeft:'70px',fontSize: '24px', textAlign: 'Left' }}>
    Most likely artists  </h1>  
    <p style={{fontSize: '20px', marginLeft:'70px', textAlign:'Left'}}> new element </p>
    <p style={{fontSize: '20px', marginLeft:'70px', textAlign:'Left'}}> new element </p>
    
                </div>
                    </div>
                    

                </div>
               

            </div>
               

        </>
    )
}