import PropTypes from 'prop-types'

export default function TabContent({isActive, children}) {
  return (
      <div className={`tab-pane fade ${isActive ? 'show active' : '' }`}>
          { children }
    </div>
  )
}

TabContent.propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
