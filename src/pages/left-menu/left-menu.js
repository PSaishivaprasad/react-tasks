import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./left-menu.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCollapse: "",
      subChildExpand: "",
    };
  }
  navItems = [
    {
      id: "Administration",
      name: "Administration",
      path: "/Administration",
      children: [
        {
          id: "superUserReports",
          name: "Super User Reports",
          path: "/superUserReportsUsers",
          subChild: [
            { id: 0, name: "Users", path: "/home" },
            { id: 1, name: "Current Users", path: "/CurrentUsers" },
            { id: 2, name: "Application Modules", path: "/ApplicationModules" },
            { id: 3, name: "Report Logs", path: "/ReportLogs" },
            {
              id: 4,
              name: "User ReportTemplates",
              path: "/UserReportTemplates",
            },
            { id: 5, name: "Report Connection", path: "/ReportConnection" },
            { id: 6, name: "Call Details Update", path: "/CallDetailsUpdate" },
          ],
        },
        {
          id: "dad",
          name: "Super Reports",
          path: "/superUserReportsUsers",
          subChild: [
            { id: 0, name: "Users", path: "/home" },
            { id: 1, name: "Current Users", path: "/CurrentUsers" },
            { id: 2, name: "Application Modules", path: "/ApplicationModules" },
            { id: 3, name: "Report Logs", path: "/ReportLogs" },
            {
              id: 4,
              name: "User ReportTemplates",
              path: "/UserReportTemplates",
            },
            { id: 5, name: "Report Connection", path: "/ReportConnection" },
            { id: 6, name: "Call Details Update", path: "/CallDetailsUpdate" },
          ],
        },
      ],
    },
    {
      id: "superUserReports",
      name: "Super User Reports",
      path: "/superUserReportsUsers",
      children: [
        { id: 0, name: "Users", path: "/Users" },
        { id: 1, name: "Current Users", path: "/CurrentUsers" },
        { id: 2, name: "Application Modules", path: "/ApplicationModules" },
        { id: 3, name: "Report Logs", path: "/ReportLogs" },
        { id: 4, name: "User ReportTemplates", path: "/UserReportTemplates" },
        { id: 5, name: "Report Connection", path: "/ReportConnection" },
        { id: 6, name: "Call Details Update", path: "/CallDetailsUpdate" },
      ],
    },
  ];

  handleExpandCollaps = (name) => {
    let prevState = this.state;
    if (this.state.activeCollapse == name) {
      prevState.activeCollapse = "";
      prevState.subChildExpand = "";
    } else {
      prevState.activeCollapse = name;
      prevState.subChildExpand = "";
    }
    this.updateState(prevState);
  };
  handleSubMenuExpandCollaps = (name) => {
    if (this.state.subChildExpand == name) {
      let prevState = this.state;
      prevState.subChildExpand = "";
      this.setState((state) => {
        state = prevState;
        return state;
      });
    } else {
      let prevState = this.state;
      prevState.subChildExpand = name;
      this.setState((state) => {
        state = prevState;
        return state;
      });
    }
  };
  updateState(prevState) {
    this.setState((state) => {
      state = prevState;
      return state;
    });
  }
  render() {
    return (
      <div>
        <div className="sidebar-main">
          <div className="router-links">
            <div className="header-router-links">
              {this.navItems.map((element) => (
                <div
                  className={`sidebar-nav-menu-item ${
                    this.state.activeCollapse === element.name
                      ? "item-active"
                      : ""
                  }`}
                >
                  <div
                    className="sidebar-nav-menu-item-head link-box link-details-box  sidebar-nav-menu-item-head-title"
                    onClick={() => this.handleExpandCollaps(element.name)}
                  >
                    {element.children ? (
                      <div className="font16 ">{element.name}</div>
                    ) : (
                      <NavLink
                        activeClassName="text-color"
                        to={element.path}
                        className="link-details-box  font16 main-header-color"
                        key={element.id}
                      >
                        {element.name}
                      </NavLink>
                    )}
                  </div>

                  {element.children ? (
                    <div className="sidebar-nav-menu-item-body">
                      {element.children.map((elem) => (
                        <div className="sub-menu">
                          {elem.subChild ? (
                            <div
                              className="link-box link-details-box  sidebar-nav-menu-item-head-title"
                              onClick={() =>
                                this.handleSubMenuExpandCollaps(elem.name)
                              }
                            >
                              <div
                                className={`link-details font14 ${
                                  this.state.subChildExpand === elem.name
                                    ? "sub-menu-color"
                                    : ""
                                }`}
                              >
                                {elem.name}
                              </div>
                            </div>
                          ) : (
                            <div>
                              <NavLink
                                activeClassName="text-color"
                                to={elem.path}
                                className="link-details font14 "
                                key={elem.id}
                              >
                                {elem.name}
                              </NavLink>
                            </div>
                          )}
                          {elem.subChild ? (
                            <div
                              className={`sub-sub-menu ${
                                this.state.subChildExpand === elem.name
                                  ? "sub-menu-display"
                                  : ""
                              }`}
                            >
                              {elem.subChild.map((e) => (
                                <div className="sub-menu">
                                  <NavLink
                                    activeClassName="text-color"
                                    to={e.path}
                                    className="link-details font12 "
                                    key={e.id}
                                  >
                                    {e.name}
                                  </NavLink>
                                </div>
                              ))}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
