export default {
    concept: "Structure",
    name: "SystemInternalError",
    description: "系统内部异常",
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
                    value: "nasl.error.SystemInternalError",
                    folded: false,
                },
                playground: [],
            },
            defaultCode: {
                code: "`nasl.error.SystemInternalError`",
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
