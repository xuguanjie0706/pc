export default {
    concept: "Structure",
    name: "SliderEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "value",
            description: "滑块的值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "oldValue",
            description: "旧的值",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
        {
            concept: "StructureProperty",
            name: "percent",
            description: "滑块位置所在的百分比",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "Long",
            },
        },
    ],
};
