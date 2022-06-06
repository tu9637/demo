import { useState } from 'react'
import Content from '../view/Content'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import style from './index.module.scss'
type Item = { label: string; key: string }
type item = { label: string; key: string; children?: item[] }
const Layout = () => {
  const [items, setItems] = useState<item[]>([
    {
      label: '菜单一',
      key: '1',
      children: [
        { label: '子菜单1-1', key: '2' },
        { label: '子菜单1-2', key: '3' }
      ]
    },
    {
      label: '菜单二',
      key: '4',
      children: [
        { label: '子菜单2-1', key: '5' },
        { label: '子菜单2-2', key: '6' }
      ]
    }
  ])
  const [menuText, setMenuText] = useState<Item>(() => items[0]?.children![0])
  const handlerClick = (res: Item) => {
    setMenuText(res)
  }
  const setMenu = (value: string) => {
    const res = [...items]
    res.forEach((item) => {
      if (item.children) {
        const result = item.children.find((i) => i.key === menuText.key)
        if (result) {
          result.label = value
        }
      }
    })
    setItems(res)
  }
  return (
    <div className={style.root}>
      <Navbar></Navbar>
      <Sidebar items={items} onClick={handlerClick}></Sidebar>
      <div className="content">
        <Content text={menuText} onClick={setMenu} ></Content>
      </div>
    </div>
  )
}

export default Layout
