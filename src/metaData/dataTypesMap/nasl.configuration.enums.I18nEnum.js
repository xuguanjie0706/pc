export default {
    concept: "Enum",
    name: "I18nEnum",
    label: "国际化多语言枚举",
    description: "国际化多语言功能涉及的所有可选语言",
    valueType: {
        concept: "TypeAnnotation",
        typeKind: "primitive",
        typeNamespace: "nasl.core",
        typeName: "String",
    },
    enumItems: [
        {
            concept: "EnumItem",
            value: "en-US",
            name: "English",
            label: {
                concept: "StaticString",
                value: "英语",
            },
        },
        {
            concept: "EnumItem",
            value: "fr-FR",
            name: "Français",
            label: {
                concept: "StaticString",
                value: "法语",
            },
        },
        {
            concept: "EnumItem",
            value: "ko-KR",
            name: "한국어",
            label: {
                concept: "StaticString",
                value: "韩语",
            },
        },
        {
            concept: "EnumItem",
            value: "zh-CN",
            name: "中文 (简体)",
            label: {
                concept: "StaticString",
                value: "中文(简体)",
            },
        },
        {
            concept: "EnumItem",
            value: "zh-TW",
            name: "中文 (繁體)",
            label: {
                concept: "StaticString",
                value: "中文(繁体)",
            },
        },
        {
            concept: "EnumItem",
            value: "ja-JP",
            name: "日本語",
            label: {
                concept: "StaticString",
                value: "日语",
            },
        },
    ],
};
