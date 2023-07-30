import './Paragraph.scss'

type ParagraphProps = {
    children: React.ReactNode,
    animationOff?: boolean
}
export const Paragraph = ({children, animationOff}: ParagraphProps) => {
  return (
    <div className="paragraph">
         <p className="paragraph__inner">{children}</p>
        {animationOff ? null : <span className="object__wrapper-anim"></span>}
    </div>
   
  )
}
