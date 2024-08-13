

function Tab({isActive, onClick, label}) {
  return (
      <li className="nav-item">
          <button className={`nav-link ${isActive ? 'active' : ''}`} onClick={onClick}>
              { label }
          </button>
    </li>
  )
}

export default Tab