import PropTypes from "prop-types";

function Tab({ isActive, onClick, label }) {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
}

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired, 
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired, 
};

export default Tab;
