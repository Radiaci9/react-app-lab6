import React from "react"
import { connect } from "react-redux"
import UserInfo from "../components/UserInfo"
import UserTabs from "../components/UserTabs"
import { Row, Col } from "reactstrap"
import C from "../constants"

class Home extends React.Component {
  constructor(props){
    super(props)
    this.props.fetchUser()
    this.props.fetchUserOrgs()
  }
  render() {
    return (
        <Row className="col-sm-11" style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Col sm={{size: 12}} md={{size: 'auto'}} hd={{size: 3}}>
                <UserInfo user={this.props.user}/>
            </Col>
            <Col sm={{size: 12}} md={{size: 8}} hd={{size: 9}} style={{margin: '0 auto 0 auto'}} >
                <UserTabs tabs={['Main', 'Education', 'Contacts']}/>
            </Col>
        </Row>
      )
    }
  }

const mapStateToProps = state => ({
    user: state.userInfo
})

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch({type: C.FETCHED_USER}),
    fetchUserOrgs: () => dispatch({type: C.FETCHED_USER_ORGS})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
