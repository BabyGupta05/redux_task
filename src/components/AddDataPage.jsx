import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../actions';

const AddDataPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(formData)); // Dispatch action with form data
    setFormData({
      field1: '',
      field2: '',
      field3: '',
      field4: ''
    });
  };

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
        <input type="text" name="field2" value={formData.field2} onChange={handleChange} />
        <input type="text" name="field3" value={formData.field3} onChange={handleChange} />
        <input type="text" name="field4" value={formData.field4} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDataPage;
