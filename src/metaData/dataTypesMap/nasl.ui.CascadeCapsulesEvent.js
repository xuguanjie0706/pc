export default {
    concept: "Structure",
    name: "CascadeCapsulesEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "level",
            description: "选择的层级",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "value",
            description: "改变后的值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "oldValue",
            description: "旧的值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
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
