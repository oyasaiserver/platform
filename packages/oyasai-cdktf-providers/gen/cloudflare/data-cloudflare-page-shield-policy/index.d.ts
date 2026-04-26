import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policy#policy_id DataCloudflarePageShieldPolicy#policy_id}
    */
    readonly policyId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policy#zone_id DataCloudflarePageShieldPolicy#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policy cloudflare_page_shield_policy}
*/
export declare class DataCloudflarePageShieldPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_policy";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldPolicy to import
    * @param importFromId The id of the existing DataCloudflarePageShieldPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policy cloudflare_page_shield_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePageShieldPolicyConfig);
    get action(): any;
    get description(): any;
    get enabled(): any;
    get expression(): any;
    get id(): any;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    get value(): any;
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
