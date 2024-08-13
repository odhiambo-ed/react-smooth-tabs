

export default function TabContent({isActive, children}) {
  return (
      <div className={`tab-pane fade ${isActive ? 'show active' : '' }`}>
          { children }
    </div>
  )
}
