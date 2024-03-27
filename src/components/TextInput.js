export default function TextInput(props) {
    return (
        <input type='text' style={{
            alignItems: props.alignItems,
            border: props.border,
            margin: props.margin,
            marginRight: props.marginRight,
            width: props.width,
            borderRadius: props.borderRadius,
            boxShadow: props.boxShadow
        }}></input>
    )
};

TextInput.defaultProps = {
    alignItems: 'center',
    border: '2px orange solid',
    margin: '6px',
    marginRight: '14px',
    width: '300px',
    borderRadius: '8px',
    boxShadow: '2px 2px 0px'
}