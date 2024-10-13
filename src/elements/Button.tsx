import Roact from "@rbxts/roact";
import RowindElement from "./RowindElement";

interface RowindProps extends Roact.PropsWithChildren<{}> {
    className?: string
    Disabled?: boolean,
    Event?: Roact.JsxInstanceEvents<TextButton> | undefined,
    Text?: string,
    ref?: Roact.Ref<TextButton>
}

export default ({className = "", Disabled, Event, Text = "", ref}: RowindProps) => {
    return (
        <RowindElement ref={ref} Disabled={Disabled} Event={Event}} Text={Text}
        tagName="button" className={className}/>
    )
}
