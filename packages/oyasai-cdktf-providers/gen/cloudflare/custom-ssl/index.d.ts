import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomSslConfig extends cdktf.TerraformMetaArguments {
    /**
    * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
    * Available values: "ubiquitous", "optimal", "force".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}
    */
    readonly bundleMethod?: string;
    /**
    * The zone's SSL certificate or certificate and the intermediate(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}
    */
    readonly certificate: string;
    /**
    * The identifier for the Custom CSR that was used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#custom_csr_id CustomSsl#custom_csr_id}
    */
    readonly customCsrId?: string;
    /**
    * The environment to deploy the certificate to.
    * Available values: "staging", "production".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#deploy CustomSsl#deploy}
    */
    readonly deploy?: string;
    /**
    * Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}
    */
    readonly geoRestrictions?: CustomSslGeoRestrictions;
    /**
    * Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.
    * Note: The API accepts this field as either "policy" or "policy_restrictions" in requests. Responses return this field as "policy_restrictions".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#policy CustomSsl#policy}
    */
    readonly policy?: string;
    /**
    * The zone's private key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}
    */
    readonly privateKey: string;
    /**
    * The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.
    * Available values: "legacy_custom", "sni_custom".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#type CustomSsl#type}
    */
    readonly type?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}
    */
    readonly zoneId?: string;
}
export interface CustomSslGeoRestrictions {
    /**
    * Available values: "us", "eu", "highest_security".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#label CustomSsl#label}
    */
    readonly label?: string;
}
export declare function customSslGeoRestrictionsToTerraform(struct?: CustomSslGeoRestrictions | cdktf.IResolvable): any;
export declare function customSslGeoRestrictionsToHclTerraform(struct?: CustomSslGeoRestrictions | cdktf.IResolvable): any;
export declare class CustomSslGeoRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomSslGeoRestrictions | cdktf.IResolvable | undefined;
    set internalValue(value: CustomSslGeoRestrictions | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string;
}
export interface CustomSslKeylessServerTunnel {
}
export declare function customSslKeylessServerTunnelToTerraform(struct?: CustomSslKeylessServerTunnel): any;
export declare function customSslKeylessServerTunnelToHclTerraform(struct?: CustomSslKeylessServerTunnel): any;
export declare class CustomSslKeylessServerTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomSslKeylessServerTunnel | undefined;
    set internalValue(value: CustomSslKeylessServerTunnel | undefined);
    get privateIp(): any;
    get vnetId(): any;
}
export interface CustomSslKeylessServer {
}
export declare function customSslKeylessServerToTerraform(struct?: CustomSslKeylessServer): any;
export declare function customSslKeylessServerToHclTerraform(struct?: CustomSslKeylessServer): any;
export declare class CustomSslKeylessServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomSslKeylessServer | undefined;
    set internalValue(value: CustomSslKeylessServer | undefined);
    get createdOn(): any;
    get enabled(): any;
    get host(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    get permissions(): any;
    get port(): any;
    get status(): any;
    private _tunnel;
    get tunnel(): CustomSslKeylessServerTunnelOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl cloudflare_custom_ssl}
*/
export declare class CustomSsl extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_custom_ssl";
    /**
    * Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomSsl to import
    * @param importFromId The id of the existing CustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomSsl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl cloudflare_custom_ssl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomSslConfig
    */
    constructor(scope: Construct, id: string, config: CustomSslConfig);
    private _bundleMethod?;
    get bundleMethod(): string;
    set bundleMethod(value: string);
    resetBundleMethod(): void;
    get bundleMethodInput(): string;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    private _customCsrId?;
    get customCsrId(): string;
    set customCsrId(value: string);
    resetCustomCsrId(): void;
    get customCsrIdInput(): string;
    private _deploy?;
    get deploy(): string;
    set deploy(value: string);
    resetDeploy(): void;
    get deployInput(): string;
    get expiresOn(): any;
    private _geoRestrictions;
    get geoRestrictions(): CustomSslGeoRestrictionsOutputReference;
    putGeoRestrictions(value: CustomSslGeoRestrictions): void;
    resetGeoRestrictions(): void;
    get geoRestrictionsInput(): any;
    get hosts(): any;
    get id(): any;
    get issuer(): any;
    private _keylessServer;
    get keylessServer(): CustomSslKeylessServerOutputReference;
    get modifiedOn(): any;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    get policyRestrictions(): any;
    get priority(): any;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
    get signature(): any;
    get status(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    get uploadedOn(): any;
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
