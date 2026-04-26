import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityOidcAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#access_token_max_ttl IdentityOidcAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#access_token_num_uses_limit IdentityOidcAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address...
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#access_token_trusted_ips IdentityOidcAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityOidcAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#access_token_ttl IdentityOidcAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * The comma-separated list of intended recipients.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#bound_audiences IdentityOidcAuth#bound_audiences}
    */
    readonly boundAudiences?: string[];
    /**
    * The attributes that should be present in the JWT for it to be valid. The provided values can be a glob pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#bound_claims IdentityOidcAuth#bound_claims}
    */
    readonly boundClaims?: {
        [key: string]: string;
    };
    /**
    * The unique identifier of the identity provider issuing the OIDC tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#bound_issuer IdentityOidcAuth#bound_issuer}
    */
    readonly boundIssuer: string;
    /**
    * The expected principal that is the subject of the JWT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#bound_subject IdentityOidcAuth#bound_subject}
    */
    readonly boundSubject?: string;
    /**
    * Map OIDC token claims to metadata fields. Example: {"role": "token.groups"}, this would become identity.metadata.oidc.claims.role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#claim_metadata_mapping IdentityOidcAuth#claim_metadata_mapping}
    */
    readonly claimMetadataMapping?: {
        [key: string]: string;
    };
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#identity_id IdentityOidcAuth#identity_id}
    */
    readonly identityId: string;
    /**
    * The PEM-encoded CA cert for establishing secure communication with the Identity Provider endpoints
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#oidc_ca_certificate IdentityOidcAuth#oidc_ca_certificate}
    */
    readonly oidcCaCertificate?: string;
    /**
    * The URL used to retrieve the OpenID Connect configuration from the identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#oidc_discovery_url IdentityOidcAuth#oidc_discovery_url}
    */
    readonly oidcDiscoveryUrl: string;
}
export interface IdentityOidcAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#ip_address IdentityOidcAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityOidcAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityOidcAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityOidcAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityOidcAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityOidcAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityOidcAuthAccessTokenTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth infisical_identity_oidc_auth}
*/
export declare class IdentityOidcAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_oidc_auth";
    /**
    * Generates CDKTF code for importing a IdentityOidcAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityOidcAuth to import
    * @param importFromId The id of the existing IdentityOidcAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityOidcAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth infisical_identity_oidc_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityOidcAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityOidcAuthConfig);
    private _accessTokenMaxTtl?;
    get accessTokenMaxTtl(): number;
    set accessTokenMaxTtl(value: number);
    resetAccessTokenMaxTtl(): void;
    get accessTokenMaxTtlInput(): number;
    private _accessTokenNumUsesLimit?;
    get accessTokenNumUsesLimit(): number;
    set accessTokenNumUsesLimit(value: number);
    resetAccessTokenNumUsesLimit(): void;
    get accessTokenNumUsesLimitInput(): number;
    private _accessTokenTrustedIps;
    get accessTokenTrustedIps(): IdentityOidcAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityOidcAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
    resetAccessTokenTrustedIps(): void;
    get accessTokenTrustedIpsInput(): any;
    private _accessTokenTtl?;
    get accessTokenTtl(): number;
    set accessTokenTtl(value: number);
    resetAccessTokenTtl(): void;
    get accessTokenTtlInput(): number;
    private _boundAudiences?;
    get boundAudiences(): string[];
    set boundAudiences(value: string[]);
    resetBoundAudiences(): void;
    get boundAudiencesInput(): string[];
    private _boundClaims?;
    get boundClaims(): {
        [key: string]: string;
    };
    set boundClaims(value: {
        [key: string]: string;
    });
    resetBoundClaims(): void;
    get boundClaimsInput(): {
        [key: string]: string;
    };
    private _boundIssuer?;
    get boundIssuer(): string;
    set boundIssuer(value: string);
    get boundIssuerInput(): string;
    private _boundSubject?;
    get boundSubject(): string;
    set boundSubject(value: string);
    resetBoundSubject(): void;
    get boundSubjectInput(): string;
    private _claimMetadataMapping?;
    get claimMetadataMapping(): {
        [key: string]: string;
    };
    set claimMetadataMapping(value: {
        [key: string]: string;
    });
    resetClaimMetadataMapping(): void;
    get claimMetadataMappingInput(): {
        [key: string]: string;
    };
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _oidcCaCertificate?;
    get oidcCaCertificate(): string;
    set oidcCaCertificate(value: string);
    resetOidcCaCertificate(): void;
    get oidcCaCertificateInput(): string;
    private _oidcDiscoveryUrl?;
    get oidcDiscoveryUrl(): string;
    set oidcDiscoveryUrl(value: string);
    get oidcDiscoveryUrlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
