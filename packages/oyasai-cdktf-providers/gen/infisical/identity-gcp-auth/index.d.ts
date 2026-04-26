import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityGcpAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_max_ttl IdentityGcpAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_num_uses_limit IdentityGcpAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_trusted_ips IdentityGcpAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityGcpAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_ttl IdentityGcpAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * List of trusted GCP projects that the GCE instance must belong to authenticate with Infisical. Note that this validation property will only work for GCE instances
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#allowed_projects IdentityGcpAuth#allowed_projects}
    */
    readonly allowedProjects?: string[];
    /**
    * List of trusted service account emails corresponding to the GCE resource(s) allowed to authenticate with Infisical; this could be something like `test@project.iam.gserviceaccount.com`, `12345-compute@developer.gserviceaccount.com`, etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#allowed_service_account_emails IdentityGcpAuth#allowed_service_account_emails}
    */
    readonly allowedServiceAccountEmails?: string[];
    /**
    * List of trusted zones that the GCE instances must belong to authenticate with Infisical; this should be the fully-qualified zone name in the format `<region>-<zone>`like `us-central1-a`, `us-west1-b`, etc. Note that this validation property will only work for GCE instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#allowed_zones IdentityGcpAuth#allowed_zones}
    */
    readonly allowedZones?: string[];
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#identity_id IdentityGcpAuth#identity_id}
    */
    readonly identityId: string;
    /**
    * The Type of GCP Auth Method to use: Options are gce, iam. Default:gce
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#type IdentityGcpAuth#type}
    */
    readonly type?: string;
}
export interface IdentityGcpAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#ip_address IdentityGcpAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityGcpAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityGcpAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityGcpAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityGcpAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityGcpAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityGcpAuthAccessTokenTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth}
*/
export declare class IdentityGcpAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_gcp_auth";
    /**
    * Generates CDKTF code for importing a IdentityGcpAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityGcpAuth to import
    * @param importFromId The id of the existing IdentityGcpAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityGcpAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityGcpAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityGcpAuthConfig);
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
    get accessTokenTrustedIps(): IdentityGcpAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityGcpAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
    resetAccessTokenTrustedIps(): void;
    get accessTokenTrustedIpsInput(): any;
    private _accessTokenTtl?;
    get accessTokenTtl(): number;
    set accessTokenTtl(value: number);
    resetAccessTokenTtl(): void;
    get accessTokenTtlInput(): number;
    private _allowedProjects?;
    get allowedProjects(): string[];
    set allowedProjects(value: string[]);
    resetAllowedProjects(): void;
    get allowedProjectsInput(): string[];
    private _allowedServiceAccountEmails?;
    get allowedServiceAccountEmails(): string[];
    set allowedServiceAccountEmails(value: string[]);
    resetAllowedServiceAccountEmails(): void;
    get allowedServiceAccountEmailsInput(): string[];
    private _allowedZones?;
    get allowedZones(): string[];
    set allowedZones(value: string[]);
    resetAllowedZones(): void;
    get allowedZonesInput(): string[];
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
