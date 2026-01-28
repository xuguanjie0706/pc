export default {
    concept: "Structure",
    name: "OperatorItemEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "item",
            description: "添加的项",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "index",
            description: "添加的索引",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "data",
            description: "当前数据",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
    ],
};
