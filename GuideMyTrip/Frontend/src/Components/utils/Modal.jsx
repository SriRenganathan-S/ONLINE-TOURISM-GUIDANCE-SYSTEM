import React from 'react'

function ChoiceModal({isOpen, modalDesc, modalTitle, btnText, onClose}) {
    return (
        <dialog id="explore_modal" className={`modal ${isOpen ? 'modal-open' : ''} modal modal-bottom sm:modal-middle`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">{modalTitle}</h3>
                <p className="py-4 text-justify">{modalDesc}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={onClose}>{btnText}</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ChoiceModal