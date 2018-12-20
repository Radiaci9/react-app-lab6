import React from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import C from "../constants"

class AnotherPage extends React.Component {
  constructor(props){
    super(props)
    this.props.fetchUserFollowers()
    this.props.fetchUserRepositories()
  }

  customListItem = (fields, values) => (
    <ul className="list=group mb-3" key={values[0]}>
      { fields.map((el,i) => <li key={el+values[i]} className="list-group-item">{el}: {values[i]}</li>)}
    </ul>
  )
  render() {
    const { user } = this.props
    return (
        <Row className="col-sm-11" style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Col sm={{size: 6}}>
                <h2>Followers:</h2>
                {user.followers !== null
                  ? user.followers.length !== 0
                      ? user.followers.map(el => this.customListItem(["Id", "Login"], [el.id, el.login]))
                      : <h4>Followers Not Found</h4>
                  : <img style={{margin: "0 auto", display: "block"}} src={require("../images/Ajax-loader.gif")} alt="loading"/>
                }
            </Col>
            <Col sm={{size: 6}}>
                <h2>Repositories:</h2>
                {user.repositories !== null
                  ? user.repositories.length !== 0
                      ? user.repositories.map(el => this.customListItem(["Id", "Name"], [el.id, el.name]))
                      : <h4>Repositories Not Found</h4>
                  : <img style={{margin: "0 auto", display: "block"}} src={require("../images/Ajax-loader.gif")} alt="loading"/>
                }
            </Col>
        </Row>
      )
    }
  }

const mapStateToProps = state => ({
    user: state.userInfo
})

const mapDispatchToProps = dispatch => ({
    fetchUserFollowers: () => dispatch({type: C.FETCHED_USER_FOLLOWERS}),
    fetchUserRepositories: () => dispatch({type: C.FETCHED_USER_REPOSITORIES})
})

export default connect(mapStateToProps, mapDispatchToProps)(AnotherPage)
