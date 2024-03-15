import React, { useState } from 'react';

export default function ConfirmationSection({ count, inputValue, handleInputChange, handleConfirm }) {
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirmClick = () => {
        handleConfirm();
        setConfirmed(true);
    };

    return (
        <div className="py-12 w-[50%] h-64 ">
            <div className="w-[100%] mx-auto px-4 ">
                <div className=" items-center space-y-4">
                    <div>
                        <div className="text-[8rem] text-center font-bold">{count} King</div>
                    </div>
                    <div className='flex justify-center'>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="input input-bordered w-[500px] max-w-xs m-4"
                            disabled={confirmed}
                        />
                        <div className="items-center">
                            {!confirmed && (
                                <button
                                    className="btn btn-outline btn-error m-4"
                                    onClick={handleConfirmClick}
                                >
                                    Confirm
                                </button>
                            )}
                            {confirmed && <p className="text-gray-500">Confirmed</p>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
