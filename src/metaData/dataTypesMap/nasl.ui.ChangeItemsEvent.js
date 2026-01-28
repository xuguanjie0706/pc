export default {
    concept: "Structure",
    name: "ChangeItemsEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "selected",
            description: "选中还是取消",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "item",
            description: "该选中项相关对象",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "value",
            description: "所有选中项的值",
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
            name: "oldValue",
            description: "旧的值",
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
            name: "items",
            description: "所有选中项相关对象的数组",
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
            name: "oldItems",
            description: "旧的所有选中项相关对象的数组",
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
    ],
};
