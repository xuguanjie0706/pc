export default {
    concept: "Structure",
    name: "List",
    typeParams: [
        {
            concept: "TypeParam",
            name: "T",
        },
    ],
    properties: [
        {
            concept: "StructureProperty",
            name: "length",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
    ],
};
