import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSnippetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The identifying name of the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets#snippet_name DataCloudflareSnippets#snippet_name}
    */
    readonly snippetName: string;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets#zone_id DataCloudflareSnippets#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets cloudflare_snippets}
*/
export declare class DataCloudflareSnippets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_snippets";
    /**
    * Generates CDKTF code for importing a DataCloudflareSnippets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSnippets to import
    * @param importFromId The id of the existing DataCloudflareSnippets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSnippets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets cloudflare_snippets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSnippetsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareSnippetsConfig);
    get createdOn(): any;
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
