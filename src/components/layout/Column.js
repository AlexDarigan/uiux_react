export default function Column(props) {
    return (
        <div 
            style={{
                flex: props.flex,
                display: props.display, 
                flexDirection: props.flexDirection,
                alignItems: props.alignItems,
                height: props.height,
                margin: props.margin
                // border: '2px black solid'
      }}
    >
        {props.children}
    </div>
    )
};

Column.defaultProps = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%',
    margin: '0px',
}