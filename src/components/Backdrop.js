function Backdrop(props) {
  // function cancelHandler() {
  //   props.onCancel()
  // }

  return <div className='backdrop' onClick={props.onCancel} />
}

export default Backdrop
