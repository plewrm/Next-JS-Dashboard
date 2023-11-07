import React from 'react'

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full  border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className='text-2xl font-bold'>Rs.1009000</p>
                    <p className='text-gray-600'>Daily Revenu</p>
                </div>
                <p className='bg-green-600 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-black text-lg'>+98%</span>
                </p>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full  border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className='text-2xl font-bold'>Rs.900101000</p>
                    <p className='text-gray-600'>YTD Revenu</p>
                </div>
                <p className='bg-green-600 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-black text-lg'>+86%</span>
                </p>
            </div>
            <div className="bg-white flex justify-between w-full  border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className='text-2xl font-bold'>9181000</p>
                    <p className='text-gray-600'>Customers</p>
                </div>
                <p className='bg-green-600 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-black text-lg'>+28%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards
