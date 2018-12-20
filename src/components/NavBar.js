import React from "react"
import history from "../history"
import { Row, Col, Button } from "reactstrap"

export default class NavBar extends React.Component {
  render() {
    return (
        <Row className="col-sm-11" style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Col>
                <Button size="lg" color="primary" style={{marginRight: "20px"}}
                    onClick={e => history.push("/")}>Home Page</Button>
                <Button size="lg" color="primary" style={{marginRight: "20px"}}
                    onClick={e => history.push("/anotherPage")}>Page Repositories and Followers</Button>
                <Button size="lg" color="primary"
                    onClick={e => history.push("/repositoriesPage")}>Best Repositories</Button>
            </Col>
        </Row>
      )
    }
  }
