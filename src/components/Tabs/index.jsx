import { useState } from "react"
import Tab from "./Tab"
import TabContent from "./TabContent"


function Tabs() {
    const [activeTab, setActiveTab] = useState("introduction")

    const handleClick = (item) => {
        setActiveTab(item)
    }
  return (
    <div className="border">
      <ul className="nav nav-tabs">
        <Tab
          label={"Introduction"}
          onClick={() => handleClick("introduction")}
          isActive={activeTab === "Introduction"}
        />
        <Tab
          label="Components"
          isActive={activeTab === "components"}
          onClick={() => handleClick("components")}
        />
        <Tab
          label="State & Props"
          isActive={activeTab === "state-props"}
          onClick={() => handleClick("state-props")}
        />
        <Tab
          label="Lifecycle Methods"
          isActive={activeTab === "lifecycle-methods"}
          onClick={() => handleClick("lifecycle-methods")}
        />
        <Tab
          label="Hooks"
          isActive={activeTab === "hooks"}
          onClick={() => handleClick("hooks")}
        />
        <Tab
          label="Advanced Topics"
          isActive={activeTab === "advanced-topics"}
          onClick={() => handleClick("advanced-topics")}
        />
      </ul>
      <div className="tab-content">
        <TabContent isActive={activeTab === "introduction"}>
          <h3>Welcome to React!</h3>
          <p>
            React is a JavaScript library for building user interfaces. It makes
            creating interactive UIs painless and efficient.
          </p>
          <p>
            Let us dive into the world of React and explore its amazing features!
          </p>
        </TabContent>
        <TabContent isActive={activeTab === "components"}>
          <h3>Components</h3>
          <p>
            Components are the building blocks of a React application. They let
            you split the UI into independent, reusable pieces.
          </p>
          <p>
            There are two types of components: Functional and Class components.
          </p>
          <ul>
            <li>
              <strong>Functional Components:</strong> These are simple
              JavaScript functions that return JSX.
            </li>
            <li>
              <strong>Class Components:</strong> These are ES6 classes that
              extend from React.Component and have a render method.
            </li>
          </ul>
        </TabContent>
        <TabContent isActive={activeTab === "state-props"}>
          <h3>State & Props</h3>
          <p>
            <strong>State:</strong> State is a built-in object that stores
            property values that belong to the component. When the state object
            changes, the component re-renders.
          </p>
          <p>
            <strong>Props:</strong> Props are short for properties. They are
            read-only attributes used to pass data from one component to
            another.
          </p>
          <p>
            Understanding state and props is crucial for managing data flow in
            your React application.
          </p>
        </TabContent>
        <TabContent isActive={activeTab === "lifecycle-methods"}>
          <h3>Lifecycle Methods</h3>
          <p>
            Lifecycle methods are special methods in class components that allow
            you to run code at specific times in the component lifecycle.
          </p>
          <ul>
            <li>
              <strong>Mounting:</strong> Methods called when an instance of a
              component is being created and inserted into the DOM.
            </li>
            <li>
              <strong>Updating:</strong> Methods called when a component is
              being re-rendered as a result of changes to either its props or
              state.
            </li>
            <li>
              <strong>Unmounting:</strong> Methods called when a component is
              being removed from the DOM.
            </li>
          </ul>
        </TabContent>
        <TabContent isActive={activeTab === "hooks"}>
          <h3>Hooks</h3>
          <p>
            Hooks are functions that let you use state and other React features
            in functional components.
          </p>
          <ul>
            <li>
              <strong>useState:</strong> Allows you to add state to functional
              components.
            </li>
            <li>
              <strong>useEffect:</strong> Lets you perform side effects in
              functional components.
            </li>
            <li>
              <strong>useContext:</strong> Allows you to use context in
              functional components.
            </li>
          </ul>
          <p>
            Hooks simplify the way you write components and make your code more
            readable and maintainable.
          </p>
        </TabContent>
        <TabContent isActive={activeTab === "advanced-topics"}>
          <h3>Advanced Topics</h3>
          <p>
            Ready to take your React skills to the next level? Here are some
            advanced topics to explore:
          </p>
          <ul>
            <li>
              <strong>Context API:</strong> A way to pass data through the
              component tree without having to pass props down manually at every
              level.
            </li>
            <li>
              <strong>Higher-Order Components (HOCs):</strong> Functions that
              take a component and return a new component.
            </li>
            <li>
              <strong>Render Props:</strong> A technique for sharing code
              between React components using a prop whose value is a function.
            </li>
            <li>
              <strong>React Router:</strong> A library for routing in React
              applications.
            </li>
          </ul>
          <p>
            These topics will help you build more complex and powerful React
            applications.
          </p>
        </TabContent>
      </div>
    </div>
  );
}



export default Tabs