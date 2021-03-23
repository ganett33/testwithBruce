import React, { Component } from "react";
import scps from "./data.json";

const foundation = scps.map(

    (scps) => {
        return(
        <div className="col-12" key={scps.item}>
            <div className="text-dark">
                <br/>
                    <div className="container">
                        <h2 className="card-title">Item#: {scps.item}</h2>
                        <p className="card-text">Object Class: {scps.oclass}</p>
                        <img className="shadow-lg" src={scps.image} alt={scps.model} />
                        <br/>
                        <h3>Special Containment Procedures: </h3>
                        <p className="card-text">{scps.scp}</p>
                        <h3>Description: </h3>
                        <p className="card-text">{scps.des}</p>
                        <h3>Reference: </h3>
                        <p className="card-text">{scps.ref}</p>
                        <h3>Add: </h3>
                        <p className="card-text">{scps.add}</p>
                    </div>
            </div>
                <br/>
        </div>
        );
    }
);


class Content extends Component
{
    render()
    {
        return(
            <div className="row">
                {foundation}
            </div>
        );
    }
}

export default Content;