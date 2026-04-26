import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityAzureAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#access_token_max_ttl IdentityAzureAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#access_token_num_uses_limit IdentityAzureAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#access_token_trusted_ips IdentityAzureAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityAzureAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#access_token_ttl IdentityAzureAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * List of Azure AD service principal IDs that are allowed to authenticate with Infisical
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#allowed_service_principal_ids IdentityAzureAuth#allowed_service_principal_ids}
    */
    readonly allowedServicePrincipalIds?: string[];
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#identity_id IdentityAzureAuth#identity_id}
    */
    readonly identityId: string;
    /**
    * The resource URL for the application registered in Azure AD. The value is expected to match the `aud` claim of the access token JWT later used in the login operation against Infisical. See the [resource](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/how-to-use-vm-token#get-a-token-using-http) parameter for how the audience is set when requesting a JWT access token from the Azure Instance Metadata Service (IMDS) endpoint. In most cases, this value should be `https://management.azure.com/` which is the default
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#resource_url IdentityAzureAuth#resource_url}
    */
    readonly resourceUrl?: string;
    /**
    *  The [tenant ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant) for the Azure AD organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#tenant_id IdentityAzureAuth#tenant_id}
    */
    readonly tenantId: string;
}
export interface IdentityAzureAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#ip_address IdentityAzureAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityAzureAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityAzureAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityAzureAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityAzureAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityAzureAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityAzureAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityAzureAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityAzureAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityAzureAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityAzureAuthAccessTokenTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth infisical_identity_azure_auth}
*/
export declare class IdentityAzureAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_azure_auth";
    /**
    * Generates CDKTF code for importing a IdentityAzureAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityAzureAuth to import
    * @param importFromId The id of the existing IdentityAzureAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityAzureAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_azure_auth infisical_identity_azure_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityAzureAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityAzureAuthConfig);
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
    get accessTokenTrustedIps(): IdentityAzureAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityAzureAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
    resetAccessTokenTrustedIps(): void;
    get accessTokenTrustedIpsInput(): any;
    private _accessTokenTtl?;
    get accessTokenTtl(): number;
    set accessTokenTtl(value: number);
    resetAccessTokenTtl(): void;
    get accessTokenTtlInput(): number;
    private _allowedServicePrincipalIds?;
    get allowedServicePrincipalIds(): string[];
    set allowedServicePrincipalIds(value: string[]);
    resetAllowedServicePrincipalIds(): void;
    get allowedServicePrincipalIdsInput(): string[];
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _resourceUrl?;
    get resourceUrl(): string;
    set resourceUrl(value: string);
    resetResourceUrl(): void;
    get resourceUrlInput(): string;
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    get tenantIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
