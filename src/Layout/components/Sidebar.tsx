import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import React, { useState } from 'react'
import style from './Sidebar.module.scss'
type item = { label: string; key: string; children?: item[] }
type SidebarProps = {
  onClick?: (res: item) => void
  items: item[]
}
export default function Sidebar({ onClick, items }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const handlerSelect = (key: string) => {
    items.forEach((item) => {
      if (item.children) {
        const res = item.children.find((i) => i.key === key)
        if (res) {
          onClick?.(res)
        }
      }
    })
  }
  return (
    <div className={style.sidebar} style={{ width: collapsed ? 80 : 256 }}>
      <div className="btnBox">
        <Button type="primary" onClick={toggleCollapsed} className="btn">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <Menu items={items} defaultSelectedKeys={['1', '2']} defaultOpenKeys={['1', '2']} mode="inline" theme="dark" inlineCollapsed={collapsed} onSelect={({ key }) => handlerSelect(key)} />
    </div>
  )
}
