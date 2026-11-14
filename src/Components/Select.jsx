import React , {useId} from 'react';

function Select({
    options,
    className = '',
    label,
    ...props
} , ref) {
    const id = useId()
    return ( 
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`w-full gap-2 bg-gray-500 border border-white/10 mt-8 rounded-xl p-3 ml-4 mr-4 hover:bg-white ${className}`}>
            {options?.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}            
            </select>
        </div>
     );
}

export default React.forwardRef(Select);