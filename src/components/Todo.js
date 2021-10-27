import { useState } from 'react'

import Backdrop from './Backdrop'
import Modal from './Modal'

function Todo(props) {
  const [showModal, setShowModal] = useState(false)

  function showModalHandler() {
    setShowModal(true)
  }

  function closeModalHandler() {
    setShowModal(false)
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {/* Based on state show/hide modal with (&&) */}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
    </div>
  )
}

export default Todo
