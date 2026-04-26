import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceManagedNetworksConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}
    */
    readonly accountId?: string;
    /**
    * The configuration object containing information for the WARP client to detect the managed network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#config ZeroTrustDeviceManagedNetworks#config}
    */
    readonly config: ZeroTrustDeviceManagedNetworksConfigA;
    /**
    * The name of the device managed network. This name must be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#name ZeroTrustDeviceManagedNetworks#name}
    */
    readonly name: string;
    /**
    * The type of device managed network.
    * Available values: "tls".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#type ZeroTrustDeviceManagedNetworks#type}
    */
    readonly type: string;
}
export interface ZeroTrustDeviceManagedNetworksConfigA {
    /**
    * The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#sha256 ZeroTrustDeviceManagedNetworks#sha256}
    */
    readonly sha256?: string;
    /**
    * A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#tls_sockaddr ZeroTrustDeviceManagedNetworks#tls_sockaddr}
    */
    readonly tlsSockaddr: string;
}
export declare function zeroTrustDeviceManagedNetworksConfigAToTerraform(struct?: ZeroTrustDeviceManagedNetworksConfigA | cdktf.IResolvable): any;
export declare function zeroTrustDeviceManagedNetworksConfigAToHclTerraform(struct?: ZeroTrustDeviceManagedNetworksConfigA | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceManagedNetworksConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDeviceManagedNetworksConfigA | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceManagedNetworksConfigA | cdktf.IResolvable | undefined);
    private _sha256?;
    get sha256(): string;
    set sha256(value: string);
    resetSha256(): void;
    get sha256Input(): string;
    private _tlsSockaddr?;
    get tlsSockaddr(): string;
    set tlsSockaddr(value: string);
    get tlsSockaddrInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}
*/
export declare class ZeroTrustDeviceManagedNetworks extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_managed_networks";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceManagedNetworks to import
    * @param importFromId The id of the existing ZeroTrustDeviceManagedNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceManagedNetworks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceManagedNetworksConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceManagedNetworksConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): ZeroTrustDeviceManagedNetworksConfigAOutputReference;
    putConfig(value: ZeroTrustDeviceManagedNetworksConfigA): void;
    get configInput(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get networkId(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
