export default {
    concept: "Structure",
    name: "FormDataPropertyPermission",
    properties: [
        {
            concept: "StructureProperty",
            name: "propertyName",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "permission",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "subFieldPermissions",
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
                        typeName: "FormDataPropertyPermission",
                    },
                ],
            },
        },
    ],
};
