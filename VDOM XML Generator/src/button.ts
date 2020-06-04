import { IObject } from "./vdomObject"

class Button implements IObject {
    tag: string = "BUTTON"
    attributes: {
        name: string
        value: any
    }[]
}

export function CreateButton(obj): IObject {
    const inst: Button = new Button()
    inst.attributes = [{
        name: "height",
        value: obj.height,
    },{
        name: "width",
        value: obj.width,
    },]
    return inst
}