export default {
    concept: "Structure",
    name: "UploadEvent",
    properties: [
        {
            concept: "StructureProperty",
            name: "item",
            description: "进度相关信息",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "reference",
                typeNamespace: "nasl.ui",
                typeName: "File",
            },
        },
        {
            concept: "StructureProperty",
            name: "data",
            description: "进度相关信息",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "file",
            description: "上传文件信息，不包含文件主体内容",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "xhr",
            description: "发送前的 XMLHttpRequest 对象",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "formData",
            description: "用于发送的数据对象",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
        {
            concept: "StructureProperty",
            name: "xml",
            description: "服务器回传信息",
            typeAnnotation: {
                concept: "TypeAnnotation",
                typeKind: "primitive",
                typeNamespace: "nasl.core",
                typeName: "String",
            },
        },
    ],
};
