export default {
    concept: "Structure",
    name: "HttpRequest",
    typeParams: [
        {
            concept: "TypeParam",
            name: "T",
        },
    ],
    properties: [
        {
            concept: "StructureProperty",
            name: "requestURL",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "remoteIp",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "requestMethod",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
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
            name: "pathParams",
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
            name: "queryParams",
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
