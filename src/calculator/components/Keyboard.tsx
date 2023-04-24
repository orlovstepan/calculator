
type Props = {
onDisplay: (value: string, className: string) => void
}

function Keyboard({onDisplay}: Props) {
  const onClick = (e: any) => {
    if (e.target.innerText.length <= 2) {
      onDisplay(e.target.innerText, e.target.classList[1])
    }
  }
  return (
    <div className="keyboard-container" onClick={onClick}>
        <div className="item parentheses">(</div>
        <div className="item parentheses">)</div>
        <div className="item operator">%</div>
        <div className="item operator">AC</div>
        <div className="item number">7</div>
        <div className="item number">8</div>
        <div className="item number">9</div>
        <div className="item operator">/</div>
        <div className="item number">4</div>
        <div className="item number">5</div>
        <div className="item number">6</div>
        <div className="item operator">*</div>
        <div className="item number">1</div>
        <div className="item number">2</div>
        <div className="item number">3</div>
        <div className="item operator">-</div>
        <div className="item number">0</div>
        <div className="item operator">.</div>
        <div className="item operator">=</div>
        <div className="item operator">+</div>
    </div>
  )
}

export default Keyboard