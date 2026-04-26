import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustAccessTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_tag#account_id DataCloudflareZeroTrustAccessTag#account_id}
    */
    readonly accountId?: string;
    /**
    * The name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_tag#tag_name DataCloudflareZeroTrustAccessTag#tag_name}
    */
    readonly tagName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_tag cloudflare_zero_trust_access_tag}
*/
export declare class DataCloudflareZeroTrustAccessTag extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_tag";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessTag to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_tag cloudflare_zero_trust_access_tag} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessTagConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessTagConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    get name(): any;
    private _tagName?;
    get tagName(): string;
    set tagName(value: string);
    get tagNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
