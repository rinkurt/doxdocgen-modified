import { workspace } from "vscode";
// tslint:disable:max-classes-per-file
// tslint:disable:max-line-length

class C {
    public static getConfiguration() {
        return workspace.getConfiguration("doxdocgen.c");
    }

    public triggerSequence: string = "/**";
    public triggerParagraph: string = "/*-";
    public firstLine: string = "/**********************************************************************";
    public commentPrefix: string = " * ";
    public lastLine: string = " **********************************************************************/";
    public getterText: string = "Get the {name} object";
    public setterText: string = "Set the {name} object";
    public factoryMethodText: string = "Create a {name} object";
    public functionTemplate: string = "FUNCTION NAME:\n  {name}\n";
    public interfaceTemplate: string = "INTERFACE:\n  GLOBAL DATA:\n    None\n\n"+
        "  INPUT:\n    {input}\n\n  OUTPUT:\n    {output}\n\n  INPUT/OUTPUT:\n    None\n\n"+
        "RETURN CODE:\n  {type}\n";
}

class Cpp {
    public static getConfiguration() {
        return workspace.getConfiguration("doxdocgen.cpp");
    }

    public tparamTemplate: string = "@tparam {param} ";
    public ctorText: string = "Construct a new {name} object";
    public dtorText: string = "Destroy the {name} object";
}

class File {
    public static getConfiguration() {
        return workspace.getConfiguration("doxdocgen.file");
    }

    public fileTemplate: string = "FILE NAME:\n  {name}\n\nFILE DESCRIPTION:\n  \n";
    public copyrightTag: string[] = ["COPYRIGHT:",
        "  {year}",
        "  your company",
        "  All Rights Reserved",
        "",
    ];
    public versionTag: string = "@version 0.1";
    public customTag: string[] = ["CHANGE HISTORY:", ""];
    public fileOrder: string[] = ["copyright", "file", "author", "date", "custom"];
}

class Generic {
    public static getConfiguration() {
        return workspace.getConfiguration("doxdocgen.generic");
    }

    public includeTypeAtReturn: boolean = true;
    public boolReturnsTrueFalse: boolean = true;
    public briefTemplate: string = "DESCRIPTION:\n  {text}\n";
    public paramTemplate: string = "@param {param} ";
    public returnTemplate: string = "@return {type} ";
    public linesToGet: number = 20;
    public authorName: string = "your name";
    public authorEmail: string = "you@domain.com";
    public authorTag: string = "AUTHOR:\n  {author}\n";
    public dateTemplate: string = "CREATE DATE:\n  {date}\n";
    public dateFormat: string = "YYYY-MM-DD";
    public generateSmartText: boolean = true;
    public splitCasingSmartText: boolean = true;
    public order: string[] = ["function", "brief", "interface", "custom"];
    public customTags: string[] = ["NOTES:", "  ", "", "TRACE:", " "];
    public filteredKeywords: string[] = [];
    public useGitUserName: boolean = false;
    public useGitUserEmail: boolean = false;
}

