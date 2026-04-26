import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLeakedCredentialCheckRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Defines the unique ID for this custom detection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rule#detection_id DataCloudflareLeakedCredentialCheckRule#detection_id}
    */
    readonly detectionId: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rule#zone_id DataCloudflareLeakedCredentialCheckRule#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}
*/
export declare class DataCloudflareLeakedCredentialCheckRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_leaked_credential_check_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLeakedCredentialCheckRule to import
    * @param importFromId The id of the existing DataCloudflareLeakedCredentialCheckRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLeakedCredentialCheckRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLeakedCredentialCheckRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareLeakedCredentialCheckRuleConfig);
    private _detectionId?;
    get detectionId(): string;
    set detectionId(value: string);
    get detectionIdInput(): string;
    get id(): any;
    get password(): any;
    get username(): any;
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
