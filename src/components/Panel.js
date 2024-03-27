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
                border: props.border,
                borderRadius: props.borderRadius,
                boxShadow: props.boxShadow
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
    border: '4px black solid',
    borderRadius: '16px',
    boxShadow: '2px 2px 2px'
}