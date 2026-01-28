export default {
    concept: "Structure",
    name: "ApiReturnOf",
    typeParams: [
        {
            concept: "TypeParam",
            name: "T",
        },
    ],
    properties: [
        {
            concept: "StructureProperty",
            name: "Data",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "typeParam",
                typeName: "T",
            },
        },
        {
            concept: "StructureProperty",
            name: "Code",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "Message",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
    ],
};
