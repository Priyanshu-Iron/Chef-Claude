import React from 'react'
import ChefIcon from "../src/assets/chef-icon.png"

const Header = () => {
  return (
    <header>
        <img src={ChefIcon} alt="ChefIcon" />
        <h1>Chef Mixtral</h1>
    </header>
  )
}

export default Header