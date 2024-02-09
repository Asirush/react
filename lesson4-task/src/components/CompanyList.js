import React from "react";
import CompanyCard from "./CompanyCard";

export default function CompanyList(props) {
    return (
        <div>
            {props.data.map((data, index) => (
                <CompanyCard key={index} data={data} />
            ))}
        </div>
    );
}
