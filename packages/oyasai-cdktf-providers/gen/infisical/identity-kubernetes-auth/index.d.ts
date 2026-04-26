import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityKubernetesAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#access_token_max_ttl IdentityKubernetesAuth#access_token_max_ttl}
    */
    readonly accessTokenMaxTtl?: number;
    /**
    * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#access_token_num_uses_limit IdentityKubernetesAuth#access_token_num_uses_limit}
    */
    readonly accessTokenNumUsesLimit?: number;
    /**
    * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#access_token_trusted_ips IdentityKubernetesAuth#access_token_trusted_ips}
    */
    readonly accessTokenTrustedIps?: IdentityKubernetesAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#access_token_ttl IdentityKubernetesAuth#access_token_ttl}
    */
    readonly accessTokenTtl?: number;
    /**
    * An optional audience claim that the service account JWT token must have to authenticate with Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#allowed_audience IdentityKubernetesAuth#allowed_audience}
    */
    readonly allowedAudience?: string;
    /**
    * List of trusted namespaces that service accounts must belong to authenticate with Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#allowed_namespaces IdentityKubernetesAuth#allowed_namespaces}
    */
    readonly allowedNamespaces?: string[];
    /**
    * List of trusted service account names that are allowed to authenticate with Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#allowed_service_account_names IdentityKubernetesAuth#allowed_service_account_names}
    */
    readonly allowedServiceAccountNames?: string[];
    /**
    * Select a gateway for private cluster access. If not specified, the Internet Gateway will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#gateway_id IdentityKubernetesAuth#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * The ID of the identity to attach the configuration onto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#identity_id IdentityKubernetesAuth#identity_id}
    */
    readonly identityId: string;
    /**
    * The PEM-encoded CA cert for the Kubernetes API server. This is used by the TLS client for secure communication with the Kubernetes API server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#kubernetes_ca_certificate IdentityKubernetesAuth#kubernetes_ca_certificate}
    */
    readonly kubernetesCaCertificate?: string;
    /**
    * The host string, host:port pair, or URL to the base of the Kubernetes API server. This can usually be obtained by running `kubectl cluster-info`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#kubernetes_host IdentityKubernetesAuth#kubernetes_host}
    */
    readonly kubernetesHost?: string;
    /**
    * A long-lived service account JWT token for Infisical to access the [TokenReview API](https://kubernetes.io/docs/reference/kubernetes-api/authentication-resources/token-review-v1/) to validate other service account JWT tokens submitted by applications/pods. This is the JWT token obtained from step 1.5.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#token_reviewer_jwt IdentityKubernetesAuth#token_reviewer_jwt}
    */
    readonly tokenReviewerJwt?: string;
    /**
    * Choose between Token ('api') or 'gateway' authentication. If using Gateway, the Gateway must be deployed in your Kubernetes cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#token_reviewer_mode IdentityKubernetesAuth#token_reviewer_mode}
    */
    readonly tokenReviewerMode?: string;
}
export interface IdentityKubernetesAuthAccessTokenTrustedIps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#ip_address IdentityKubernetesAuth#ip_address}
    */
    readonly ipAddress?: string;
}
export declare function identityKubernetesAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare function identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable): any;
export declare class IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
}
export declare class IdentityKubernetesAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityKubernetesAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth}
*/
export declare class IdentityKubernetesAuth extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_kubernetes_auth";
    /**
    * Generates CDKTF code for importing a IdentityKubernetesAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityKubernetesAuth to import
    * @param importFromId The id of the existing IdentityKubernetesAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityKubernetesAuth to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityKubernetesAuthConfig
    */
    constructor(scope: Construct, id: string, config: IdentityKubernetesAuthConfig);
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
    get accessTokenTrustedIps(): IdentityKubernetesAuthAccessTokenTrustedIpsList;
    putAccessTokenTrustedIps(value: IdentityKubernetesAuthAccessTokenTrustedIps[] | cdktf.IResolvable): void;
    resetAccessTokenTrustedIps(): void;
    get accessTokenTrustedIpsInput(): any;
    private _accessTokenTtl?;
    get accessTokenTtl(): number;
    set accessTokenTtl(value: number);
    resetAccessTokenTtl(): void;
    get accessTokenTtlInput(): number;
    private _allowedAudience?;
    get allowedAudience(): string;
    set allowedAudience(value: string);
    resetAllowedAudience(): void;
    get allowedAudienceInput(): string;
    private _allowedNamespaces?;
    get allowedNamespaces(): string[];
    set allowedNamespaces(value: string[]);
    resetAllowedNamespaces(): void;
    get allowedNamespacesInput(): string[];
    private _allowedServiceAccountNames?;
    get allowedServiceAccountNames(): string[];
    set allowedServiceAccountNames(value: string[]);
    resetAllowedServiceAccountNames(): void;
    get allowedServiceAccountNamesInput(): string[];
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string;
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _kubernetesCaCertificate?;
    get kubernetesCaCertificate(): string;
    set kubernetesCaCertificate(value: string);
    resetKubernetesCaCertificate(): void;
    get kubernetesCaCertificateInput(): string;
    private _kubernetesHost?;
    get kubernetesHost(): string;
    set kubernetesHost(value: string);
    resetKubernetesHost(): void;
    get kubernetesHostInput(): string;
    private _tokenReviewerJwt?;
    get tokenReviewerJwt(): string;
    set tokenReviewerJwt(value: string);
    resetTokenReviewerJwt(): void;
    get tokenReviewerJwtInput(): string;
    private _tokenReviewerMode?;
    get tokenReviewerMode(): string;
    set tokenReviewerMode(value: string);
    resetTokenReviewerMode(): void;
    get tokenReviewerModeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
