// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authenticate the gateway with its AWS IAM identity. The machine re-authenticates on every start, so no secret is stored. At least one of `allowed_principal_arns` or `allowed_account_ids` must be non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#aws_auth Gateway#aws_auth}
  */
  readonly awsAuth?: GatewayAwsAuth;
  /**
  * Authenticate the gateway with its GCP identity. The machine re-authenticates on every start, so no secret is stored. At least one of `allowed_service_accounts` or `allowed_projects` must be non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#gcp_auth Gateway#gcp_auth}
  */
  readonly gcpAuth?: GatewayGcpAuth;
  /**
  * Authenticate the gateway with its Kubernetes service account token. The pod re-authenticates on every start, so no secret is stored. At least one of `allowed_namespaces` or `allowed_service_account_names` must be non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#kubernetes_auth Gateway#kubernetes_auth}
  */
  readonly kubernetesAuth?: GatewayKubernetesAuth;
  /**
  * The name of the gateway. Unique within the organization. Renaming is an in-place update, so the gateway keeps its ID and anything referencing it keeps working.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * Authenticate the gateway with a one-time enrollment token. The token itself is minted by a separate `infisical_gateway_enrollment_token` resource. This block takes no arguments, because token auth has nothing to configure: write `token_auth = {}`. Prefer `aws_auth`, `gcp_auth` or `kubernetes_auth` where the platform can vouch for the machine, since those re-authenticate on every start and put no secret in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#token_auth Gateway#token_auth}
  */
  readonly tokenAuth?: GatewayTokenAuth;
}
export interface GatewayAwsAuth {
  /**
  * AWS account IDs allowed to authenticate as this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_account_ids Gateway#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * IAM principal ARNs allowed to authenticate as this gateway. Supports `*` wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_principal_arns Gateway#allowed_principal_arns}
  */
  readonly allowedPrincipalArns?: string[];
}

export function gatewayAwsAuthToTerraform(struct?: GatewayAwsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAccountIds),
    allowed_principal_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPrincipalArns),
  }
}


export function gatewayAwsAuthToHclTerraform(struct?: GatewayAwsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAccountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_principal_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPrincipalArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayAwsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayAwsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAccountIds = this._allowedAccountIds;
    }
    if (this._allowedPrincipalArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPrincipalArns = this._allowedPrincipalArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayAwsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAccountIds = undefined;
      this._allowedPrincipalArns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAccountIds = value.allowedAccountIds;
      this._allowedPrincipalArns = value.allowedPrincipalArns;
    }
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_account_ids'));
  }
  public set allowedAccountIds(value: string[]) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // allowed_principal_arns - computed: false, optional: true, required: false
  private _allowedPrincipalArns?: string[]; 
  public get allowedPrincipalArns() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_principal_arns'));
  }
  public set allowedPrincipalArns(value: string[]) {
    this._allowedPrincipalArns = value;
  }
  public resetAllowedPrincipalArns() {
    this._allowedPrincipalArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalArnsInput() {
    return this._allowedPrincipalArns;
  }
}
export interface GatewayGcpAuth {
  /**
  * GCP project IDs whose Compute Engine instances are allowed to authenticate as this gateway. Only applies when `type` is `gce`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_projects Gateway#allowed_projects}
  */
  readonly allowedProjects?: string[];
  /**
  * GCP service account emails allowed to authenticate as this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_service_accounts Gateway#allowed_service_accounts}
  */
  readonly allowedServiceAccounts?: string[];
  /**
  * GCP zones whose Compute Engine instances are allowed to authenticate as this gateway. Only applies when `type` is `gce`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_zones Gateway#allowed_zones}
  */
  readonly allowedZones?: string[];
  /**
  * How the gateway proves its identity. `gce` verifies an ID token from the instance metadata server, which covers Compute Engine VMs and GKE workload identity. `iam` verifies a JWT the service account signed through the IAM Credentials API, for hosts outside Compute Engine. Defaults to `gce`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#type Gateway#type}
  */
  readonly type?: string;
}

