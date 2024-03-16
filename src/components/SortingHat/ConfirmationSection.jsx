import React, { useState } from 'react';

export default function ConfirmationSection({ count, inputValue, handleInputChange, handleConfirm }) {
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirmClick = () => {
        handleConfirm();
        setConfirmed(true);
    };

    return (
        <div className="py-12 md:w-1/2 lg:w-1/3 mx-auto">
            <div className="max-w-lg mx-auto px-4 ">
                <div className="bg-white p-6  rounded-lg shadow-lg items-center space-y-4">
                    <div>
                        <div className="text-5xl md:text-6xl lg:text-7xl text-center font-bold">{count} Kings</div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Number of people"
                            className="input input-bordered w-full md:w-[80%] max-w-md md:max-w-none m-4 mb-0"
                            disabled={confirmed}
                        />
                        
                    </div>
                    <div className="flex justify-center items-center ">
                            {!confirmed && (
                                <button
                                    className="btn btn-outline btn-error m-4 md:w-[80%]"
                                    onClick={handleConfirmClick}
                                >
                                    Confirm
                                </button>
                            )}
                            <div className="items-center ">
                                {confirmed && <p className="text-gray-500 m-4">Confirmed</p>}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
