export default function Column(props) {
    return (
        <div 
            style={{
                flex: props.flex,
                display: props.display, 
                flexDirection: props.flexDirection,
                alignItems: props.alignItems,
                height: props.height,
                margin: props.margin,
                alignSelf: props.alignSelf,
                overflow: props.overflow,
                overflowY: props.overflowY,
                maxHeight: props.maxHeight,
                
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
    alignSelf: 'stretch',
    overflow: 'none',
    overflowY: 'none',
    maxHeight: '100%',
}