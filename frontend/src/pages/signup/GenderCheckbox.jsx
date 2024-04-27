import React from 'react';

function GenderCheckbox({ oncheckboxChnge, selectedGender}) {
  return (
    <div className='flex'> 
        <div className="form-control">
        <label className="cursor-pointer label flex gap-2 `${selectedGender}">
            <span className="label-text text-white">Male</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-info" 
            checked = {selectedGender === "male"}
            onChange={()=> oncheckboxChnge("male")} 
            />
        </label>
        </div>

        <div className="form-control">
        <label className="cursor-pointer label flex gap-2">
            <span className="label-text text-white">Female</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-info"  
            checked = {selectedGender === "female"}
            onChange={()=> oncheckboxChnge("female")} 
            />
        </label>
        </div>
        
    </div>
  );
}

export default GenderCheckbox;
