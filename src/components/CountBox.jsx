import React from 'react';

const CountBox = ({ data }) => {
    // console.log(data)
    const pendingData = data.filter(element => element.status == "Pending");
    const submittedData = data.filter(element => element.status == "Submitted");
    const reviewedData = data.filter(element => element.status == "Reviewed");
    // console.log({ pendingData, reviewedData, submittedData })
    return (
        <div className='grid grid-cols-3 gap-5 mt-20 container mx-auto'>
            <div className='rounded-md text-white h-[250px] bg-gray-600 flex flex-col justify-center items-center'>
                <h2 className='font-bold text-[35px]'>Pending</h2>
                <span className='font-bold text-[22px]'>{pendingData.length}</span>
            </div>
            <div className='rounded-md text-white h-[250px] bg-purple-600 flex flex-col justify-center items-center'>
                <h2 className='font-bold text-[35px]'>Submitted</h2>
                <span className='font-bold text-[22px]'>{submittedData.length}</span>
            </div>
            <div className='rounded-md text-white h-[250px] bg-teal-500 flex flex-col justify-center items-center'>
                <h2 className='font-bold text-[35px]'>Reviewed</h2>
                <span className='font-bold text-[22px]'>{reviewedData.length}</span>
            </div>

        </div>
    );
};

export default CountBox;