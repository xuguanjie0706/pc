export default {
    concept: "Structure",
    name: "ProcInstInfo",
    properties: [
        {
            concept: "StructureProperty",
            name: "processDefinitionName",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "procInstId",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "procInstInitiator",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "procInstStartTime",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "DateTime",
            },
        },
        {
            concept: "StructureProperty",
            name: "procInstStatus",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "reference",
                typeNamespace: "nasl.processV2.enums",
                typeName: "ProcInstStatusEnum",
            },
        },
        {
            concept: "StructureProperty",
            name: "procInstCurrNodes",
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
                        typeName: "CurrNode",
                    },
                ],
            },
        },
        {
            concept: "StructureProperty",
            name: "procInstEndTime",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "DateTime",
            },
        },
    ],
};
