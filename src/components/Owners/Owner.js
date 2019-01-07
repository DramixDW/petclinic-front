import React from "react";

export const Own = ({lastname,firstname,city,addres,telephone}) => (
    <div>
        <div className="upperligne">
            <div class="bold">Name</div><div>{firstname} {lastname} </div>
        </div>
        <div className="upperligne">
            <div class="bold">Address</div><div>{addres}</div>
        </div>
        <div className="upperligne">
            <div class="bold">City</div><div>{city}</div>
        </div>
        <div className="upperligne">
            <div class="bold">Telephone</div><div>{telephone}</div>
        </div>
    </div>

);
