import React from "react";

function Header() {


  return (
    <div>
    <nav className="github_nav">
        <div className="navmenu">
          <div className="repotitle">
            <a className="anchor" style={{ color: "#0366d6", fontWeight: "bold" }}>facebook /</a>
            <span style={{ margin: "0 .25em" }}></span>
            <a style={{ color: "#0366d6", fontWeight: "bold" }}>React</a>
            <div className="capsule">Public</div>
          </div>
        
          <div className="rightNav"></div>
          <div className="bottomNav">
            <div className="headerContent">Code</div> 
            <div className="headerContent">Issue</div>
            <div className="headerContent">Pull Requests</div> 
            <div className="headerContent">Actions</div>
            <div className="headerContent">Projects</div>
            <div className="headerContent">Wiki</div>
            <div className="headerContent">Security</div>
            <div className="headerContent">Insights</div>
          </div>
        </div>
      </nav>
     
    </div>
  );
}

export default Header;
