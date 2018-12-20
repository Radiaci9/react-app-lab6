import React from "react"
import MaterialIcon from 'material-icons-react'

export default class LabelWithIcon extends React.Component {
  render() {
    const { icon, label, link } = this.props
    return (
      <div style={{display: "flex", marginTop: "5px"}}>
          <MaterialIcon icon={icon} size="22px"/>
          {
            !link
            ? <p style={{margin: "0 0 0 10px"}}>{label ? label : 'none'}</p>
            : <a style={{margin: "0 0 0 10px"}} href={label ? label : '#'}>{label ? label : 'none'}</a>
          }
      </div>
    )
  }
}
