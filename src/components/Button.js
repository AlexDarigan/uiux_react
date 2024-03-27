export default function Button(props) {
    return (
        <button style={{
            display: props.display,
            flexDirection: props.flexDirection,
            backgroundColor: props.backgroundColor,
            width: props.width,
            height: props.height,
            fontFamily: props.fontFamily,
            boxShadow: props.boxShadow,
            borderRadius: props.borderRadius,
            marginLeft: props.marginLeft,
            marginBottom: props.marginBottom,
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
        }}>
            {props.children}
        </button>
    )
};

Button.defaultProps = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'orange',
    width: '120px',
    height: '40px',
    fontFamily: 'roboto',
    boxShadow: '2px 2px 0',
    borderRadius: '8px',
    marginLeft: '0px',
    marginBottom: '0px',
    alignItems: 'center',
    justifyContent: 'center',
}