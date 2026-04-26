import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_rule#pagerule_id DataCloudflarePageRule#pagerule_id}
    */
    readonly pageruleId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_rule#zone_id DataCloudflarePageRule#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_rule cloudflare_page_rule}
*/
export declare class DataCloudflarePageRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageRule to import
    * @param importFromId The id of the existing DataCloudflarePageRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_rule cloudflare_page_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePageRuleConfig);
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _pageruleId?;
    get pageruleId(): string;
    set pageruleId(value: string);
    get pageruleIdInput(): string;
    get priority(): any;
    get status(): any;
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
