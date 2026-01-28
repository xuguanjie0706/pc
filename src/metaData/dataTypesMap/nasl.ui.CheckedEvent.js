export default {
    concept: "Structure",
    name: "CheckedEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "checked",
            description: "选中/取消状态",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "oldChecked",
            description: "旧的选中/取消状态",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "values",
            description: "改变后每项值的数组",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "List",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "typeParam",
                        typeName: "T",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "oldValues",
            description: "旧的每项值的数组",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "List",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "typeParam",
                        typeName: "T",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "node",
            description: "选择项相关对象",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "item",
            description: "选择项相关对象",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
    ],
};
