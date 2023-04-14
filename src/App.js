import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Header from "./component/header"
import FeedbackStat from "./component/FeedbackStat";
import FeedbackInput from "./component/FeedbackInput";
import FeedbackList from "./component/FeedbackList";
import {FeedbackProvider} from "./context/FeedbackContext";
import AboutIconLink from "./component/AboutIconLink";
import About from "./pages/about";

function App() {

  return (
    <FeedbackProvider>
      <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route  path = '/' element = {
            <>
              <FeedbackInput/>
              <FeedbackStat />
              <FeedbackList />
            </>
          }></Route>
          
          <Route path='/about' element = {<About />} />
        </Routes>
        
      </div>
      <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}
export default App;
