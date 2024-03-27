export default function Box(props) {
    return (
        <div style={{
            flex: props.flex,
            margin: props.margin,
          }}>
            {props.children}
          </div>
    )
};

Box.defaultProps = {
    flex: 1,
    margin: '4px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    border: '4px black solid',
    borderRadius: '16px',
    boxShadow: '2px 2px 2px'
}