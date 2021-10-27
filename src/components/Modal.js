function Modal(props) {
  // Different options to handle props/event
  // 1. By using a function (cancelHandler)
  // 2. Emitting the function directly props.onConfirm()
  function cancelHandler() {
    props.onCancel()
  }

  function confirmHandler() {
    props.onConfirm()
  }

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  )
}

export default Modal
