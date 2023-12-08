import React from 'react'

export default function ReactStrapCom() {
    const h1Style = {
        height: "200px",
        width: "200px",
        backgroundColor: "gray",
      };
      return (
        <div>
          <h1 className="bold">Kashyap</h1>
          <h1
            className="fw-bold"
            style={{ color: "lightgreen", backgroundColor: "gray" }}
          >
            Kashyap
          </h1>
          <h1 style={h1Style} className='text-light'>Kashyap</h1>
          <h1 className="text-primary">Inline ReactStrap COde</h1>
        </div>
      );
}
