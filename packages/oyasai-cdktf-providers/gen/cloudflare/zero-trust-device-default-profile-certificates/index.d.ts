import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceDefaultProfileCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The current status of the device policy certificate provisioning feature for WARP clients.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_certificates#enabled ZeroTrustDeviceDefaultProfileCertificates#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_certificates#zone_id ZeroTrustDeviceDefaultProfileCertificates#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_certificates cloudflare_zero_trust_device_default_profile_certificates}
*/
export declare class ZeroTrustDeviceDefaultProfileCertificates extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_default_profile_certificates";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfileCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceDefaultProfileCertificates to import
    * @param importFromId The id of the existing ZeroTrustDeviceDefaultProfileCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceDefaultProfileCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_certificates cloudflare_zero_trust_device_default_profile_certificates} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceDefaultProfileCertificatesConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceDefaultProfileCertificatesConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
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
