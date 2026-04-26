import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityAwsAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#access_token_max_ttl IdentityAwsAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#access_token_num_uses_limit IdentityAwsAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#access_token_trusted_ips IdentityAwsAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityAwsAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#access_token_ttl IdentityAwsAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * List of trusted AWS account IDs that are allowed to authenticate with Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#allowed_account_ids IdentityAwsAuth#allowed_account_ids}
    */
    readonly allowedAccountIds?: string[];
    /**
    * List of trusted IAM principal ARNs that are allowed to authenticate with Infisical. The values should take one of three forms: `arn:aws:iam::123456789012:user/MyUserName`, `arn:aws:iam::123456789012:role/MyRoleName`, or `arn:aws:iam::123456789012:*`. Using a wildcard in this case allows any IAM principal in the account `123456789012` to authenticate with Infisical under the identity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#allowed_principal_arns IdentityAwsAuth#allowed_principal_arns}
    */
    readonly allowedPrincipalArns?: string[];
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#identity_id IdentityAwsAuth#identity_id}
    */
    readonly identityId: string;
    /**
    *  The endpoint URL for the AWS STS API. This value should be adjusted based on the AWS region you are operating in (e.g. `https://sts.us-east-1.amazonaws.com/`); refer to the list of regional STS endpoints [here](https://docs.aws.amazon.com/general/latest/gr/sts.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#sts_endpoint IdentityAwsAuth#sts_endpoint}
    */
    readonly stsEndpoint?: string;
}
export interface IdentityAwsAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#ip_address IdentityAwsAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityAwsAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityAwsAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityAwsAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityAwsAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityAwsAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityAwsAuthAccessTokenTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth infisical_identity_aws_auth}
*/
export declare class IdentityAwsAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_aws_auth";
    /**
    * Generates CDKTF code for importing a IdentityAwsAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityAwsAuth to import
    * @param importFromId The id of the existing IdentityAwsAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityAwsAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth infisical_identity_aws_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityAwsAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityAwsAuthConfig);
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
    get accessTokenTrustedIps(): IdentityAwsAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityAwsAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
    resetAccessTokenTrustedIps(): void;
    get accessTokenTrustedIpsInput(): any;
    private _accessTokenTtl?;
    get accessTokenTtl(): number;
    set accessTokenTtl(value: number);
    resetAccessTokenTtl(): void;
    get accessTokenTtlInput(): number;
    private _allowedAccountIds?;
    get allowedAccountIds(): string[];
    set allowedAccountIds(value: string[]);
    resetAllowedAccountIds(): void;
    get allowedAccountIdsInput(): string[];
    private _allowedPrincipalArns?;
    get allowedPrincipalArns(): string[];
    set allowedPrincipalArns(value: string[]);
    resetAllowedPrincipalArns(): void;
    get allowedPrincipalArnsInput(): string[];
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _stsEndpoint?;
    get stsEndpoint(): string;
    set stsEndpoint(value: string);
    resetStsEndpoint(): void;
    get stsEndpointInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
