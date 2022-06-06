import { Button } from 'antd'
import { useEffect, useState } from 'react'
import style from './index.module.scss'
type ContentProps = {
  text: { label: string; key: string }
  onClick?: (value: string) => void
}
export default function Content({ text, onClick }: ContentProps) {
  const [value, setValue] = useState(text.label)
  useEffect(() => {setValue(text.label)}, [text])
  const handlerClick = () => {
    onClick?.(value)
  }
  return (
    <div className={style.root}>
      <input
        value={value}
        className="inp"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Button type="primary" className="btn" onClick={handlerClick}>
        保存
      </Button>
    </div>
  )
}
