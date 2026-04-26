import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet#account_id ZeroTrustDeviceSubnet#account_id}
    */
    readonly accountId?: string;
    /**
    * An optional description of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet#comment ZeroTrustDeviceSubnet#comment}
    */
    readonly comment?: string;
    /**
    * If `true`, this is the default subnet for the account. There can only be one default subnet per account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet#is_default_network ZeroTrustDeviceSubnet#is_default_network}
    */
    readonly isDefaultNetwork?: boolean | cdktf.IResolvable;
    /**
    * A user-friendly name for the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet#name ZeroTrustDeviceSubnet#name}
    */
    readonly name: string;
    /**
    * The private IPv4 or IPv6 range defining the subnet, in CIDR notation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet#network ZeroTrustDeviceSubnet#network}
    */
    readonly network: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet cloudflare_zero_trust_device_subnet}
*/
export declare class ZeroTrustDeviceSubnet extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_subnet";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceSubnet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceSubnet to import
    * @param importFromId The id of the existing ZeroTrustDeviceSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceSubnet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_subnet cloudflare_zero_trust_device_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceSubnetConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceSubnetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get createdAt(): any;
    get deletedAt(): any;
    get id(): any;
    private _isDefaultNetwork?;
    get isDefaultNetwork(): boolean | cdktf.IResolvable;
    set isDefaultNetwork(value: boolean | cdktf.IResolvable);
    resetIsDefaultNetwork(): void;
    get isDefaultNetworkInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _network?;
    get network(): string;
    set network(value: string);
    get networkInput(): string;
    get subnetType(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
