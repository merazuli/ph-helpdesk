import React, { use } from 'react';
import { useState } from 'react'
import Toggles_Btns from './Toggles_Btns';
import CountBox from './CountBox';
import Card from './card';


const IssueManagement = ({ fetchPromise }) => {
    const [toggleStatus, setToggleStatus] = useState("All");
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData);
    // console.log(toggleStatus)
    const filteredData = toggleStatus == "All" ? data : data.filter(element => element.status == toggleStatus);
    console.log(filteredData)
    return (
        <div className='container mx-auto'>
            <CountBox data={data}></CountBox>
            {/* toggle btn  */}
            <Toggles_Btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggles_Btns>
            {filteredData.length == 0 ? (<h1 className='font-bold text-center mt-40 text-4xl text-purple-500'>No Data Here</h1>) :
                <div className='grid grid-cols-3 gap-5'>
                    {
                        filteredData.map((issue, index) => {
                            return <Card data={data} setData={setData} key={index} issue={issue}></Card>
                        })
                    }
                </div>}
        </div>

    );
};

export default IssueManagement;