import React from "react"
import LabelWithIcon from "./LabelWithIcon"

export default class UserInfo extends React.Component {
  render() {
    const { user } = this.props
    return (
      user.avatar
        ? (
          <div>
            <img src={user.avatar} style={{width: "250px", height: "250px", borderRadius: "15px"}} alt='avatar'/>
            <h2 className='nullMargin'>{user.name}</h2>
            <p className='nullMargin'>{user.login}</p>
            <p style={{width: "250px"}}>{user.bio}</p>
            <hr style={{width: "250px", marginLeft: 0}}/>
            <LabelWithIcon icon='how_to_reg' label={user.company} link={false}/>
            <LabelWithIcon icon='location_on' label={user.location} link={false}/>
            <LabelWithIcon icon='alternate_email' label={user.email} link={true}/>
            <LabelWithIcon icon='link' label={user.blog} link={true}/>
          </div>
        ) : (
          <img style={{margin: "0 auto", display: "block"}} src={require("../images/Ajax-loader.gif")} alt="loading"/>
        )
    )
  }
}
