import { BuildObject } from "./xmlBuilder";
import { CreateButton } from "./button";
var TagTypes;
(function (TagTypes) {
    TagTypes["Button"] = "_button_";
    TagTypes["Text"] = "_text_";
})(TagTypes || (TagTypes = {}));
export function ParseFigmaObject(obj) {
    const type = ParseContentType(obj.name);
    switch (type) {
        case TagTypes.Button: {
            const button = CreateButton(obj);
            const xml = BuildObject(button);
            return xml;
        }
        case TagTypes.Text: {
            return "text";
        }
        default: {
            return "";
        }
    }
}
function ParseContentType(name) {
    if (name.indexOf(TagTypes.Button) >= 0) {
        return TagTypes.Button;
    }
    if (name.indexOf(TagTypes.Text) >= 0) {
        return TagTypes.Button;
    }
}
