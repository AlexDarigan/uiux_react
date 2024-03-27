export default function VerticalSpacer(props) {
    return (
        <div style={{flexGrow: props.flexGrow}}/>
    )
};

VerticalSpacer.defaultProps = {
    flexGrow: '1'
}
