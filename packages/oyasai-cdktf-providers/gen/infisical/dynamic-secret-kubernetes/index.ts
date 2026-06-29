// https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#configuration DynamicSecretKubernetes#configuration}
  */
  readonly configuration: DynamicSecretKubernetesConfiguration;
  /**
  * The default TTL that will be applied for all the leases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#default_ttl DynamicSecretKubernetes#default_ttl}
  */
  readonly defaultTtl: string;
  /**
  * The slug of the environment to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#environment_slug DynamicSecretKubernetes#environment_slug}
  */
  readonly environmentSlug: string;
  /**
  * The maximum limit a TTL can be leased or renewed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#max_ttl DynamicSecretKubernetes#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * The metadata associated with this dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#metadata DynamicSecretKubernetes#metadata}
  */
  readonly metadata?: DynamicSecretKubernetesMetadata[] | cdktf.IResolvable;
  /**
  * The name of the dynamic secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#name DynamicSecretKubernetes#name}
  */
  readonly name: string;
  /**
  * The path to create the dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#path DynamicSecretKubernetes#path}
  */
  readonly path: string;
  /**
  * The slug of the project to create dynamic secret in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#project_slug DynamicSecretKubernetes#project_slug}
  */
  readonly projectSlug: string;
  /**
  * The username template of the dynamic secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#username_template DynamicSecretKubernetes#username_template}
  */
  readonly usernameTemplate?: string;
}
export interface DynamicSecretKubernetesConfigurationApiConfig {
  /**
  * Custom CA certificate for the Kubernetes API server. Leave blank to use the system/public CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#ca DynamicSecretKubernetes#ca}
  */
  readonly ca?: string;
  /**
  * Service account token with permissions to create service accounts and manage RBAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#cluster_token DynamicSecretKubernetes#cluster_token}
  */
  readonly clusterToken: string;
  /**
  * Kubernetes API server URL (e.g., https://kubernetes.default.svc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#cluster_url DynamicSecretKubernetes#cluster_url}
  */
  readonly clusterUrl: string;
  /**
  * Whether to enable SSL verification for the Kubernetes API server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#enable_ssl DynamicSecretKubernetes#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
}

export function dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct?: DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    cluster_token: cdktf.stringToTerraform(struct!.clusterToken),
    cluster_url: cdktf.stringToTerraform(struct!.clusterUrl),
    enable_ssl: cdktf.booleanToTerraform(struct!.enableSsl),
  }
}


export function dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct?: DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_token: {
      value: cdktf.stringToHclTerraform(struct!.clusterToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_url: {
      value: cdktf.stringToHclTerraform(struct!.clusterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretKubernetesConfigurationApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._clusterToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterToken = this._clusterToken;
    }
    if (this._clusterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUrl = this._clusterUrl;
    }
    if (this._enableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsl = this._enableSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._clusterToken = undefined;
      this._clusterUrl = undefined;
      this._enableSsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._clusterToken = value.clusterToken;
      this._clusterUrl = value.clusterUrl;
      this._enableSsl = value.enableSsl;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cluster_token - computed: false, optional: false, required: true
  private _clusterToken?: string; 
  public get clusterToken() {
    return this.getStringAttribute('cluster_token');
  }
  public set clusterToken(value: string) {
    this._clusterToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTokenInput() {
    return this._clusterToken;
  }

  // cluster_url - computed: false, optional: false, required: true
  private _clusterUrl?: string; 
  public get clusterUrl() {
    return this.getStringAttribute('cluster_url');
  }
  public set clusterUrl(value: string) {
    this._clusterUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUrlInput() {
    return this._clusterUrl;
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }
}
export interface DynamicSecretKubernetesConfigurationDynamicConfig {
  /**
  * Kubernetes namespace(s) where the service accounts will be created. You can specify multiple namespaces as a comma-separated list (e.g., “default,kube-system”). During lease creation, you can specify which namespace to use from this allowed list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#allowed_namespaces DynamicSecretKubernetes#allowed_namespaces}
  */
  readonly allowedNamespaces: string;
  /**
  * Name of the role to assign to the temporary service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#role DynamicSecretKubernetes#role}
  */
  readonly role: string;
  /**
  * Type of role to assign ('cluster-role' or 'role').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#role_type DynamicSecretKubernetes#role_type}
  */
  readonly roleType: string;
}

