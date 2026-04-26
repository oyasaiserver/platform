import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityJwtAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#access_token_max_ttl IdentityJwtAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default: 0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#access_token_num_uses_limit IdentityJwtAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#access_token_trusted_ips IdentityJwtAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityJwtAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#access_token_ttl IdentityJwtAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * The list of intended recipients.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#bound_audiences IdentityJwtAuth#bound_audiences}
    */
    readonly boundAudiences?: string[];
    /**
    * The attributes that should be present in the JWT for it to be valid.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#bound_claims IdentityJwtAuth#bound_claims}
    */
    readonly boundClaims?: {
        [key: string]: string;
    };
    /**
    * The unique identifier of the identity provider issuing the JWTs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#bound_issuer IdentityJwtAuth#bound_issuer}
    */
    readonly boundIssuer?: string;
    /**
    * The expected principal that is the subject of the JWT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#bound_subject IdentityJwtAuth#bound_subject}
    */
    readonly boundSubject?: string;
    /**
    * The configuration type of the JWT auth. Must be 'jwks' or 'static'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#configuration_type IdentityJwtAuth#configuration_type}
    */
    readonly configurationType: string;
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#identity_id IdentityJwtAuth#identity_id}
    */
    readonly identityId: string;
    /**
    * The PEM-encoded CA certificate for validating the TLS connection to the JWKS URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#jwks_ca_cert IdentityJwtAuth#jwks_ca_cert}
    */
    readonly jwksCaCert?: string;
    /**
    * The URL used to retrieve the JSON Web Key Set (JWKS) for verifying JWTs. Required when configuration_type is 'jwks'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#jwks_url IdentityJwtAuth#jwks_url}
    */
    readonly jwksUrl?: string;
    /**
    * A list of PEM-encoded public keys used to verify JWTs. Required when configuration_type is 'static'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#public_keys IdentityJwtAuth#public_keys}
    */
    readonly publicKeys?: string[];
}
export interface IdentityJwtAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#ip_address IdentityJwtAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityJwtAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityJwtAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityJwtAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityJwtAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityJwtAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityJwtAuthAccessTokenTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth infisical_identity_jwt_auth}
*/
export declare class IdentityJwtAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_jwt_auth";
    /**
    * Generates CDKTF code for importing a IdentityJwtAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityJwtAuth to import
    * @param importFromId The id of the existing IdentityJwtAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityJwtAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth infisical_identity_jwt_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityJwtAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityJwtAuthConfig);
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
    get accessTokenTrustedIps(): IdentityJwtAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityJwtAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
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
    resetBoundIssuer(): void;
    get boundIssuerInput(): string;
    private _boundSubject?;
    get boundSubject(): string;
    set boundSubject(value: string);
    resetBoundSubject(): void;
    get boundSubjectInput(): string;
    private _configurationType?;
    get configurationType(): string;
    set configurationType(value: string);
    get configurationTypeInput(): string;
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _jwksCaCert?;
    get jwksCaCert(): string;
    set jwksCaCert(value: string);
    resetJwksCaCert(): void;
    get jwksCaCertInput(): string;
    private _jwksUrl?;
    get jwksUrl(): string;
    set jwksUrl(value: string);
    resetJwksUrl(): void;
    get jwksUrlInput(): string;
    private _publicKeys?;
    get publicKeys(): string[];
    set publicKeys(value: string[]);
    resetPublicKeys(): void;
    get publicKeysInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
