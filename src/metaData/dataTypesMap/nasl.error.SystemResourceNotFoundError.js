export default {
    concept: "Structure",
    name: "SystemResourceNotFoundError",
    description: "资源未找到异常",
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
                    value: "nasl.error.SystemResourceNotFoundError",
                    folded: false,
                },
                playground: [],
            },
            defaultCode: {
                code: "`nasl.error.SystemResourceNotFoundError`",
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