export function gatewayGcpAuthToTerraform(struct?: GatewayGcpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProjects),
    allowed_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServiceAccounts),
    allowed_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedZones),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayGcpAuthToHclTerraform(struct?: GatewayGcpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServiceAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayGcpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayGcpAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProjects = this._allowedProjects;
    }
    if (this._allowedServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServiceAccounts = this._allowedServiceAccounts;
    }
    if (this._allowedZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedZones = this._allowedZones;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayGcpAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedProjects = undefined;
      this._allowedServiceAccounts = undefined;
      this._allowedZones = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedProjects = value.allowedProjects;
      this._allowedServiceAccounts = value.allowedServiceAccounts;
      this._allowedZones = value.allowedZones;
      this._type = value.type;
    }
  }

  // allowed_projects - computed: false, optional: true, required: false
  private _allowedProjects?: string[]; 
  public get allowedProjects() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_projects'));
  }
  public set allowedProjects(value: string[]) {
    this._allowedProjects = value;
  }
  public resetAllowedProjects() {
    this._allowedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProjectsInput() {
    return this._allowedProjects;
  }

  // allowed_service_accounts - computed: false, optional: true, required: false
  private _allowedServiceAccounts?: string[]; 
  public get allowedServiceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_service_accounts'));
  }
  public set allowedServiceAccounts(value: string[]) {
    this._allowedServiceAccounts = value;
  }
  public resetAllowedServiceAccounts() {
    this._allowedServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServiceAccountsInput() {
    return this._allowedServiceAccounts;
  }

  // allowed_zones - computed: false, optional: true, required: false
  private _allowedZones?: string[]; 
  public get allowedZones() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_zones'));
  }
  public set allowedZones(value: string[]) {
    this._allowedZones = value;
  }
  public resetAllowedZones() {
    this._allowedZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedZonesInput() {
    return this._allowedZones;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GatewayKubernetesAuth {
  /**
  * The audience the service account token must carry. Leave empty to skip the audience check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_audience Gateway#allowed_audience}
  */
  readonly allowedAudience?: string;
  /**
  * Kubernetes namespaces whose service accounts are allowed to authenticate as this gateway. Supports `*` wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_namespaces Gateway#allowed_namespaces}
  */
  readonly allowedNamespaces?: string[];
  /**
  * Kubernetes service account names allowed to authenticate as this gateway. Supports `*` wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#allowed_service_account_names Gateway#allowed_service_account_names}
  */
  readonly allowedServiceAccountNames?: string[];
  /**
  * The PEM-encoded CA certificate that issued the Kubernetes API server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#ca_certificate Gateway#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * The URL of the Kubernetes API server, for example https://my-cluster.example.com:6443. Must be https with no path, and reachable from Infisical over the public internet. Required unless `token_review_mode` is `gateway`, where it must be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#kubernetes_host Gateway#kubernetes_host}
  */
  readonly kubernetesHost?: string;
  /**
  * The gateway that performs the TokenReview. Required when `token_review_mode` is `gateway`, and must be a different gateway that is already connected in the cluster. Mutually exclusive with `reviewer_gateway_pool_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#reviewer_gateway_id Gateway#reviewer_gateway_id}
  */
  readonly reviewerGatewayId?: string;
  /**
  * The gateway pool to route TokenReview traffic through. Mutually exclusive with `reviewer_gateway_id`, and rejected when `token_review_mode` is `gateway`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#reviewer_gateway_pool_id Gateway#reviewer_gateway_pool_id}
  */
  readonly reviewerGatewayPoolId?: string;
  /**
  * Who performs the TokenReview. `api` means Infisical does, calling `kubernetes_host` directly. `gateway` means another already-connected gateway does it with its own in-cluster service account, which needs no host or reviewer token. Defaults to `api`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#token_review_mode Gateway#token_review_mode}
  */
  readonly tokenReviewMode?: string;
  /**
  * A long-lived service account token with the system:auth-delegator ClusterRole, used to submit TokenReview requests. Write-only: Infisical never returns it, so Terraform cannot detect a change made outside this configuration, and an imported gateway leaves it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#token_reviewer_jwt Gateway#token_reviewer_jwt}
  */
  readonly tokenReviewerJwt?: string;
  /**
  * Whether to verify the Kubernetes API server's TLS certificate. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#verify_tls_certificate Gateway#verify_tls_certificate}
  */
  readonly verifyTlsCertificate?: boolean | cdktf.IResolvable;
}

export function gatewayKubernetesAuthToTerraform(struct?: GatewayKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audience: cdktf.stringToTerraform(struct!.allowedAudience),
    allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedNamespaces),
    allowed_service_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServiceAccountNames),
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    kubernetes_host: cdktf.stringToTerraform(struct!.kubernetesHost),
    reviewer_gateway_id: cdktf.stringToTerraform(struct!.reviewerGatewayId),
    reviewer_gateway_pool_id: cdktf.stringToTerraform(struct!.reviewerGatewayPoolId),
    token_review_mode: cdktf.stringToTerraform(struct!.tokenReviewMode),
    token_reviewer_jwt: cdktf.stringToTerraform(struct!.tokenReviewerJwt),
    verify_tls_certificate: cdktf.booleanToTerraform(struct!.verifyTlsCertificate),
  }
}


