type Props = {
  displayValue: string
}

function Display({displayValue}: Props) {
  return (
    <div className="display-container">
        <div className="display--display">{displayValue}</div>
    </div>
  )
}

export default Display