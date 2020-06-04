export abstract class IObject {
    tag: string
    attributes: {
        name: string
        value: any
    }[]

    static Create(obj): IObject {
        return
    }
}