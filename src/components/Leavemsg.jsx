import React from 'react';
import Button from './Button';
function LeaveMsg(){
    return(
        <div className='flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto mt-10'>
            <h1 className='text-2xl font-semibold text-left'>Leave Me A Message</h1>
            <div className='flex flex-col gap-4 sm:flex-row'>
                <input placeholder="Name" type='text' className='w-full border border-gray-300 p-2'/>
                <input placeholder="Email" type='text' className='w-full border border-gray-300 p-2'/>
            </div>
            <textarea rows={7} placeholder="Message" className='border border-gray-300 p-2'/>
            <Button text={'Send Message'}/>
                
        </div>
    );
}

export default LeaveMsg;