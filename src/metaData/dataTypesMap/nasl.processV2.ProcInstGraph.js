export default {
    concept: "Structure",
    name: "ProcInstGraph",
    properties: [
        {
            concept: "StructureProperty",
            name: "procInstId",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "elements",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "List",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "reference",
                        typeNamespace: "nasl.processV2",
                        typeName: "Element",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "flows",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "List",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "reference",
                        typeNamespace: "nasl.processV2",
                        typeName: "Flow",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "diagramBeginX",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
        {
            concept: "StructureProperty",
            name: "diagramBeginY",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
        {
            concept: "StructureProperty",
            name: "diagramWidth",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
        {
            concept: "StructureProperty",
            name: "diagramHeight",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
    ],
};
