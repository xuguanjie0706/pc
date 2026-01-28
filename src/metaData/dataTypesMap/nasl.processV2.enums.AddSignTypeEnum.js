export default {
    concept: "Enum",
    name: "AddSignTypeEnum",
    label: "加签类型",
    description: "流程加签类型",
    valueType: {
        concept: "TypeAnnotation",
        typeKind: "primitive",
        typeNamespace: "nasl.core",
        typeName: "String",
    },
    enumItems: [
        {
            concept: "EnumItem",
            value: "CurrentNode",
            label: {
                concept: "StaticString",
                value: "当前加签",
            },
        },
        {
            concept: "EnumItem",
            value: "PreviousNode",
            label: {
                concept: "StaticString",
                value: "前加签",
            },
        },
        {
            concept: "EnumItem",
            value: "NextNode",
            label: {
                concept: "StaticString",
                value: "后加签",
            },
        },
    ],
};
