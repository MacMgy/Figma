import { IObject } from "./vdomObject"

export function BuildObject(obj:IObject): string {
    let str: string = "<" + obj.tag + " "

    obj.attributes.forEach(function (element) {
        str += element.name + "=\"" + element.value + "\" "
    })
    str += "/>"

    return str
}