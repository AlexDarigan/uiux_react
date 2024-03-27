export default function HorizontalSpacer(props) {
    return (
        <div style={{flexGrow: props.flexGrow}}/>
    )
};

HorizontalSpacer.defaultProps = {
    flexGrow: '1'
}
