export default {
    concept: "Structure",
    name: "TransferEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "source",
            description: "原数据列表",
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
            name: "target",
            description: "目标数据列表",
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
            name: "transfer",
            description: "移动的项",
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
            name: "transferValues",
            description: "移动项的值",
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
