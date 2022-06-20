// Attributes on React component elements are accessible
// as 'props' – an object where the property names match the attribute names
const Button = (props) => {
  console.log(props)

  return (
    <button className={props.isFancy ? 'fancy-button' : 'regular-button'}>
      {props.text}
    </button>
  )
}

export default Button
