import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityUniversalAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#access_token_max_ttl IdentityUniversalAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#access_token_num_uses_limit IdentityUniversalAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#access_token_trusted_ips IdentityUniversalAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityUniversalAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#access_token_ttl IdentityUniversalAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * A list of IPs or CIDR ranges that the Client Secret can be used from together with the Client ID to get back an access token. You can use 0.0.0.0/0, to allow usage from any network address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#client_secret_trusted_ips IdentityUniversalAuth#client_secret_trusted_ips}
    */
    readonly clientSecretTrustedIps?: IdentityUniversalAuthClientSecretTrustedIps[] | cdktf.IResolvable;
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#identity_id IdentityUniversalAuth#identity_id}
    */
    readonly identityId: string;
}
export interface IdentityUniversalAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#ip_address IdentityUniversalAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityUniversalAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityUniversalAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityUniversalAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityUniversalAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityUniversalAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityUniversalAuthAccessTokenTrustedIpsOutputReference;
}
export interface IdentityUniversalAuthClientSecretTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#ip_address IdentityUniversalAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityUniversalAuthClientSecretTrustedIpsToTerraform(struct?: IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable): any;
export declare function identityUniversalAuthClientSecretTrustedIpsToHclTerraform(struct?: IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable): any;
export declare class IdentityUniversalAuthClientSecretTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityUniversalAuthClientSecretTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityUniversalAuthClientSecretTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityUniversalAuthClientSecretTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth infisical_identity_universal_auth}
*/
export declare class IdentityUniversalAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_universal_auth";
    /**
    * Generates CDKTF code for importing a IdentityUniversalAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityUniversalAuth to import
    * @param importFromId The id of the existing IdentityUniversalAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityUniversalAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth infisical_identity_universal_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityUniversalAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityUniversalAuthConfig);
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
    get accessTokenTrustedIps(): IdentityUniversalAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityUniversalAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
    resetAccessTokenTrustedIps(): void;
    get accessTokenTrustedIpsInput(): any;
    private _accessTokenTtl?;
    get accessTokenTtl(): number;
    set accessTokenTtl(value: number);
    resetAccessTokenTtl(): void;
    get accessTokenTtlInput(): number;
    private _clientSecretTrustedIps;
    get clientSecretTrustedIps(): IdentityUniversalAuthClientSecretTrustedIpsList;
    putClientSecretTrustedIps(value: IdentityUniversalAuthClientSecretTrustedIps[] | cdktf.IResolvable): void;
    resetClientSecretTrustedIps(): void;
    get clientSecretTrustedIpsInput(): any;
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
