import Box from "./layout/Box"

export default function Panel(props) {
    return (
            <div style={{
                flex: props.flex,
                margin: props.margin,
                padding: props.padding,
                display: props.display,
                flexDirection: props.flexDirection,
                alignItems: props.alignItems,
                backgroundColor: props.backgroundColor,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
                borderStyle: props.borderStyle,
                borderRadius: props.borderRadius,
                boxShadow: props.boxShadow,
                alignSelf: props.alignSelf,
                alignContent: props.alignContent,
                overflow: props.overflow,
                overflowY: props.overflowY,
                maxHeight: props.maxHeight,
            }}>
                {props.children}
            </div>        
    )
};

Panel.defaultProps = {
    flex: 1,
    margin: '8px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'royalblue',
    borderWidth: '4px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: '16px',
    boxShadow: '2px 2px 2px',
    alignSelf: 'stretch',
    alignContent: 'flex-start',
    overflow: 'none',
    overflowY: 'none',
    maxHeight: '100%',
}