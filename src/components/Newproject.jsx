import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';
function Newproject({onAdd,onCancel}) {
    const modal = useRef();
    const title= useRef();
    const description= useRef();
    const duedate= useRef();
    function handleSave(){
        const enteredtitle = title.current.value;
        const entereddescription = description.current.value;
        const enteredduedate = duedate.current.value;
        console.log(enteredtitle)
        if(enteredtitle.trim() ==='' || entereddescription.trim()==='' || enteredduedate.trim()===''){
            modal.current.open();
            return;
        }

        onAdd({
            title : enteredtitle,
            description  : entereddescription,
            duedate :enteredduedate
        });
    }
  return (
    <>
    <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2> 
        <p className="text-xl font-bold text-stone-500 my-4">Please make sure you provide a valid value for every input field present</p>
        </Modal>
    <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button onClick={onCancel} className="text-stone-800 hover:text-stone-950"> Cancel</button>
            </li>
            <li>
                <button 
                onClick={handleSave}
                className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-sm">Save</button>
            </li>
        </menu>
        <div>
           <Input ref={title}label="Title" />
           <Input ref={description} label="Description" textarea />
            <Input type="date" ref={duedate} label="Due Date" />
        </div>
    </div>
    </>
  )
}

export default Newproject