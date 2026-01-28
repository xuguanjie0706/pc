export default {
    concept: "Structure",
    name: "HttpResponse",
    typeParams: [
        {
            concept: "TypeParam",
            name: "T",
        },
    ],
    properties: [
        {
            concept: "StructureProperty",
            name: "status",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Integer",
            },
        },
        {
            concept: "StructureProperty",
            name: "body",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "typeParam",
                typeName: "T",
            },
        },
        {
            concept: "StructureProperty",
            name: "headers",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "Map",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "primitive",
                        typeNamespace: "nasl.core",
                        typeName: "String",
                    },
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
            name: "cookies",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "generic",
                typeNamespace: "nasl.collection",
                typeName: "Map",
                typeArguments: [
                    {
                        concept: "TypeAnnotation",
                        typeKind: "primitive",
                        typeNamespace: "nasl.core",
                        typeName: "String",
                    },
                    {
                        concept: "TypeAnnotation",
                        typeKind: "reference",
                        typeNamespace: "nasl.http",
                        typeName: "HttpCookie",
                    },
                ],
            },
        },
    ],
};
