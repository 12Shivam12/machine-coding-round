import React, { useEffect, useState } from 'react'

const Users = () => {

    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const result = await response.json();
        // console.log(result);
        setData(result);
        setFilteredData(result);
    }


    const handleSubmit = () => {
        if (searchInput.trim() !== '') {
            const filtered = data.filter((user) => user.name.toLowerCase().includes(searchInput.toLowerCase()));
            setFilteredData(filtered)
        } else {
            setFilteredData(data);
        }
    }

    const handleSort = (sortBy) =>{
        if(sortBy === 'name'){
            const sortedData = [...filteredData].sort((a,b) => (a.name > b.name) ? 1 : -1);
            setFilteredData(sortedData)
        }else if(sortBy === 'email'){
            const sortedData = [...filteredData].sort((a,b) => (a.email > b.email) ? 1 : -1);
            setFilteredData(sortedData)
        }else if(sortBy === 'address'){
            const sortedData = [...filteredData].sort((a,b) => (a.address.city > b.address.city) ? 1 : -1);
            setFilteredData(sortedData)
        }
    }

    return (
        <div className='w-[80%] mt-20 m-auto '>

            <div className='mb-5 flex items-center gap-2'>
                <input type="text" placeholder='Search User...' className='p-2 border border-black rounded-md ' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button className='bg-blue-600 text-white p-2 rounded-md font-medium cursor-pointer' onClick={handleSubmit}>Submit</button>
            </div>

            <table className='border border-collapse '>
                <thead className='border border-black'>
                    <tr className=''>
                        <td onClick={() => handleSort('name')} className='p-2 border border-black'>Name</td>
                        <td onClick={() => handleSort('email')} className='p-2 border border-black'>E-mail</td>
                        <td className='p-2 border border-black'>Phone</td>
                        <td onClick={() => handleSort('address')} className='p-2 border border-black'>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.length > 0 ? filteredData.map((ele, ind) => (
                            <tr key={ind} className='border border-black'>
                                <td className='p-2 border border-black'>{ele.name}</td>
                                <td className='p-2 border border-black'>{ele.email}</td>
                                <td className='p-2 border border-black'>{ele.phone}</td>
                                <td className='p-2 border border-black'>{ele.address.city}</td>
                            </tr>
                        ))
                            :
                            <tr>
                                <td colSpan="4" className='p-2 border border-black text-center'>No users found</td>
                            </tr>
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Users


// import React, { useEffect, useState } from 'react';

// const Users = () => {
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchInput, setSearchInput] = useState('');
//     const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const result = await response.json();
//         setData(result);
//         setFilteredData(result); // Initialize filteredData with all users
//     };

//     const handleSort = (key) => {
//         let direction = 'asc';
//         if (sortConfig.key === key && sortConfig.direction === 'asc') {
//             direction = 'desc';
//         }

//         const sortedData = [...filteredData].sort((a, b) => {
//             if (a[key] < b[key]) {
//                 return direction === 'asc' ? -1 : 1;
//             }
//             if (a[key] > b[key]) {
//                 return direction === 'asc' ? 1 : -1;
//             }
//             return 0;
//         });

//         setSortConfig({ key, direction });
//         setFilteredData(sortedData);
//     };

//     const handleSubmit = () => {
//         if (searchInput.trim() !== '') {
//             const filtered = data.filter((user) =>
//                 user.name.toLowerCase().includes(searchInput.toLowerCase())
//             );
//             setFilteredData(filtered);
//         } else {
//             setFilteredData(data); // If searchInput is empty, reset to show all users
//         }
//     };

//     return (
//         <div className='w-[80%] mt-20 m-auto'>
//             <div className='mb-5 flex items-center gap-2'>
//                 <input
//                     type="text"
//                     placeholder='Search User...'
//                     className='p-2 border border-black rounded-md'
//                     value={searchInput}
//                     onChange={(e) => setSearchInput(e.target.value)}
//                 />
//                 <button
//                     className='bg-blue-600 text-white p-2 rounded-md font-medium cursor-pointer'
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>

//             <table className='border border-collapse'>
//                 <thead className='border border-black'>
//                     <tr>
//                         <td className='p-2 border border-black cursor-pointer' onClick={() => handleSort('name')}>Name</td>
//                         <td className='p-2 border border-black cursor-pointer' onClick={() => handleSort('email')}>E-mail</td>
//                         <td className='p-2 border border-black cursor-pointer' onClick={() => handleSort('phone')}>Phone</td>
//                         <td className='p-2 border border-black cursor-pointer' onClick={() => handleSort('address.city')}>Address</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.length > 0 ? (
//                         filteredData.map((ele, ind) => (
//                             <tr key={ind} className='border border-black'>
//                                 <td className='p-2 border border-black'>{ele.name}</td>
//                                 <td className='p-2 border border-black'>{ele.email}</td>
//                                 <td className='p-2 border border-black'>{ele.phone}</td>
//                                 <td className='p-2 border border-black'>{ele.address.city}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4" className='p-2 border border-black text-center'>No users found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Users;
