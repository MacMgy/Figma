import { BuildObject } from "./xmlBuilder"
import { CreateButton } from "./button"


enum TagTypes{
    Button = '_button_',
    Text = '_text_',
}

export function ParseFigmaObject(obj): string {
    const type = ParseContentType(obj.name)
      switch(type){
        case TagTypes.Button: {
            const button = CreateButton(obj)
            const xml = BuildObject(button)
            return xml
        }
        case TagTypes.Text: {
            return "text"
        }
        default:{
            return ""
        }
      }
}

function ParseContentType(name: string): string {
    if (name.indexOf(TagTypes.Button) >= 0) {
        return TagTypes.Button
    }
    if (name.indexOf(TagTypes.Text) >= 0) {
        return TagTypes.Button
    }
}