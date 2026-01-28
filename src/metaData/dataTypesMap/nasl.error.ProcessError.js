export default {
    concept: "Structure",
    name: "ProcessError",
    description: "流程异常",
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
                    value: "nasl.error.ProcessError",
                    folded: false,
                },
                playground: [],
            },
            defaultCode: {
                code: "`nasl.error.ProcessError`",
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
