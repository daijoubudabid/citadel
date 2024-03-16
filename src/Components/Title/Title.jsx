/* eslint-disable react/prop-types */
import './Title.scss'

export const Title = ({subTitle, title}) => {
  return (
    <div className="title">
    <span>{subTitle}</span>
    <h2 className="mb-4">{title}</h2>
  </div>
  )
}
