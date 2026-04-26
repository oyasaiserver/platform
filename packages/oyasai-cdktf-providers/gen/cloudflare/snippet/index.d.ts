import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnippetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The list of files belonging to the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#files Snippet#files}
    */
    readonly files: SnippetFiles[] | cdktf.IResolvable;
    /**
    * Provide metadata about the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#metadata Snippet#metadata}
    */
    readonly metadata: SnippetMetadata;
    /**
    * Identify the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#snippet_name Snippet#snippet_name}
    */
    readonly snippetName: string;
    /**
    * Use this field to specify the unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#zone_id Snippet#zone_id}
    */
    readonly zoneId?: string;
}
export interface SnippetFiles {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#content Snippet#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#name Snippet#name}
    */
    readonly name: string;
}
export declare function snippetFilesToTerraform(struct?: SnippetFiles | cdktf.IResolvable): any;
export declare function snippetFilesToHclTerraform(struct?: SnippetFiles | cdktf.IResolvable): any;
export declare class SnippetFilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SnippetFiles | cdktf.IResolvable | undefined;
    set internalValue(value: SnippetFiles | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class SnippetFilesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SnippetFiles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SnippetFilesOutputReference;
}
export interface SnippetMetadata {
    /**
    * Specify the name of the file that contains the main module of the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#main_module Snippet#main_module}
    */
    readonly mainModule: string;
}
export declare function snippetMetadataToTerraform(struct?: SnippetMetadata | cdktf.IResolvable): any;
export declare function snippetMetadataToHclTerraform(struct?: SnippetMetadata | cdktf.IResolvable): any;
export declare class SnippetMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SnippetMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: SnippetMetadata | cdktf.IResolvable | undefined);
    private _mainModule?;
    get mainModule(): string;
    set mainModule(value: string);
    get mainModuleInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet cloudflare_snippet}
*/
export declare class Snippet extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_snippet";
    /**
    * Generates CDKTF code for importing a Snippet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Snippet to import
    * @param importFromId The id of the existing Snippet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Snippet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet cloudflare_snippet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetConfig
    */
    constructor(scope: Construct, id: string, config: SnippetConfig);
    get createdOn(): any;
    private _files;
    get files(): SnippetFilesList;
    putFiles(value: SnippetFiles[] | cdktf.IResolvable): void;
    get filesInput(): any;
    private _metadata;
    get metadata(): SnippetMetadataOutputReference;
    putMetadata(value: SnippetMetadata): void;
    get metadataInput(): any;
    get modifiedOn(): any;
    private _snippetName?;
    get snippetName(): string;
    set snippetName(value: string);
    get snippetNameInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
