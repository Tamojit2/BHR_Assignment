import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_CURRENCIES } from "../CONST/constant";
import '../App';
      

const PriceListing = () => {
    
    const [data, setData] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    
    useEffect(() => {
        axios.get(ALL_CURRENCIES)
          .then(response => {
            //setPosts(response.data);
            setData(response.data?.data)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    


//console.log(posts.data);

//setData(posts.data);

// if(posts.data) {
//     setData(posts.data); 
// }

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <>
    <div class="tableSort">
      <table className="sortable-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name {sortConfig.key === 'name' && <span>({sortConfig.direction})</span>}
            </th>
            <th onClick={() => handleSort('code')}>
              Code {sortConfig.key === 'code' && <span>({sortConfig.direction})</span>}
            </th>
            <th onClick={() => handleSort('currBlock')}>
            CurrBlock {sortConfig.key === 'currBlock' && <span>({sortConfig.direction})</span>}
            </th>
            <th onClick={() => handleSort('maxWithdraw')}>
            Max Withdraw {sortConfig.key === 'maxWithdraw' && <span>({sortConfig.direction})</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.currBlock}</td>
              <td>{item.maxWithdraw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
        
  )
}

export default PriceListing