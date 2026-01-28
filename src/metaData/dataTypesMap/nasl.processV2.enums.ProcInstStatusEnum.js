export default {
    concept: "Enum",
    name: "ProcInstStatusEnum",
    label: "流程实例当前状态",
    description: "流程实例当前状态",
    valueType: {
        concept: "TypeAnnotation",
        typeKind: "primitive",
        typeNamespace: "nasl.core",
        typeName: "String",
    },
    enumItems: [
        {
            concept: "EnumItem",
            value: "Approved",
            label: {
                concept: "StaticString",
                value: "审批结束",
            },
        },
        {
            concept: "EnumItem",
            value: "Approving",
            label: {
                concept: "StaticString",
                value: "审批中",
            },
        },
        {
            concept: "EnumItem",
            value: "Suspended",
            label: {
                concept: "StaticString",
                value: "挂起",
            },
        },
    ],
};