export function dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct?: DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_namespaces: cdktf.stringToTerraform(struct!.allowedNamespaces),
    role: cdktf.stringToTerraform(struct!.role),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}


export function dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct?: DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_namespaces: {
      value: cdktf.stringToHclTerraform(struct!.allowedNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretKubernetesConfigurationDynamicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedNamespaces = this._allowedNamespaces;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedNamespaces = undefined;
      this._role = undefined;
      this._roleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedNamespaces = value.allowedNamespaces;
      this._role = value.role;
      this._roleType = value.roleType;
    }
  }

  // allowed_namespaces - computed: false, optional: false, required: true
  private _allowedNamespaces?: string; 
  public get allowedNamespaces() {
    return this.getStringAttribute('allowed_namespaces');
  }
  public set allowedNamespaces(value: string) {
    this._allowedNamespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamespacesInput() {
    return this._allowedNamespaces;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }
}
export interface DynamicSecretKubernetesConfigurationStaticConfig {
  /**
  * Kubernetes namespace where the service account exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#namespace DynamicSecretKubernetes#namespace}
  */
  readonly namespace: string;
  /**
  * Name of the service account to generate tokens for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#service_account_name DynamicSecretKubernetes#service_account_name}
  */
  readonly serviceAccountName: string;
}

export function dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct?: DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct?: DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretKubernetesConfigurationStaticConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service_account_name - computed: false, optional: false, required: true
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface DynamicSecretKubernetesConfiguration {
  /**
  * Configuration for the 'api' authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#api_config DynamicSecretKubernetes#api_config}
  */
  readonly apiConfig?: DynamicSecretKubernetesConfigurationApiConfig;
  /**
  * Optional list of audiences to include in the generated token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#audiences DynamicSecretKubernetes#audiences}
  */
  readonly audiences?: string[];
  /**
  * Choose between Token ('api') or 'gateway' authentication. If using Gateway, the Gateway must be deployed in your Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#auth_method DynamicSecretKubernetes#auth_method}
  */
  readonly authMethod: string;
  /**
  * Choose between 'static' (predefined service account) or 'dynamic' (temporary service accounts with role assignments).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#credential_type DynamicSecretKubernetes#credential_type}
  */
  readonly credentialType: string;
  /**
  * Configuration for the 'dynamic' credential type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#dynamic_config DynamicSecretKubernetes#dynamic_config}
  */
  readonly dynamicConfig?: DynamicSecretKubernetesConfigurationDynamicConfig;
  /**
  * Select a gateway for private cluster access. If not specified, the Internet Gateway will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#gateway_id DynamicSecretKubernetes#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Configuration for the 'static' credential type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#static_config DynamicSecretKubernetes#static_config}
  */
  readonly staticConfig?: DynamicSecretKubernetesConfigurationStaticConfig;
}

export function dynamicSecretKubernetesConfigurationToTerraform(struct?: DynamicSecretKubernetesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_config: dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct!.apiConfig),
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    dynamic_config: dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct!.dynamicConfig),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    static_config: dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct!.staticConfig),
  }
}


