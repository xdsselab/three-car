import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import { menu } from '../../utils'

const topMenus = menu.map(item => item.key)
const getMenus = function (menuArray, siderFold, parentPath) {
  parentPath = parentPath || '/'

  return menuArray.map((item) => {
    if (item.child) {
      return (
        <Menu.SubMenu key={item.key}
          title={<span>{item.icon ? <Icon type={item.icon} /> : ''}
            {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
          </span>}
        >
          {getMenus(item.child, siderFold, `${parentPath + item.key}/`)}
        </Menu.SubMenu>
      )
    }
    return (
      <Menu.Item key={item.key}>
        <Link to={parentPath + item.key}>
          {item.icon ? <Icon type={item.icon} /> : ''}
          {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
        </Link>
      </Menu.Item>
    )
  })
}

function Menus ({ siderFold, darkTheme, location, isNavbar, handleClickNavMenu, className }) {
  const menuItems = getMenus(menu, siderFold)

  return (
    <Menu
      className={className}
      mode={siderFold ? 'vertical' : 'inline'}
      theme={darkTheme ? 'dark' : 'light'}
      onClick={handleClickNavMenu}
      defaultOpenKeys={isNavbar ? menuItems.map(item => item.key) : []}
      defaultSelectedKeys={[location.pathname.split('/')[location.pathname.split('/').length - 1] || 'dashboard']}
    >
      {menuItems}
    </Menu>
  )
}

Menus.propTypes = {
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  isNavbar: PropTypes.bool,
  handleClickNavMenu: PropTypes.func,
  className: PropTypes.string
}

export default Menus
