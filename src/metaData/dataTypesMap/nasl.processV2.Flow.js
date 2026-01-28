export default {
    concept: "Structure",
    name: "Flow",
    properties: [
        {
            concept: "StructureProperty",
            name: "current",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "completed",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "name",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "title",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "type",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "sourceRef",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "targetRef",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "outcomingFlows",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "List",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "primitive",
                        typeNamespace: "nasl.core",
                        typeName: "String",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "wayPoints",
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
                        typeName: "Point",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "x",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
        {
            concept: "StructureProperty",
            name: "y",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
        {
            concept: "StructureProperty",
            name: "width",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
        {
            concept: "StructureProperty",
            name: "height",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Decimal",
            },
        },
    ],
};
