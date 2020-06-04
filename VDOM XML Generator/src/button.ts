import { IObject } from "./vdomObject"

export class Button implements IObject {
    tag: string = "BUTTON"
    attributes: {
        name: string
        value: any
    }[]

    static Create(obj): IObject {
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