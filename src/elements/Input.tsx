import Roact from "@rbxts/roact";
import RowindElement from "./RowindElement";

interface RowindProps extends Roact.PropsWithChildren<{}> {
    className?: string,
    Text?: string,
    Disabled?: boolean,
    Event?: Roact.JsxInstanceEvents<TextBox> | undefined,
    ref?: Roact.Ref<TextBox>,
    placeholder?: string
}

export default ({className = "", Text = "", Disabled, Event, ref, placeholder=""}: RowindProps) => {
    return (
        <RowindElement placeholder={placeholder} ref={ref} Disabled={Disabled} Event={Event} tagName="input" Text={Text} className={className}/>
    )
}
