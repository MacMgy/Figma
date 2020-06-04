class Button {
    constructor() {
        this.tag = "BUTTON";
    }
}
export function CreateButton(obj) {
    const inst = new Button();
    inst.attributes = [{
            name: "height",
            value: obj.height,
        }, {
            name: "width",
            value: obj.width,
        },];
    return inst;
}
