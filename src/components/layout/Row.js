export default function Row(props) {
    return (
        <div style={{
            flex: props.flex,
            display: props.display,
            flexDirection: props.flexDirection,
            margin: props.margin,
            alignItems: props.alignItems
      }}>
        {props.children}
      </div>
    )
}

Row.defaultProps = {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    margin: '0px',
    alignItems: 'stretch'
}