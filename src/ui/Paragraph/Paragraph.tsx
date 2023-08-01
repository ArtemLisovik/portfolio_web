import './Paragraph.scss'

type ParagraphProps = {
    children: React.ReactNode,
    animationOff?: boolean,
    background?: 'black' | 'gray'
}
export const Paragraph = ({children, animationOff, background = 'black'}: ParagraphProps) => {
  return (
    <div className="paragraph">
         <p className="paragraph__inner">{children}</p>
        {animationOff ? null : <span style={background === 'gray' ? {background: '#191919'} : {background: 'black'}}className="object__wrapper-anim"></span>}
    </div>
   
  )
}
