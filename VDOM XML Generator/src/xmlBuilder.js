export function BuildObject(obj) {
    let str = "<" + obj.tag + " ";
    obj.attributes.forEach(function (element) {
        str += element.name + "=\"" + element.value + "\" ";
    });
    str += "/>";
    return str;
}
