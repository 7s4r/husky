import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='mdl-layout__header' role='banner'>
        <div className='mdl-layout__drawer-button'>
          <i className='material-icons'>menu</i>
        </div>
      </header>
    )
  }
}

