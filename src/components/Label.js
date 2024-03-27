export default function Label(props) {
    return (
        <label style={{
            marginBottom: props.marginBottom,
            color: props.color,
            fontSize: props.fontSize,
            fontFamily: props.fontFamily,
            textShadow: props.textShadow,
        }}>
        <b>{props.children}</b>
        </label>
    )
}

Label.defaultProps = {
    marginBottom: '8px',
    color: 'orange',
    fontSize: '36px',
    fontFamily: 'roboto',
    textShadow: '2px 2px 0px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000'
}