export default {
    concept: "Structure",
    name: "InterfaceError",
    description: "接口异常",
    properties: [
        {
            concept: "StructureProperty",
            name: "errorType",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
            defaultValue: {
                concept: "DefaultValue",
                expression: {
                    concept: "StringLiteral",
                    value: "nasl.error.InterfaceError",
                    folded: false,
                },
                playground: [],
            },
            defaultCode: {
                code: "`nasl.error.InterfaceError`",
                executeCode: true,
            },
        },
        {
            concept: "StructureProperty",
            name: "errorMsg",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "responseBody",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "statusCode",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
    ],
};
