import React, {useState} from 'react'

export default function List(props) {
    const [items, setItems] = useState([]);
    const result = items.map((item, index) => (
    <tr key={index}>
      <td>{item}</td>
    </tr>
));

    const addItem = () => {
        const newItem = document.getElementById('exampleFormControlTextarea1').value;
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            document.getElementById('exampleFormControlTextarea1').value = '';
        }
    }
    const clearItems = () => {
        setItems([]);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        addItem();
    }
    const handleClearAll = (e) => {
        e.preventDefault();
        clearItems();
    }
  return (
    <div>    
<div className="container mb-3">
  <div className="text-center mb-3">
   <div className="justify-content-center">
    <div className="row">
     <h2>{props.title}</h2>
     <label htmlFor="exampleFormControlTextarea1" className="form-label font-weight-bold">Enter your tasks here</label>
     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
   </div>
  </div>
</div>
<div className="container text-center">
  <button onClick={handleAddTask} type="button" className="btn btn-success mx-3">Add Task</button>
  <button onClick={handleClearAll} type="button" className="btn btn-success">Clear All</button>
</div>
<div className="container mt-3">
  <table className="table table-bordered text-center">
    <thead className="table-dark justify-content-center">
      <tr>
        <th>Task</th>
      </tr>
    </thead>
    <tbody>
      {result}
    </tbody>
  </table>
</div>

    </div>
  )
}