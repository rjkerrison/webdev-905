const List = (props) => {
  return (
    <ul>
      {props.listItems.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default List
