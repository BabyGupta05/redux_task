import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../actions';
import DataTablePage from './DataTablePage';
import { Link } from 'react-router-dom';
const AddDataPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(formData));
    setFormData({
      field1: '',
      field2: '',
      field3: '',
      field4: ''
    });
  };


  const dataList = useSelector((state) => state.dataReducer.dataList);

  return (
    <div>
      <h2>Add Data  </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
        <input type="text" name="field2" value={formData.field2} onChange={handleChange} />
        <input type="text" name="field3" value={formData.field3} onChange={handleChange} />
        <input type="text" name="field4" value={formData.field4} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <Link to="/data-table">Go to Data Table</Link>
    
     <DataTablePage/>
  
    </div>
  );
};

export default AddDataPage;
