import React, { useEffect, useState } from 'react';

function MyComponent() {
  const[data,setdata] = useState([]);
  useEffect(() => {
    fetch('https://data.covid19india.org/documentation/statedistrictwise').then(
    res => res.json()
).then(jsondata => setdata(jsondata.statewise))
  }, []); // Dependency array

  return (
    <div>
      <p>Hello, World!</p>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recoverd</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Lastupdate</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return(
              <tr>
                <td>{item.State}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Recoverd}</td>
                <td>{item.Deaths}</td>
                <td>{item.Active}</td>
                <td>{item.LastUpdate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
