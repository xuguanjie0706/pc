export default {
    concept: "Structure",
    name: "ExpandEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "item",
            description: "展开项相关对象",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "expanded",
            description: "展开状态值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
    ],
};
