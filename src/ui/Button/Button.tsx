import './Button.scss'

type ButtonType = {
    children: React.ReactNode
}
export const Button = ({children}: ButtonType) => {
  return (
    <div className='button__main'>{children}</div>
  )
}
