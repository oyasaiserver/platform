import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessKeyConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration#account_id ZeroTrustAccessKeyConfiguration#account_id}
    */
    readonly accountId: string;
    /**
    * The number of days between key rotations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration#key_rotation_interval_days ZeroTrustAccessKeyConfiguration#key_rotation_interval_days}
    */
    readonly keyRotationIntervalDays: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration cloudflare_zero_trust_access_key_configuration}
*/
export declare class ZeroTrustAccessKeyConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_key_configuration";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessKeyConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessKeyConfiguration to import
    * @param importFromId The id of the existing ZeroTrustAccessKeyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessKeyConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration cloudflare_zero_trust_access_key_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessKeyConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessKeyConfigurationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get daysUntilNextRotation(): any;
    get id(): any;
    private _keyRotationIntervalDays?;
    get keyRotationIntervalDays(): number;
    set keyRotationIntervalDays(value: number);
    get keyRotationIntervalDaysInput(): number;
    get lastKeyRotationAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
