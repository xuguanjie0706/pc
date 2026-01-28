export default {
    concept: "Structure",
    name: "KeyboardEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "altKey",
            description:
                "事件触发时 alt 键 (OS X 系统上的 Option 或 ⌥ 键) 是 (true) 否 (false) 被按下",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "code",
            description: "",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "ctrlKey",
            description: "事件触发时 control 键是 (true) 否 (false) 按下",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "isComposing",
            description:
                "该事件是否在 compositionstart 之后和 compositionend 之前被触发",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "key",
            description: "",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "metaKey",
            description:
                "指示 Meta 键是按下状态（true），还是释放状态（false）",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "repeat",
            description: "如果按键被一直按住，返回值为true",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "shiftKey",
            description: "事件触发时 shift 键是 (true) 否 (false) 按下",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
    ],
};
