import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamicSecretKubernetesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The configuration of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#configuration DynamicSecretKubernetes#configuration}
    */
    readonly configuration: DynamicSecretKubernetesConfiguration;
    /**
    * The default TTL that will be applied for all the leases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#default_ttl DynamicSecretKubernetes#default_ttl}
    */
    readonly defaultTtl: string;
    /**
    * The slug of the environment to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#environment_slug DynamicSecretKubernetes#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The maximum limit a TTL can be leased or renewed for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#max_ttl DynamicSecretKubernetes#max_ttl}
    */
    readonly maxTtl?: string;
    /**
    * The metadata associated with this dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#metadata DynamicSecretKubernetes#metadata}
    */
    readonly metadata?: DynamicSecretKubernetesMetadata[] | cdktf.IResolvable;
    /**
    * The name of the dynamic secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#name DynamicSecretKubernetes#name}
    */
    readonly name: string;
    /**
    * The path to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#path DynamicSecretKubernetes#path}
    */
    readonly path: string;
    /**
    * The slug of the project to create dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#project_slug DynamicSecretKubernetes#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The username template of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#username_template DynamicSecretKubernetes#username_template}
    */
    readonly usernameTemplate?: string;
}
export interface DynamicSecretKubernetesConfigurationApiConfig {
    /**
    * Custom CA certificate for the Kubernetes API server. Leave blank to use the system/public CA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#ca DynamicSecretKubernetes#ca}
    */
    readonly ca?: string;
    /**
    * Service account token with permissions to create service accounts and manage RBAC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#cluster_token DynamicSecretKubernetes#cluster_token}
    */
    readonly clusterToken: string;
    /**
    * Kubernetes API server URL (e.g., https://kubernetes.default.svc).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#cluster_url DynamicSecretKubernetes#cluster_url}
    */
    readonly clusterUrl: string;
    /**
    * Whether to enable SSL verification for the Kubernetes API server connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#enable_ssl DynamicSecretKubernetes#enable_ssl}
    */
    readonly enableSsl?: boolean | cdktf.IResolvable;
}
export declare function dynamicSecretKubernetesConfigurationApiConfigToTerraform(struct?: DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable): any;
export declare function dynamicSecretKubernetesConfigurationApiConfigToHclTerraform(struct?: DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable): any;
export declare class DynamicSecretKubernetesConfigurationApiConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretKubernetesConfigurationApiConfig | cdktf.IResolvable | undefined);
    private _ca?;
    get ca(): string;
    set ca(value: string);
    resetCa(): void;
    get caInput(): string;
    private _clusterToken?;
    get clusterToken(): string;
    set clusterToken(value: string);
    get clusterTokenInput(): string;
    private _clusterUrl?;
    get clusterUrl(): string;
    set clusterUrl(value: string);
    get clusterUrlInput(): string;
    private _enableSsl?;
    get enableSsl(): boolean | cdktf.IResolvable;
    set enableSsl(value: boolean | cdktf.IResolvable);
    resetEnableSsl(): void;
    get enableSslInput(): any;
}
export interface DynamicSecretKubernetesConfigurationDynamicConfig {
    /**
    * Kubernetes namespace(s) where the service accounts will be created. You can specify multiple namespaces as a comma-separated list (e.g., “default,kube-system”). During lease creation, you can specify which namespace to use from this allowed list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#allowed_namespaces DynamicSecretKubernetes#allowed_namespaces}
    */
    readonly allowedNamespaces: string;
    /**
    * Name of the role to assign to the temporary service account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#role DynamicSecretKubernetes#role}
    */
    readonly role: string;
    /**
    * Type of role to assign ('cluster-role' or 'role').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#role_type DynamicSecretKubernetes#role_type}
    */
    readonly roleType: string;
}
export declare function dynamicSecretKubernetesConfigurationDynamicConfigToTerraform(struct?: DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable): any;
export declare function dynamicSecretKubernetesConfigurationDynamicConfigToHclTerraform(struct?: DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable): any;
export declare class DynamicSecretKubernetesConfigurationDynamicConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretKubernetesConfigurationDynamicConfig | cdktf.IResolvable | undefined);
    private _allowedNamespaces?;
    get allowedNamespaces(): string;
    set allowedNamespaces(value: string);
    get allowedNamespacesInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _roleType?;
    get roleType(): string;
    set roleType(value: string);
    get roleTypeInput(): string;
}
export interface DynamicSecretKubernetesConfigurationStaticConfig {
    /**
    * Kubernetes namespace where the service account exists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#namespace DynamicSecretKubernetes#namespace}
    */
    readonly namespace: string;
    /**
    * Name of the service account to generate tokens for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#service_account_name DynamicSecretKubernetes#service_account_name}
    */
    readonly serviceAccountName: string;
}
export declare function dynamicSecretKubernetesConfigurationStaticConfigToTerraform(struct?: DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable): any;
export declare function dynamicSecretKubernetesConfigurationStaticConfigToHclTerraform(struct?: DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable): any;
export declare class DynamicSecretKubernetesConfigurationStaticConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretKubernetesConfigurationStaticConfig | cdktf.IResolvable | undefined);
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string;
    private _serviceAccountName?;
    get serviceAccountName(): string;
    set serviceAccountName(value: string);
    get serviceAccountNameInput(): string;
}
export interface DynamicSecretKubernetesConfiguration {
    /**
    * Configuration for the 'api' authentication method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#api_config DynamicSecretKubernetes#api_config}
    */
    readonly apiConfig?: DynamicSecretKubernetesConfigurationApiConfig;
    /**
    * Optional list of audiences to include in the generated token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#audiences DynamicSecretKubernetes#audiences}
    */
    readonly audiences?: string[];
    /**
    * Choose between Token ('api') or 'gateway' authentication. If using Gateway, the Gateway must be deployed in your Kubernetes cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#auth_method DynamicSecretKubernetes#auth_method}
    */
    readonly authMethod: string;
    /**
    * Choose between 'static' (predefined service account) or 'dynamic' (temporary service accounts with role assignments).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#credential_type DynamicSecretKubernetes#credential_type}
    */
    readonly credentialType: string;
    /**
    * Configuration for the 'dynamic' credential type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#dynamic_config DynamicSecretKubernetes#dynamic_config}
    */
    readonly dynamicConfig?: DynamicSecretKubernetesConfigurationDynamicConfig;
    /**
    * Select a gateway for private cluster access. If not specified, the Internet Gateway will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#gateway_id DynamicSecretKubernetes#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Configuration for the 'static' credential type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#static_config DynamicSecretKubernetes#static_config}
    */
    readonly staticConfig?: DynamicSecretKubernetesConfigurationStaticConfig;
}
export declare function dynamicSecretKubernetesConfigurationToTerraform(struct?: DynamicSecretKubernetesConfiguration | cdktf.IResolvable): any;
export declare function dynamicSecretKubernetesConfigurationToHclTerraform(struct?: DynamicSecretKubernetesConfiguration | cdktf.IResolvable): any;
export declare class DynamicSecretKubernetesConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretKubernetesConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretKubernetesConfiguration | cdktf.IResolvable | undefined);
    private _apiConfig;
    get apiConfig(): DynamicSecretKubernetesConfigurationApiConfigOutputReference;
    putApiConfig(value: DynamicSecretKubernetesConfigurationApiConfig): void;
    resetApiConfig(): void;
    get apiConfigInput(): any;
    private _audiences?;
    get audiences(): string[];
    set audiences(value: string[]);
    resetAudiences(): void;
    get audiencesInput(): string[];
    private _authMethod?;
    get authMethod(): string;
    set authMethod(value: string);
    get authMethodInput(): string;
    private _credentialType?;
    get credentialType(): string;
    set credentialType(value: string);
    get credentialTypeInput(): string;
    private _dynamicConfig;
    get dynamicConfig(): DynamicSecretKubernetesConfigurationDynamicConfigOutputReference;
    putDynamicConfig(value: DynamicSecretKubernetesConfigurationDynamicConfig): void;
    resetDynamicConfig(): void;
    get dynamicConfigInput(): any;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string;
    private _staticConfig;
    get staticConfig(): DynamicSecretKubernetesConfigurationStaticConfigOutputReference;
    putStaticConfig(value: DynamicSecretKubernetesConfigurationStaticConfig): void;
    resetStaticConfig(): void;
    get staticConfigInput(): any;
}
export interface DynamicSecretKubernetesMetadata {
    /**
    * The key of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#key DynamicSecretKubernetes#key}
    */
    readonly key: string;
    /**
    * The value of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#value DynamicSecretKubernetes#value}
    */
    readonly value: string;
}
export declare function dynamicSecretKubernetesMetadataToTerraform(struct?: DynamicSecretKubernetesMetadata | cdktf.IResolvable): any;
export declare function dynamicSecretKubernetesMetadataToHclTerraform(struct?: DynamicSecretKubernetesMetadata | cdktf.IResolvable): any;
export declare class DynamicSecretKubernetesMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretKubernetesMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretKubernetesMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class DynamicSecretKubernetesMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretKubernetesMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretKubernetesMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes}
*/
export declare class DynamicSecretKubernetes extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_dynamic_secret_kubernetes";
    /**
    * Generates CDKTF code for importing a DynamicSecretKubernetes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretKubernetes to import
    * @param importFromId The id of the existing DynamicSecretKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretKubernetes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_kubernetes infisical_dynamic_secret_kubernetes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretKubernetesConfig
    */
    constructor(scope: Construct, id: string, config: DynamicSecretKubernetesConfig);
    private _configuration;
    get configuration(): DynamicSecretKubernetesConfigurationOutputReference;
    putConfiguration(value: DynamicSecretKubernetesConfiguration): void;
    get configurationInput(): any;
    private _defaultTtl?;
    get defaultTtl(): string;
    set defaultTtl(value: string);
    get defaultTtlInput(): string;
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    get id(): any;
    private _maxTtl?;
    get maxTtl(): string;
    set maxTtl(value: string);
    resetMaxTtl(): void;
    get maxTtlInput(): string;
    private _metadata;
    get metadata(): DynamicSecretKubernetesMetadataList;
    putMetadata(value: DynamicSecretKubernetesMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _usernameTemplate?;
    get usernameTemplate(): string;
    set usernameTemplate(value: string);
    resetUsernameTemplate(): void;
    get usernameTemplateInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
