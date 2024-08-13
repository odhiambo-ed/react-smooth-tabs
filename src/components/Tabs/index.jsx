import { useState } from "react"
import Tab from "./Tab"


function index() {
    const [activeTab, setActiveTab] = useState("introduction")

    const handleClick = (item) => {
        setActiveTab(item)
    }
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <Tab
          label={"Introduction"}
          onClick={() => handleClick("introduction")}
          isActive={activeTab === "Introduction"}
        />
        <Tab
          label="Components"
          isActive={activeTab === "components"}
          onClick={() => handleTabClick("components")}
        />
        <Tab
          label="State & Props"
          isActive={activeTab === "state-props"}
          onClick={() => handleTabClick("state-props")}
        />
        <Tab
          label="Lifecycle Methods"
          isActive={activeTab === "lifecycle-methods"}
          onClick={() => handleTabClick("lifecycle-methods")}
        />
        <Tab
          label="Hooks"
          isActive={activeTab === "hooks"}
          onClick={() => handleTabClick("hooks")}
        />
        <Tab
          label="Advanced Topics"
          isActive={activeTab === "advanced-topics"}
          onClick={() => handleTabClick("advanced-topics")}
        />
      </ul>
    </div>
  );
}



export default index