export function dynamicSecretKubernetesConfigurationToHclTerraform(struct?: DynamicSecretKubernetesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_config: {
      value: dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct!.apiConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretKubernetesConfigurationApiConfig",
    },
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_config: {
      value: dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct!.dynamicConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretKubernetesConfigurationDynamicConfig",
    },
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_config: {
      value: dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct!.staticConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamicSecretKubernetesConfigurationStaticConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretKubernetesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicSecretKubernetesConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiConfig = this._apiConfig?.internalValue;
    }
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._dynamicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicConfig = this._dynamicConfig?.internalValue;
    }
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._staticConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticConfig = this._staticConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretKubernetesConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiConfig.internalValue = undefined;
      this._audiences = undefined;
      this._authMethod = undefined;
      this._credentialType = undefined;
      this._dynamicConfig.internalValue = undefined;
      this._gatewayId = undefined;
      this._staticConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiConfig.internalValue = value.apiConfig;
      this._audiences = value.audiences;
      this._authMethod = value.authMethod;
      this._credentialType = value.credentialType;
      this._dynamicConfig.internalValue = value.dynamicConfig;
      this._gatewayId = value.gatewayId;
      this._staticConfig.internalValue = value.staticConfig;
    }
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig = new DynamicSecretKubernetesConfigurationApiConfigOutputReference(this, "api_config");
  public get apiConfig() {
    return this._apiConfig;
  }
  public putApiConfig(value: DynamicSecretKubernetesConfigurationApiConfig) {
    this._apiConfig.internalValue = value;
  }
  public resetApiConfig() {
    this._apiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigInput() {
    return this._apiConfig.internalValue;
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // dynamic_config - computed: false, optional: true, required: false
  private _dynamicConfig = new DynamicSecretKubernetesConfigurationDynamicConfigOutputReference(this, "dynamic_config");
  public get dynamicConfig() {
    return this._dynamicConfig;
  }
  public putDynamicConfig(value: DynamicSecretKubernetesConfigurationDynamicConfig) {
    this._dynamicConfig.internalValue = value;
  }
  public resetDynamicConfig() {
    this._dynamicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicConfigInput() {
    return this._dynamicConfig.internalValue;
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

  // static_config - computed: false, optional: true, required: false
  private _staticConfig = new DynamicSecretKubernetesConfigurationStaticConfigOutputReference(this, "static_config");
  public get staticConfig() {
    return this._staticConfig;
  }
  public putStaticConfig(value: DynamicSecretKubernetesConfigurationStaticConfig) {
    this._staticConfig.internalValue = value;
  }
  public resetStaticConfig() {
    this._staticConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticConfigInput() {
    return this._staticConfig.internalValue;
  }
}
export interface DynamicSecretKubernetesMetadata {
  /**
  * The key of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#key DynamicSecretKubernetes#key}
  */
  readonly key: string;
  /**
  * The value of the metadata object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#value DynamicSecretKubernetes#value}
  */
  readonly value: string;
}

export function dynamicSecretKubernetesMetadataToTerraform(struct?: DynamicSecretKubernetesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynamicSecretKubernetesMetadataToHclTerraform(struct?: DynamicSecretKubernetesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicSecretKubernetesMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamicSecretKubernetesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicSecretKubernetesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DynamicSecretKubernetesMetadataList extends cdktf.ComplexList {
  public internalValue? : DynamicSecretKubernetesMetadata[] | cdktf.IResolvable

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
  public get(index: number): DynamicSecretKubernetesMetadataOutputReference {
    return new DynamicSecretKubernetesMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes}
*/
export class DynamicSecretKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_dynamic_secret_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretKubernetes to import
  * @param importFromId The id of the existing DynamicSecretKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_dynamic_secret_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._defaultTtl = config.defaultTtl;
    this._environmentSlug = config.environmentSlug;
    this._maxTtl = config.maxTtl;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._path = config.path;
    this._projectSlug = config.projectSlug;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DynamicSecretKubernetesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DynamicSecretKubernetesConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // default_ttl - computed: false, optional: false, required: true
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // environment_slug - computed: false, optional: false, required: true
  private _environmentSlug?: string; 
  public get environmentSlug() {
    return this.getStringAttribute('environment_slug');
  }
  public set environmentSlug(value: string) {
    this._environmentSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugInput() {
    return this._environmentSlug;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DynamicSecretKubernetesMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DynamicSecretKubernetesMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // project_slug - computed: false, optional: false, required: true
  private _projectSlug?: string; 
  public get projectSlug() {
    return this.getStringAttribute('project_slug');
  }
  public set projectSlug(value: string) {
    this._projectSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSlugInput() {
    return this._projectSlug;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: dynamicSecretKubernetesConfigurationToTerraform(this._configuration.internalValue),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      environment_slug: cdktf.stringToTerraform(this._environmentSlug),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      metadata: cdktf.listMapper(dynamicSecretKubernetesMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: dynamicSecretKubernetesConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicSecretKubernetesConfiguration",
      },
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_slug: {
        value: cdktf.stringToHclTerraform(this._environmentSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(dynamicSecretKubernetesMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamicSecretKubernetesMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_slug: {
        value: cdktf.stringToHclTerraform(this._projectSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_template: {
        value: cdktf.stringToHclTerraform(this._usernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