export class Config {
    public static ImportFromSettings(): Config {
        const values: Config = new Config();

        values.C.triggerSequence = C.getConfiguration().get<string>("triggerSequence", values.C.triggerSequence);
        values.C.triggerParagraph = C.getConfiguration().get<string>("triggerParagraph", values.C.triggerParagraph);
        values.C.firstLine = C.getConfiguration().get<string>("firstLine", values.C.firstLine);
        values.C.commentPrefix = C.getConfiguration().get<string>("commentPrefix", values.C.commentPrefix);
        values.C.lastLine = C.getConfiguration().get<string>("lastLine", values.C.lastLine);
        values.C.getterText = C.getConfiguration().get<string>("getterText", values.C.getterText);
        values.C.setterText = C.getConfiguration().get<string>("setterText", values.C.setterText);
        values.C.factoryMethodText = C.getConfiguration().get<string>("factoryMethodText", values.C.factoryMethodText);
        values.C.functionTemplate = C.getConfiguration().get<string>("functionTemplate", values.C.functionTemplate);
        values.C.interfaceTemplate = C.getConfiguration().get<string>("interfaceTemplate", values.C.interfaceTemplate);

        values.Cpp.tparamTemplate = Cpp.getConfiguration().get<string>("tparamTemplate", values.Cpp.tparamTemplate);
        values.Cpp.ctorText = Cpp.getConfiguration().get<string>("ctorText", values.Cpp.ctorText);
        values.Cpp.dtorText = Cpp.getConfiguration().get<string>("dtorText", values.Cpp.dtorText);

        values.File.fileTemplate = File.getConfiguration().get<string>("fileTemplate", values.File.fileTemplate);
        values.File.versionTag = File.getConfiguration().get<string>("versionTag", values.File.versionTag);
        values.File.copyrightTag = File.getConfiguration().get<string[]>("copyrightTag", values.File.copyrightTag);
        values.File.customTag = File.getConfiguration().get<string[]>("customTag", values.File.customTag);
        values.File.fileOrder = File.getConfiguration().get<string[]>("fileOrder", values.File.fileOrder);

        values.Generic.includeTypeAtReturn = Generic.getConfiguration().get<boolean>("includeTypeAtReturn", values.Generic.includeTypeAtReturn);
        values.Generic.boolReturnsTrueFalse = Generic.getConfiguration().get<boolean>("boolReturnsTrueFalse", values.Generic.boolReturnsTrueFalse);
        values.Generic.briefTemplate = Generic.getConfiguration().get<string>("briefTemplate", values.Generic.briefTemplate);
        values.Generic.paramTemplate = Generic.getConfiguration().get<string>("paramTemplate", values.Generic.paramTemplate);
        values.Generic.returnTemplate = Generic.getConfiguration().get<string>("returnTemplate", values.Generic.returnTemplate);
        values.Generic.linesToGet = Generic.getConfiguration().get<number>("linesToGet", values.Generic.linesToGet);
        values.Generic.authorTag = Generic.getConfiguration().get<string>("authorTag", values.Generic.authorTag);
        values.Generic.authorName = Generic.getConfiguration().get<string>("authorName", values.Generic.authorName);
        values.Generic.authorEmail = Generic.getConfiguration().get<string>("authorEmail", values.Generic.authorEmail);
        values.Generic.dateTemplate = Generic.getConfiguration().get<string>("dateTemplate", values.Generic.dateTemplate);
        values.Generic.dateFormat = Generic.getConfiguration().get<string>("dateFormat", values.Generic.dateFormat);
        values.Generic.generateSmartText = Generic.getConfiguration().get<boolean>("generateSmartText", values.Generic.generateSmartText);
        values.Generic.splitCasingSmartText = Generic.getConfiguration().get<boolean>("splitCasingSmartText", values.Generic.splitCasingSmartText);
        values.Generic.order = Generic.getConfiguration().get<string[]>("order", values.Generic.order);
        values.Generic.customTags = Generic.getConfiguration().get<string[]>("customTags", values.Generic.customTags);
        values.Generic.filteredKeywords = Generic.getConfiguration().get<string[]>("filteredKeywords", values.Generic.filteredKeywords);
        values.Generic.useGitUserName = Generic.getConfiguration().get<boolean>("useGitUserName", values.Generic.useGitUserName);
        values.Generic.useGitUserEmail = Generic.getConfiguration().get<boolean>("useGitUserEmail", values.Generic.useGitUserEmail);

        return values;
    }

    public readonly paramTemplateReplace: string = "{param}";
    public readonly typeTemplateReplace: string = "{type}";
    public readonly nameTemplateReplace: string = "{name}";
    public readonly authorTemplateReplace: string = "{author}";
    public readonly emailTemplateReplace: string = "{email}";
    public readonly dateTemplateReplace: string = "{date}";
    public readonly yearTemplateReplace: string = "{year}";
    public readonly textTemplateReplace: string = "{text}";
    public readonly inputTemplateReplace: string = "{input}";
    public readonly outputTemplateReplace: string = "{output}";

    public C: C;
    public Cpp: Cpp;
    public File: File;
    public Generic: Generic;

    constructor() {
        this.C = new C();
        this.Cpp = new Cpp();
        this.File = new File();
        this.Generic = new Generic();
    }
}
