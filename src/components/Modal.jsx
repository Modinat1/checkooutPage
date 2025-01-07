import React from 'react';
import { MdClose } from "react-icons/md";

const DefaultModal = ({
    visibilityState,
    closeModal,
    children,
    hideCloseIcon,
    subtitle,
    subheading
}) => {
    return (
        <div
            className={`bg-gray-600 bg-opacity-70 w-full h-screen flex items-center justify-center fixed top-0 right-0 z-50 p-5 transition ${
                visibilityState ? "scale-100" : "scale-0"
            }`}
        >
            <div className='bg-white w-full max-w-[400px] overflow-y-auto max-h-[50vh] rounded-md py-2 shadow-md flex flex-col'>
                <div className={`${subheading ? 'subheading_underline2' : ''}`}>
                <div className= "flex justify-between items-center mb-4 pt-3 px-4">
                    <h3 className='text-[#969696] font-medium text-sm'>{subtitle}</h3>
                    {!hideCloseIcon && (
                        <i className='text-xl cursor-pointer' onClick={closeModal}>
                            <MdClose color='#969696'/>
                        </i>
                    )}
                </div>
                </div>

                <div className='flex-1 overflow-y-auto pt-3 px-4'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultModal;
