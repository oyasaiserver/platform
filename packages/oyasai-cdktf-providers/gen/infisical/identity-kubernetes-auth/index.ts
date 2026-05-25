// https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityKubernetesAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#access_token_max_ttl IdentityKubernetesAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#access_token_num_uses_limit IdentityKubernetesAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#access_token_trusted_ips IdentityKubernetesAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityKubernetesAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#access_token_ttl IdentityKubernetesAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * An optional audience claim that the service account JWT token must have to authenticate with Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#allowed_audience IdentityKubernetesAuth#allowed_audience}
  */
  readonly allowedAudience?: string;
  /**
  * List of trusted namespaces that service accounts must belong to authenticate with Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#allowed_namespaces IdentityKubernetesAuth#allowed_namespaces}
  */
  readonly allowedNamespaces?: string[];
  /**
  * List of trusted service account names that are allowed to authenticate with Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#allowed_service_account_names IdentityKubernetesAuth#allowed_service_account_names}
  */
  readonly allowedServiceAccountNames?: string[];
  /**
  * Select a gateway for private cluster access. If not specified, the Internet Gateway will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#gateway_id IdentityKubernetesAuth#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#identity_id IdentityKubernetesAuth#identity_id}
  */
  readonly identityId: string;
  /**
  * The PEM-encoded CA cert for the Kubernetes API server. This is used by the TLS client for secure communication with the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#kubernetes_ca_certificate IdentityKubernetesAuth#kubernetes_ca_certificate}
  */
  readonly kubernetesCaCertificate?: string;
  /**
  * The host string, host:port pair, or URL to the base of the Kubernetes API server. This can usually be obtained by running `kubectl cluster-info`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#kubernetes_host IdentityKubernetesAuth#kubernetes_host}
  */
  readonly kubernetesHost?: string;
  /**
  * A long-lived service account JWT token for Infisical to access the [TokenReview API](https://kubernetes.io/docs/reference/kubernetes-api/authentication-resources/token-review-v1/) to validate other service account JWT tokens submitted by applications/pods. This is the JWT token obtained from step 1.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#token_reviewer_jwt IdentityKubernetesAuth#token_reviewer_jwt}
  */
  readonly tokenReviewerJwt?: string;
  /**
  * Choose between Token ('api') or 'gateway' authentication. If using Gateway, the Gateway must be deployed in your Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#token_reviewer_mode IdentityKubernetesAuth#token_reviewer_mode}
  */
  readonly tokenReviewerMode?: string;
}
export interface IdentityKubernetesAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#ip_address IdentityKubernetesAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityKubernetesAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityKubernetesAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class IdentityKubernetesAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityKubernetesAuthAccessTokenTrustedIps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth}
*/
export class IdentityKubernetesAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_kubernetes_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityKubernetesAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityKubernetesAuth to import
  * @param importFromId The id of the existing IdentityKubernetesAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityKubernetesAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_kubernetes_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityKubernetesAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityKubernetesAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_kubernetes_auth',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenMaxTtl = config.accessTokenMaxTtl;
    this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
    this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
    this._accessTokenTtl = config.accessTokenTtl;
    this._allowedAudience = config.allowedAudience;
    this._allowedNamespaces = config.allowedNamespaces;
    this._allowedServiceAccountNames = config.allowedServiceAccountNames;
    this._gatewayId = config.gatewayId;
    this._identityId = config.identityId;
    this._kubernetesCaCertificate = config.kubernetesCaCertificate;
    this._kubernetesHost = config.kubernetesHost;
    this._tokenReviewerJwt = config.tokenReviewerJwt;
    this._tokenReviewerMode = config.tokenReviewerMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_max_ttl - computed: true, optional: true, required: false
  private _accessTokenMaxTtl?: number; 
  public get accessTokenMaxTtl() {
    return this.getNumberAttribute('access_token_max_ttl');
  }
  public set accessTokenMaxTtl(value: number) {
    this._accessTokenMaxTtl = value;
  }
  public resetAccessTokenMaxTtl() {
    this._accessTokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenMaxTtlInput() {
    return this._accessTokenMaxTtl;
  }

  // access_token_num_uses_limit - computed: true, optional: true, required: false
  private _accessTokenNumUsesLimit?: number; 
  public get accessTokenNumUsesLimit() {
    return this.getNumberAttribute('access_token_num_uses_limit');
  }
  public set accessTokenNumUsesLimit(value: number) {
    this._accessTokenNumUsesLimit = value;
  }
  public resetAccessTokenNumUsesLimit() {
    this._accessTokenNumUsesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenNumUsesLimitInput() {
    return this._accessTokenNumUsesLimit;
  }

  // access_token_trusted_ips - computed: true, optional: true, required: false
  private _accessTokenTrustedIps = new IdentityKubernetesAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityKubernetesAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
    this._accessTokenTrustedIps.internalValue = value;
  }
  public resetAccessTokenTrustedIps() {
    this._accessTokenTrustedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTrustedIpsInput() {
    return this._accessTokenTrustedIps.internalValue;
  }

  // access_token_ttl - computed: true, optional: true, required: false
  private _accessTokenTtl?: number; 
  public get accessTokenTtl() {
    return this.getNumberAttribute('access_token_ttl');
  }
  public set accessTokenTtl(value: number) {
    this._accessTokenTtl = value;
  }
  public resetAccessTokenTtl() {
    this._accessTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTtlInput() {
    return this._accessTokenTtl;
  }

  // allowed_audience - computed: true, optional: true, required: false
  private _allowedAudience?: string; 
  public get allowedAudience() {
    return this.getStringAttribute('allowed_audience');
  }
  public set allowedAudience(value: string) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_namespaces - computed: true, optional: true, required: false
  private _allowedNamespaces?: string[]; 
  public get allowedNamespaces() {
    return this.getListAttribute('allowed_namespaces');
  }
  public set allowedNamespaces(value: string[]) {
    this._allowedNamespaces = value;
  }
  public resetAllowedNamespaces() {
    this._allowedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamespacesInput() {
    return this._allowedNamespaces;
  }

  // allowed_service_account_names - computed: true, optional: true, required: false
  private _allowedServiceAccountNames?: string[]; 
  public get allowedServiceAccountNames() {
    return this.getListAttribute('allowed_service_account_names');
  }
  public set allowedServiceAccountNames(value: string[]) {
    this._allowedServiceAccountNames = value;
  }
  public resetAllowedServiceAccountNames() {
    this._allowedServiceAccountNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServiceAccountNamesInput() {
    return this._allowedServiceAccountNames;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // kubernetes_ca_certificate - computed: true, optional: true, required: false
  private _kubernetesCaCertificate?: string; 
  public get kubernetesCaCertificate() {
    return this.getStringAttribute('kubernetes_ca_certificate');
  }
  public set kubernetesCaCertificate(value: string) {
    this._kubernetesCaCertificate = value;
  }
  public resetKubernetesCaCertificate() {
    this._kubernetesCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesCaCertificateInput() {
    return this._kubernetesCaCertificate;
  }

  // kubernetes_host - computed: false, optional: true, required: false
  private _kubernetesHost?: string; 
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }
  public set kubernetesHost(value: string) {
    this._kubernetesHost = value;
  }
  public resetKubernetesHost() {
    this._kubernetesHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesHostInput() {
    return this._kubernetesHost;
  }

  // token_reviewer_jwt - computed: false, optional: true, required: false
  private _tokenReviewerJwt?: string; 
  public get tokenReviewerJwt() {
    return this.getStringAttribute('token_reviewer_jwt');
  }
  public set tokenReviewerJwt(value: string) {
    this._tokenReviewerJwt = value;
  }
  public resetTokenReviewerJwt() {
    this._tokenReviewerJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewerJwtInput() {
    return this._tokenReviewerJwt;
  }

  // token_reviewer_mode - computed: true, optional: true, required: false
  private _tokenReviewerMode?: string; 
  public get tokenReviewerMode() {
    return this.getStringAttribute('token_reviewer_mode');
  }
  public set tokenReviewerMode(value: string) {
    this._tokenReviewerMode = value;
  }
  public resetTokenReviewerMode() {
    this._tokenReviewerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewerModeInput() {
    return this._tokenReviewerMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityKubernetesAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      allowed_audience: cdktf.stringToTerraform(this._allowedAudience),
      allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNamespaces),
      allowed_service_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccountNames),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      identity_id: cdktf.stringToTerraform(this._identityId),
      kubernetes_ca_certificate: cdktf.stringToTerraform(this._kubernetesCaCertificate),
      kubernetes_host: cdktf.stringToTerraform(this._kubernetesHost),
      token_reviewer_jwt: cdktf.stringToTerraform(this._tokenReviewerJwt),
      token_reviewer_mode: cdktf.stringToTerraform(this._tokenReviewerMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_max_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_token_num_uses_limit: {
        value: cdktf.numberToHclTerraform(this._accessTokenNumUsesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_token_trusted_ips: {
        value: cdktf.listMapperHcl(identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityKubernetesAuthAccessTokenTrustedIpsList",
      },
      access_token_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_audience: {
        value: cdktf.stringToHclTerraform(this._allowedAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNamespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_service_account_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccountNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._kubernetesCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_host: {
        value: cdktf.stringToHclTerraform(this._kubernetesHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_reviewer_jwt: {
        value: cdktf.stringToHclTerraform(this._tokenReviewerJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_reviewer_mode: {
        value: cdktf.stringToHclTerraform(this._tokenReviewerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
