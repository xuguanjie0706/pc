export default {
    concept: "Structure",
    name: "DragAndDropUpdateData",
    properties: [
        {
            concept: "StructureProperty",
            name: "sourceList",
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
            name: "targetList",
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
    ],
};
