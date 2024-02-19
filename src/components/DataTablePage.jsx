import React from 'react';

import { useSelector } from 'react-redux';
const DataTablePage = () => {

  const dataList = useSelector(state => state.dataReducer.dataList)
  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
            <th>Field 3</th>
            <th>Field 4</th>
          </tr>
        </thead>
        <tbody>
          {dataList?.map((data, index) => (
            <tr key={index}>
              <td>{data.field1}</td>
              <td>{data.field2}</td>
              <td>{data.field3}</td>
              <td>{data.field4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTablePage;
