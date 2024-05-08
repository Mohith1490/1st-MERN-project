import React, { useEffect, useState } from "react";

function Read() {
  const [data, setData] = useState();

  async function getData() {
    const response = await fetch("http://localhost:4000/");

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  }

  const handleDelete = async (id)=>{
     const response = await fetch(`http://localhost:4000/${id}`,{
        method:"DELETE"
     })

     const result = await response.json()

     if (!response.ok) {
      console.log(result.error);
    }
    if (response.ok) {
      getData()
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      <h2 className="text-center">All data</h2>
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h5 className="mb-2 card-subtitle text-muted">{ele.email}</h5>
                <p className="card-text">{ele.age}</p>
                <a href="#" className="card-link" onClick={()=>{handleDelete(ele._id)}} >
                  Delete
                </a>
                <a href="#" className="card-link">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
