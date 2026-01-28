export default {
    concept: "Structure",
    name: "Map",
    typeParams: [
        {
            concept: "TypeParam",
            name: "K",
        },
        {
            concept: "TypeParam",
            name: "V",
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
