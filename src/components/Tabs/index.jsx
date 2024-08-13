import { useState } from "react"
import Tab from "./Tab"


function index() {
    const [activeTab, setActiveTab] = useState(introduction)

    const handleClick = (item) => {
        setActiveTab(item)
    }
  return (
      <div className="container">
          <ul className="nav nav-tabs">
              <Tab
                  label={'Introduction'}
                  onClick={() => handleClick(introduction)}
                  isActive={activeTab === 'Introduction'}
              />
          </ul>
    </div>
  )
}



export default index