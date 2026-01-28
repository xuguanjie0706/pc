export default {
    concept: "Structure",
    name: "LCAPOperateProcessResult",
    properties: [
        {
            concept: "StructureProperty",
            name: "success",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Boolean",
            },
        },
        {
            concept: "StructureProperty",
            name: "failMessage",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "code",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
    ],
};
