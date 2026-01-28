export default {
    concept: "Structure",
    name: "AuthUnAuthorizedError",
    description: "未授权异常",
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
                    value: "nasl.error.AuthUnAuthorizedError",
                    folded: false,
                },
                playground: [],
            },
            defaultCode: {
                code: "`nasl.error.AuthUnAuthorizedError`",
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
    ],
};