export function gatewayKubernetesAuthToHclTerraform(struct?: GatewayKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audience: {
      value: cdktf.stringToHclTerraform(struct!.allowedAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedNamespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_service_account_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServiceAccountNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_host: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.reviewerGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewer_gateway_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.reviewerGatewayPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_review_mode: {
      value: cdktf.stringToHclTerraform(struct!.tokenReviewMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_reviewer_jwt: {
      value: cdktf.stringToHclTerraform(struct!.tokenReviewerJwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTlsCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayKubernetesAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayKubernetesAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedNamespaces = this._allowedNamespaces;
    }
    if (this._allowedServiceAccountNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServiceAccountNames = this._allowedServiceAccountNames;
    }
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._kubernetesHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesHost = this._kubernetesHost;
    }
    if (this._reviewerGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerGatewayId = this._reviewerGatewayId;
    }
    if (this._reviewerGatewayPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerGatewayPoolId = this._reviewerGatewayPoolId;
    }
    if (this._tokenReviewMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenReviewMode = this._tokenReviewMode;
    }
    if (this._tokenReviewerJwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenReviewerJwt = this._tokenReviewerJwt;
    }
    if (this._verifyTlsCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTlsCertificate = this._verifyTlsCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayKubernetesAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedNamespaces = undefined;
      this._allowedServiceAccountNames = undefined;
      this._caCertificate = undefined;
      this._kubernetesHost = undefined;
      this._reviewerGatewayId = undefined;
      this._reviewerGatewayPoolId = undefined;
      this._tokenReviewMode = undefined;
      this._tokenReviewerJwt = undefined;
      this._verifyTlsCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedNamespaces = value.allowedNamespaces;
      this._allowedServiceAccountNames = value.allowedServiceAccountNames;
      this._caCertificate = value.caCertificate;
      this._kubernetesHost = value.kubernetesHost;
      this._reviewerGatewayId = value.reviewerGatewayId;
      this._reviewerGatewayPoolId = value.reviewerGatewayPoolId;
      this._tokenReviewMode = value.tokenReviewMode;
      this._tokenReviewerJwt = value.tokenReviewerJwt;
      this._verifyTlsCertificate = value.verifyTlsCertificate;
    }
  }

  // allowed_audience - computed: false, optional: true, required: false
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

  // allowed_namespaces - computed: false, optional: true, required: false
  private _allowedNamespaces?: string[]; 
  public get allowedNamespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_namespaces'));
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

  // allowed_service_account_names - computed: false, optional: true, required: false
  private _allowedServiceAccountNames?: string[]; 
  public get allowedServiceAccountNames() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_service_account_names'));
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

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // has_token_reviewer_jwt - computed: true, optional: false, required: false
  public get hasTokenReviewerJwt() {
    return this.getBooleanAttribute('has_token_reviewer_jwt');
  }

  // kubernetes_host - computed: true, optional: true, required: false
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

  // reviewer_gateway_id - computed: false, optional: true, required: false
  private _reviewerGatewayId?: string; 
  public get reviewerGatewayId() {
    return this.getStringAttribute('reviewer_gateway_id');
  }
  public set reviewerGatewayId(value: string) {
    this._reviewerGatewayId = value;
  }
  public resetReviewerGatewayId() {
    this._reviewerGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerGatewayIdInput() {
    return this._reviewerGatewayId;
  }

  // reviewer_gateway_pool_id - computed: false, optional: true, required: false
  private _reviewerGatewayPoolId?: string; 
  public get reviewerGatewayPoolId() {
    return this.getStringAttribute('reviewer_gateway_pool_id');
  }
  public set reviewerGatewayPoolId(value: string) {
    this._reviewerGatewayPoolId = value;
  }
  public resetReviewerGatewayPoolId() {
    this._reviewerGatewayPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerGatewayPoolIdInput() {
    return this._reviewerGatewayPoolId;
  }

  // token_review_mode - computed: true, optional: true, required: false
  private _tokenReviewMode?: string; 
  public get tokenReviewMode() {
    return this.getStringAttribute('token_review_mode');
  }
  public set tokenReviewMode(value: string) {
    this._tokenReviewMode = value;
  }
  public resetTokenReviewMode() {
    this._tokenReviewMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewModeInput() {
    return this._tokenReviewMode;
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

  // verify_tls_certificate - computed: true, optional: true, required: false
  private _verifyTlsCertificate?: boolean | cdktf.IResolvable; 
  public get verifyTlsCertificate() {
    return this.getBooleanAttribute('verify_tls_certificate');
  }
  public set verifyTlsCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyTlsCertificate = value;
  }
  public resetVerifyTlsCertificate() {
    this._verifyTlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsCertificateInput() {
    return this._verifyTlsCertificate;
  }
}
export interface GatewayTokenAuth {
}

export function gatewayTokenAuthToTerraform(struct?: GatewayTokenAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayTokenAuthToHclTerraform(struct?: GatewayTokenAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayTokenAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayTokenAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayTokenAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway infisical_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/gateway infisical_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_gateway',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAuth.internalValue = config.awsAuth;
    this._gcpAuth.internalValue = config.gcpAuth;
    this._kubernetesAuth.internalValue = config.kubernetesAuth;
    this._name = config.name;
    this._tokenAuth.internalValue = config.tokenAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_auth - computed: false, optional: true, required: false
  private _awsAuth = new GatewayAwsAuthOutputReference(this, "aws_auth");
  public get awsAuth() {
    return this._awsAuth;
  }
  public putAwsAuth(value: GatewayAwsAuth) {
    this._awsAuth.internalValue = value;
  }
  public resetAwsAuth() {
    this._awsAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthInput() {
    return this._awsAuth.internalValue;
  }

  // gcp_auth - computed: false, optional: true, required: false
  private _gcpAuth = new GatewayGcpAuthOutputReference(this, "gcp_auth");
  public get gcpAuth() {
    return this._gcpAuth;
  }
  public putGcpAuth(value: GatewayGcpAuth) {
    this._gcpAuth.internalValue = value;
  }
  public resetGcpAuth() {
    this._gcpAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAuthInput() {
    return this._gcpAuth.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_auth - computed: false, optional: true, required: false
  private _kubernetesAuth = new GatewayKubernetesAuthOutputReference(this, "kubernetes_auth");
  public get kubernetesAuth() {
    return this._kubernetesAuth;
  }
  public putKubernetesAuth(value: GatewayKubernetesAuth) {
    this._kubernetesAuth.internalValue = value;
  }
  public resetKubernetesAuth() {
    this._kubernetesAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuthInput() {
    return this._kubernetesAuth.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // token_auth - computed: false, optional: true, required: false
  private _tokenAuth = new GatewayTokenAuthOutputReference(this, "token_auth");
  public get tokenAuth() {
    return this._tokenAuth;
  }
  public putTokenAuth(value: GatewayTokenAuth) {
    this._tokenAuth.internalValue = value;
  }
  public resetTokenAuth() {
    this._tokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthInput() {
    return this._tokenAuth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_auth: gatewayAwsAuthToTerraform(this._awsAuth.internalValue),
      gcp_auth: gatewayGcpAuthToTerraform(this._gcpAuth.internalValue),
      kubernetes_auth: gatewayKubernetesAuthToTerraform(this._kubernetesAuth.internalValue),
      name: cdktf.stringToTerraform(this._name),
      token_auth: gatewayTokenAuthToTerraform(this._tokenAuth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_auth: {
        value: gatewayAwsAuthToHclTerraform(this._awsAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayAwsAuth",
      },
      gcp_auth: {
        value: gatewayGcpAuthToHclTerraform(this._gcpAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayGcpAuth",
      },
      kubernetes_auth: {
        value: gatewayKubernetesAuthToHclTerraform(this._kubernetesAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayKubernetesAuth",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_auth: {
        value: gatewayTokenAuthToHclTerraform(this._tokenAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayTokenAuth",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
