export default {
    concept: "Structure",
    name: "DateEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "date",
            description: "日期值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Date",
            },
        },
        {
            concept: "StructureProperty",
            name: "time",
            description: "日期值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Date",
            },
        },
    ],
};
