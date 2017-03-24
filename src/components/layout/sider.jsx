import React, { PropTypes } from 'react'
import { Icon, Switch } from 'antd'
import styles from './main.less'
import { config } from '../../utils'
import Menus from './menu'

function Sider ({ siderFold, darkTheme, location, changeTheme }) {
  const menusProps = {
    siderFold,
    darkTheme,
    location,
  }

  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc} alt={config.logoText} />
        {siderFold ? '' : <span>{config.logoText}</span>}
      </div>
      <Menus {...menusProps} className={styles.siderMenu} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />Switch Theme</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="dark" unCheckedChildren="white" />
      </div> : ''}
    </div>
  )
}

Sider.propTypes = {
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func
};

export default Sider
