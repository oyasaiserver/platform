import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSnippetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identify the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet#snippet_name DataCloudflareSnippet#snippet_name}
    */
    readonly snippetName: string;
    /**
    * Use this field to specify the unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet#zone_id DataCloudflareSnippet#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet cloudflare_snippet}
*/
export declare class DataCloudflareSnippet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_snippet";
    /**
    * Generates CDKTF code for importing a DataCloudflareSnippet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSnippet to import
    * @param importFromId The id of the existing DataCloudflareSnippet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSnippet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet cloudflare_snippet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSnippetConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareSnippetConfig);
    get createdOn(): any;
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
