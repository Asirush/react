import React from "react";

export default function CompanyCard(props) {
    return (
        <div className="Company">
            <h3>Name: {props.data.name}</h3>
            <p>Type: {props.data.type}</p>
            <p>Distance: {props.data.distance}</p>
            <p>Reliability: {props.data.reliability}</p>
        </div>
    );
}
