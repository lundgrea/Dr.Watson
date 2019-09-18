import React from 'react';
import { connect } from 'react-redux';
import './Header.css'

export const Header = ({ user, signOut }) => {
  return (
    <header>
      <h1>Dr. Watson</h1>
      {user && <button onClick={signOut}>Sign Out</button>}
    </header>
  )
}

//allows for conditional rendering of the Header
export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(Header);