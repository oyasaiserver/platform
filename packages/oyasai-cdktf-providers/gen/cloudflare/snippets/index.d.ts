import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnippetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The list of files belonging to the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#files Snippets#files}
    */
    readonly files: string[];
    /**
    * Metadata about the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#metadata Snippets#metadata}
    */
    readonly metadata: SnippetsMetadata;
    /**
    * The identifying name of the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#snippet_name Snippets#snippet_name}
    */
    readonly snippetName: string;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#zone_id Snippets#zone_id}
    */
    readonly zoneId: string;
}
export interface SnippetsMetadata {
    /**
    * Name of the file that contains the main module of the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#main_module Snippets#main_module}
    */
    readonly mainModule: string;
}
export declare function snippetsMetadataToTerraform(struct?: SnippetsMetadata | cdktf.IResolvable): any;
export declare function snippetsMetadataToHclTerraform(struct?: SnippetsMetadata | cdktf.IResolvable): any;
export declare class SnippetsMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SnippetsMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: SnippetsMetadata | cdktf.IResolvable | undefined);
    private _mainModule?;
    get mainModule(): string;
    set mainModule(value: string);
    get mainModuleInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets cloudflare_snippets}
*/
export declare class Snippets extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_snippets";
    /**
    * Generates CDKTF code for importing a Snippets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Snippets to import
    * @param importFromId The id of the existing Snippets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Snippets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets cloudflare_snippets} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetsConfig
    */
    constructor(scope: Construct, id: string, config: SnippetsConfig);
    get createdOn(): any;
    private _files?;
    get files(): string[];
    set files(value: string[]);
    get filesInput(): string[];
    private _metadata;
    get metadata(): SnippetsMetadataOutputReference;
    putMetadata(value: SnippetsMetadata): void;
    get metadataInput(): any;
    get modifiedOn(): any;
    private _snippetName?;
    get snippetName(): string;
    set snippetName(value: string);
    get snippetNameInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
