import React from "react"
import { connect } from "react-redux"
import { Row, Col, Input, Button, Label } from "reactstrap"
import C from "../constants"

class RepositoriesPage extends React.Component {
  customListItem = (fields, values) => (
    <ul className="list=group mb-3" key={values[0]}>
      { fields.map((el,i) => <li key={el+values[i]} className="list-group-item">{el}: {values[i]}</li>)}
    </ul>
  )
  render() {
    const { searchResult } = this.props
    return (
        <Row className="col-sm-11" style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Row className="col-sm-11">
                <Col sm={{size: 6}}>
                    <Input id="searchCriteria"/>
                </Col>
                <Col sm={{size: 'auto'}}>
                  <Label className="float-right" style={{fontSize: "20px"}} check>
                    <Input id="local" type="checkbox" />{' '}
                    Local
                  </Label>
                </Col>
                <Col sm={{size: 'auto'}} style={{margin: 0}}>
                    <Button className="float-right" color="primary"
                        onClick={e => this.props.fetchUserRepositoriesByCriteria(
                                      document.getElementById('searchCriteria').value,
                                      document.getElementById('local').checked
                        )}>Find</Button>
                </Col>
                <Col sm={{size: 'auto'}} style={{margin: 0}}>
                    <Button className="float-right" color="primary"
                        onClick={e => this.props.fetchUserRepositoriesByCriteriaBest()}>The best Five</Button>
                </Col>
                <Col sm={{size: 'auto'}} style={{margin: 0}}>
                    <Button className="float-right" color="primary"
                        onClick={e => this.props.fetchUserRepositoriesByCriteriaBestFastGrowing()}>The best Fast growing</Button>
                </Col>
            </Row>
            <br/>
            <br/>
                <br/>
                <br/>
            <Col sm={{size: 8}} >
            {!searchResult.error && searchResult.repositories.length !== 0
                  ? (<div>
                      <h2>Repositories:</h2>
                      {searchResult.repositories.map(el => this.customListItem(["Id", "Name"], [el.id, el.name]))}
                    </div>
                  ) : <h4>Repositories Not Found</h4>
            }
            </Col>
        </Row>
      )
    }
  }

const mapStateToProps = state => ({
    searchResult: state.resSearch
})

const mapDispatchToProps = dispatch => ({
    fetchUserRepositoriesByCriteria: (name, type) => dispatch({type: C.FETCHED_USER_REPOSITORIES_BY_CRITERIA, payload: {name, type}}),
    fetchUserRepositoriesByCriteriaBest: () => dispatch({type: C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST}),
    fetchUserRepositoriesByCriteriaBestFastGrowing: () => dispatch({type: C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST_FAST_GROWING})
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesPage)
