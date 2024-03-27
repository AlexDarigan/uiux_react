import Column from "./layout/Column";
import Label from "./Label";

export default function Labeled(props) {
    return (
        <Column alignItems={props.alignItems}>
            <Label>{props.label}</Label>
            {props.children}
        </Column>
    )
};

Labeled.defaultProps = {
    alignItems: 'start'
}