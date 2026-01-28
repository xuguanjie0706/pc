export default {
    concept: "Structure",
    name: "CurrentDynamic",
    typeParams: [
        {
            concept: "TypeParam",
            name: "T",
        },
        {
            concept: "TypeParam",
            name: "T1",
        },
    ],
    properties: [
        {
            concept: "StructureProperty",
            name: "item",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "typeParam",
                typeName: "T",
            },
        },
        {
            concept: "StructureProperty",
            name: "columnItem",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "typeParam",
                typeName: "T1",
            },
        },
        {
            concept: "StructureProperty",
            name: "index",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "rowIndex",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "columnIndex",
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
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
    ],
};
