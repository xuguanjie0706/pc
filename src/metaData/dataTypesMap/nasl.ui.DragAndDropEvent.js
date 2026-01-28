export default {
    concept: "Structure",
    name: "DragAndDropEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "source",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "reference",
                typeNamespace: "nasl.ui",
                typeName: "SelectData",
            },
        },
        {
            concept: "StructureProperty",
            name: "target",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "reference",
                typeNamespace: "nasl.ui",
                typeName: "SelectData",
            },
        },
        {
            concept: "StructureProperty",
            name: "finalSource",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "reference",
                typeNamespace: "nasl.ui",
                typeName: "SelectData",
            },
        },
        {
            concept: "StructureProperty",
            name: "position",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "updateData",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "reference",
                typeNamespace: "nasl.ui",
                typeName: "DragAndDropUpdateData",
            },
        },
    ],
};
