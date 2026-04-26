import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceIpProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#account_id ZeroTrustDeviceIpProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * An optional description of the Device IP profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#description ZeroTrustDeviceIpProfile#description}
    */
    readonly description?: string;
    /**
    * Whether the Device IP profile will be applied to matching devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#enabled ZeroTrustDeviceIpProfile#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.groups.name", "identity.groups.email", "identity.saml_attributes".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#match ZeroTrustDeviceIpProfile#match}
    */
    readonly match: string;
    /**
    * A user-friendly name for the Device IP profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#name ZeroTrustDeviceIpProfile#name}
    */
    readonly name: string;
    /**
    * The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#precedence ZeroTrustDeviceIpProfile#precedence}
    */
    readonly precedence: number;
    /**
    * The ID of the Subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#subnet_id ZeroTrustDeviceIpProfile#subnet_id}
    */
    readonly subnetId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile}
*/
export declare class ZeroTrustDeviceIpProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_ip_profile";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceIpProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceIpProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceIpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceIpProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceIpProfileConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceIpProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    private _match?;
    get match(): string;
    set match(value: string);
    get matchInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _precedence?;
    get precedence(): number;
    set precedence(value: number);
    get precedenceInput(): number;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
