import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KeylessCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
    * Available values: "ubiquitous", "optimal", "force".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#bundle_method KeylessCertificate#bundle_method}
    */
    readonly bundleMethod?: string;
    /**
    * The zone's SSL certificate or SSL certificate and intermediate(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#certificate KeylessCertificate#certificate}
    */
    readonly certificate: string;
    /**
    * Whether or not the Keyless SSL is on or off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#enabled KeylessCertificate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The keyless SSL name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#host KeylessCertificate#host}
    */
    readonly host: string;
    /**
    * The keyless SSL name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#name KeylessCertificate#name}
    */
    readonly name?: string;
    /**
    * The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#port KeylessCertificate#port}
    */
    readonly port?: number;
    /**
    * Configuration for using Keyless SSL through a Cloudflare Tunnel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#tunnel KeylessCertificate#tunnel}
    */
    readonly tunnel?: KeylessCertificateTunnel;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#zone_id KeylessCertificate#zone_id}
    */
    readonly zoneId?: string;
}
export interface KeylessCertificateTunnel {
    /**
    * Private IP of the Key Server Host
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#private_ip KeylessCertificate#private_ip}
    */
    readonly privateIp: string;
    /**
    * Cloudflare Tunnel Virtual Network ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#vnet_id KeylessCertificate#vnet_id}
    */
    readonly vnetId: string;
}
export declare function keylessCertificateTunnelToTerraform(struct?: KeylessCertificateTunnel | cdktf.IResolvable): any;
export declare function keylessCertificateTunnelToHclTerraform(struct?: KeylessCertificateTunnel | cdktf.IResolvable): any;
export declare class KeylessCertificateTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeylessCertificateTunnel | cdktf.IResolvable | undefined;
    set internalValue(value: KeylessCertificateTunnel | cdktf.IResolvable | undefined);
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    get privateIpInput(): string;
    private _vnetId?;
    get vnetId(): string;
    set vnetId(value: string);
    get vnetIdInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate cloudflare_keyless_certificate}
*/
export declare class KeylessCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_keyless_certificate";
    /**
    * Generates CDKTF code for importing a KeylessCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KeylessCertificate to import
    * @param importFromId The id of the existing KeylessCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KeylessCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate cloudflare_keyless_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeylessCertificateConfig
    */
    constructor(scope: Construct, id: string, config: KeylessCertificateConfig);
    private _bundleMethod?;
    get bundleMethod(): string;
    set bundleMethod(value: string);
    resetBundleMethod(): void;
    get bundleMethodInput(): string;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    get createdOn(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    get id(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get permissions(): any;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    get status(): any;
    private _tunnel;
    get tunnel(): KeylessCertificateTunnelOutputReference;
    putTunnel(value: KeylessCertificateTunnel): void;
    resetTunnel(): void;
    get tunnelInput(): any;
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
