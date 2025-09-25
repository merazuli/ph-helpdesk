import React from 'react';

const Card = ({ issue, setData, data }) => {
    const handleClick = () => {
        // console.log("card click");

        const clickData = data.find((elem) => elem.ticketId == issue.ticketId);

        if (clickData.status == "Pending") {
            clickData.status = "Submitted";
        } else if (clickData.status == "Submitted") {
            clickData.status = "Reviewed";
        }
        const restData = data.filter(elem => elem.ticketId !== issue.ticketId)

        console.log({ clickData, restData })
        setData([clickData, ...restData])
    }
    // console.log(issue)
    return (
        <div onClick={handleClick} className='shadow-md rounded-md cursor-pointer bg-slate-100 p-4'>
            <div>
                <img className='h-[80px] w-[80px] rounded-full' title={issue.requestedBy} src={issue.userImg} alt={issue.requestedBy} />
                <h2 className='font-semibold text-lg'>{issue.requestedBy}</h2>
            </div>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-[26px]'>{issue.subject}</h2>
                <div className=''>
                    <span className={`font-semibold py-1 px-2 mr-2 shadow rounded ${issue.priority == 'High' ? "text-red-500 bg-red-200" : issue.priority == 'Medium' ? "bg-yellow-200 text-yellow-500" : "bg-green-200  text-green-500"}`}>{issue.priority}</span>
                    <span className={`font-semibold py-1 px-2 mr-2 shadow rounded ${issue.status == 'Pending' ? "text-red-500 bg-red-200" : issue.status == 'Submitted' ? "bg-yellow-200 text-yellow-500" : "bg-green-200  text-green-500"}`}>{issue.status}</span>
                </div>
            </div>
            <p className='text-[17px] text-slate-700'>{issue.description}</p>
        </div>
    );
};

export default Card;