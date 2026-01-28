export default {
    concept: "Structure",
    name: "LCAPUser",
    description: "System built in generic class LCAPUser",
    properties: [
        {
            concept: "StructureProperty",
            name: "userId",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
            defaultCode: {},
        },
        {
            concept: "StructureProperty",
            name: "userName",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
            defaultCode: {},
        },
        {
            concept: "StructureProperty",
            name: "displayName",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
            defaultCode: {},
        },
        {
            concept: "StructureProperty",
            name: "extensionInfos",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "Map",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "primitive",
                        typeNamespace: "nasl.core",
                        typeName: "String",
                        name: "K",
                    },
                    {
                        concept: "TypeAnnotation",
                        typeKind: "primitive",
                        typeNamespace: "nasl.core",
                        typeName: "String",
                        name: "V",
                    },
                ],
            },
            defaultCode: {},
        },
    ],
};
