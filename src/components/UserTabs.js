import React from 'react'
import { TabContent, TabPane, Nav, NavItem,
         NavLink, Label, Input, Row, Col } from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  customNavItem = (content, id) => (
    <NavItem key={id}>
      <NavLink
        active={this.state.activeTab === id}
        onClick={() => this.toggle(id)}
      >
        {content}
      </NavLink>
    </NavItem>
  )
  customTabPane = id => (
    <TabPane key={id} tabId={id}  style={{height: "100%"}}>
      <Row style={{margin: "20px 0 20px 0"}} >
        <Col>
          <Label className="float-right" check>
            <Input type="checkbox" />{' '}
            Edit
          </Label>
        </Col>
      </Row>
      <Row  style={{height: "80%"}}>
        <Input type="textarea"/>
      </Row>
    </TabPane>
  )
  render() {
    return (
      <div style={{height: "100%"}}>
        <Nav tabs>
          {this.props.tabs.map((el,i) => this.customNavItem(el, i))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}  style={{height: "100%"}}>
          {this.props.tabs.map((el, i) => this.customTabPane(i))}
        </TabContent>
      </div>
      )
    }
  }
