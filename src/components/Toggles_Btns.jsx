import React from 'react';

const Toggles_Btns = ({ toggleStatus, setToggleStatus }) => {
    const btns = ["All", "Pending", "Submitted", "Reviewed"]

    return (
        <div className='text-right mt-5 container mx-auto mb-[50px]'>
            {
                btns.map((btn, index) => {
                    return <button key={index} onClick={() => setToggleStatus(btn)} className={`toggle-btn ${index == 0 && "rounded-l-md"} ${index == btns.length - 1 && "rounded-r-md"} ${toggleStatus == btn && "!bg-purple-500 !text-white"}`}>{btn}</button>
                })
            }

            {/* another system  */}
            {/* <button onClick={() => setToggleStatus("All")} className={`toggle-btn rounded-l-md ${toggleStatus == "All" && "!bg-purple-500 !text-white"}`}>All</button>
            <button onClick={() => setToggleStatus("Pending")} className={`toggle-btn  ${toggleStatus == "Pending" && "!bg-purple-500 !text-white"}`}>Pending</button>
            <button onClick={() => setToggleStatus("Submitted")} className={`toggle-btn  ${toggleStatus == "Submitted" && "!bg-purple-500 !text-white"}`}>Submitted</button>
            <button onClick={() => setToggleStatus("Reviewed")} className={`toggle-btn rounded-r-md ${toggleStatus == "Reviewed" && "!bg-purple-500 !text-white"}`}>Reviewed</button> */}
        </div >
    );
};

export default Toggles_Btns;