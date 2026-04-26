import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomHostnameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Unique key/value metadata for this hostname. These are per-hostname (customer) settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}
    */
    readonly customMetadata?: {
        [key: string]: string;
    };
    /**
    * a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}
    */
    readonly customOriginServer?: string;
    /**
    * A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}
    */
    readonly customOriginSni?: string;
    /**
    * The custom hostname that will point to your hostname via CNAME.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}
    */
    readonly hostname: string;
    /**
    * SSL properties used when creating the custom hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}
    */
    readonly ssl?: CustomHostnameSsl;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}
    */
    readonly zoneId?: string;
}
export interface CustomHostnameOwnershipVerification {
}
export declare function customHostnameOwnershipVerificationToTerraform(struct?: CustomHostnameOwnershipVerification): any;
export declare function customHostnameOwnershipVerificationToHclTerraform(struct?: CustomHostnameOwnershipVerification): any;
export declare class CustomHostnameOwnershipVerificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomHostnameOwnershipVerification | undefined;
    set internalValue(value: CustomHostnameOwnershipVerification | undefined);
    get name(): any;
    get type(): any;
    get value(): any;
}
export interface CustomHostnameOwnershipVerificationHttp {
}
export declare function customHostnameOwnershipVerificationHttpToTerraform(struct?: CustomHostnameOwnershipVerificationHttp): any;
export declare function customHostnameOwnershipVerificationHttpToHclTerraform(struct?: CustomHostnameOwnershipVerificationHttp): any;
export declare class CustomHostnameOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomHostnameOwnershipVerificationHttp | undefined;
    set internalValue(value: CustomHostnameOwnershipVerificationHttp | undefined);
    get httpBody(): any;
    get httpUrl(): any;
}
export interface CustomHostnameSslCustomCertBundle {
    /**
    * If a custom uploaded certificate is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}
    */
    readonly customCertificate: string;
    /**
    * The key for a custom uploaded certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}
    */
    readonly customKey: string;
}
export declare function customHostnameSslCustomCertBundleToTerraform(struct?: CustomHostnameSslCustomCertBundle | cdktf.IResolvable): any;
export declare function customHostnameSslCustomCertBundleToHclTerraform(struct?: CustomHostnameSslCustomCertBundle | cdktf.IResolvable): any;
export declare class CustomHostnameSslCustomCertBundleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CustomHostnameSslCustomCertBundle | cdktf.IResolvable | undefined;
    set internalValue(value: CustomHostnameSslCustomCertBundle | cdktf.IResolvable | undefined);
    private _customCertificate?;
    get customCertificate(): string;
    set customCertificate(value: string);
    get customCertificateInput(): string;
    private _customKey?;
    get customKey(): string;
    set customKey(value: string);
    get customKeyInput(): string;
}
export declare class CustomHostnameSslCustomCertBundleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CustomHostnameSslCustomCertBundle[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CustomHostnameSslCustomCertBundleOutputReference;
}
export interface CustomHostnameSslSettings {
    /**
    * An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}
    */
    readonly ciphers?: string[];
    /**
    * Whether or not Early Hints is enabled.
    * Available values: "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}
    */
    readonly earlyHints?: string;
    /**
    * Whether or not HTTP2 is enabled.
    * Available values: "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#http2 CustomHostname#http2}
    */
    readonly http2?: string;
    /**
    * The minimum TLS version supported.
    * Available values: "1.0", "1.1", "1.2", "1.3".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}
    */
    readonly minTlsVersion?: string;
    /**
    * Whether or not TLS 1.3 is enabled.
    * Available values: "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}
    */
    readonly tls13?: string;
}
export declare function customHostnameSslSettingsToTerraform(struct?: CustomHostnameSslSettings | cdktf.IResolvable): any;
export declare function customHostnameSslSettingsToHclTerraform(struct?: CustomHostnameSslSettings | cdktf.IResolvable): any;
export declare class CustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomHostnameSslSettings | cdktf.IResolvable | undefined;
    set internalValue(value: CustomHostnameSslSettings | cdktf.IResolvable | undefined);
    private _ciphers?;
    get ciphers(): string[];
    set ciphers(value: string[]);
    resetCiphers(): void;
    get ciphersInput(): string[];
    private _earlyHints?;
    get earlyHints(): string;
    set earlyHints(value: string);
    resetEarlyHints(): void;
    get earlyHintsInput(): string;
    private _http2?;
    get http2(): string;
    set http2(value: string);
    resetHttp2(): void;
    get http2Input(): string;
    private _minTlsVersion?;
    get minTlsVersion(): string;
    set minTlsVersion(value: string);
    resetMinTlsVersion(): void;
    get minTlsVersionInput(): string;
    private _tls13?;
    get tls13(): string;
    set tls13(value: string);
    resetTls13(): void;
    get tls13Input(): string;
}
export interface CustomHostnameSsl {
    /**
    * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
    * Available values: "ubiquitous", "optimal", "force".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}
    */
    readonly bundleMethod?: string;
    /**
    * The Certificate Authority that will issue the certificate
    * Available values: "digicert", "google", "lets_encrypt", "ssl_com".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}
    */
    readonly certificateAuthority?: string;
    /**
    * Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}
    */
    readonly cloudflareBranding?: boolean | cdktf.IResolvable;
    /**
    * Array of custom certificate and key pairs (1 or 2 pairs allowed)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}
    */
    readonly customCertBundle?: CustomHostnameSslCustomCertBundle[] | cdktf.IResolvable;
    /**
    * If a custom uploaded certificate is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}
    */
    readonly customCertificate?: string;
    /**
    * The identifier for the Custom CSR that was used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_csr_id CustomHostname#custom_csr_id}
    */
    readonly customCsrId?: string;
    /**
    * The key for a custom uploaded certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}
    */
    readonly customKey?: string;
    /**
    * Domain control validation (DCV) method used for this hostname.
    * Available values: "http", "txt", "email".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#method CustomHostname#method}
    */
    readonly method?: string;
    /**
    * SSL specific settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#settings CustomHostname#settings}
    */
    readonly settings?: CustomHostnameSslSettings;
    /**
    * Level of validation to be used for this hostname. Domain validation (dv) must be used.
    * Available values: "dv".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#type CustomHostname#type}
    */
    readonly type?: string;
    /**
    * Indicates whether the certificate covers a wildcard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function customHostnameSslToTerraform(struct?: CustomHostnameSsl | cdktf.IResolvable): any;
export declare function customHostnameSslToHclTerraform(struct?: CustomHostnameSsl | cdktf.IResolvable): any;
export declare class CustomHostnameSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomHostnameSsl | cdktf.IResolvable | undefined;
    set internalValue(value: CustomHostnameSsl | cdktf.IResolvable | undefined);
    private _bundleMethod?;
    get bundleMethod(): string;
    set bundleMethod(value: string);
    resetBundleMethod(): void;
    get bundleMethodInput(): string;
    private _certificateAuthority?;
    get certificateAuthority(): string;
    set certificateAuthority(value: string);
    resetCertificateAuthority(): void;
    get certificateAuthorityInput(): string;
    private _cloudflareBranding?;
    get cloudflareBranding(): boolean | cdktf.IResolvable;
    set cloudflareBranding(value: boolean | cdktf.IResolvable);
    resetCloudflareBranding(): void;
    get cloudflareBrandingInput(): any;
    private _customCertBundle;
    get customCertBundle(): CustomHostnameSslCustomCertBundleList;
    putCustomCertBundle(value: CustomHostnameSslCustomCertBundle[] | cdktf.IResolvable): void;
    resetCustomCertBundle(): void;
    get customCertBundleInput(): any;
    private _customCertificate?;
    get customCertificate(): string;
    set customCertificate(value: string);
    resetCustomCertificate(): void;
    get customCertificateInput(): string;
    private _customCsrId?;
    get customCsrId(): string;
    set customCsrId(value: string);
    resetCustomCsrId(): void;
    get customCsrIdInput(): string;
    private _customKey?;
    get customKey(): string;
    set customKey(value: string);
    resetCustomKey(): void;
    get customKeyInput(): string;
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
    private _settings;
    get settings(): CustomHostnameSslSettingsOutputReference;
    putSettings(value: CustomHostnameSslSettings): void;
    resetSettings(): void;
    get settingsInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname cloudflare_custom_hostname}
*/
export declare class CustomHostname extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_custom_hostname";
    /**
    * Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomHostname to import
    * @param importFromId The id of the existing CustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomHostname to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname cloudflare_custom_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomHostnameConfig
    */
    constructor(scope: Construct, id: string, config: CustomHostnameConfig);
    get createdAt(): any;
    private _customMetadata?;
    get customMetadata(): {
        [key: string]: string;
    };
    set customMetadata(value: {
        [key: string]: string;
    });
    resetCustomMetadata(): void;
    get customMetadataInput(): {
        [key: string]: string;
    };
    private _customOriginServer?;
    get customOriginServer(): string;
    set customOriginServer(value: string);
    resetCustomOriginServer(): void;
    get customOriginServerInput(): string;
    private _customOriginSni?;
    get customOriginSni(): string;
    set customOriginSni(value: string);
    resetCustomOriginSni(): void;
    get customOriginSniInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get id(): any;
    private _ownershipVerification;
    get ownershipVerification(): CustomHostnameOwnershipVerificationOutputReference;
    private _ownershipVerificationHttp;
    get ownershipVerificationHttp(): CustomHostnameOwnershipVerificationHttpOutputReference;
    private _ssl;
    get ssl(): CustomHostnameSslOutputReference;
    putSsl(value: CustomHostnameSsl): void;
    resetSsl(): void;
    get sslInput(): any;
    get status(): any;
    get verificationErrors(): any;
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
