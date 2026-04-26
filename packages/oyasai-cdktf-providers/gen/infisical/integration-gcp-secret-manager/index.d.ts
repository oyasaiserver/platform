import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IntegrationGcpSecretManagerConfig extends cdktf.TerraformMetaArguments {
    /**
    * The slug of the environment to sync to GCP Secret Manager (prod, dev, staging, etc).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#environment IntegrationGcpSecretManager#environment}
    */
    readonly environment: string;
    /**
    * The ID of the GCP project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#gcp_project_id IntegrationGcpSecretManager#gcp_project_id}
    */
    readonly gcpProjectId: string;
    /**
    * Integration options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#options IntegrationGcpSecretManager#options}
    */
    readonly options?: IntegrationGcpSecretManagerOptions;
    /**
    * The ID of your Infisical project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#project_id IntegrationGcpSecretManager#project_id}
    */
    readonly projectId: string;
    /**
    * The secret path in Infisical to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#secret_path IntegrationGcpSecretManager#secret_path}
    */
    readonly secretPath: string;
    /**
    * Service account json for the GCP project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#service_account_json IntegrationGcpSecretManager#service_account_json}
    */
    readonly serviceAccountJson: string;
}
export interface IntegrationGcpSecretManagerOptions {
    /**
    * The prefix to add to the secret name in GCP Secret Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#secret_prefix IntegrationGcpSecretManager#secret_prefix}
    */
    readonly secretPrefix?: string;
    /**
    * The suffix to add to the secret name in GCP Secret Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#secret_suffix IntegrationGcpSecretManager#secret_suffix}
    */
    readonly secretSuffix?: string;
}
export declare function integrationGcpSecretManagerOptionsToTerraform(struct?: IntegrationGcpSecretManagerOptions | cdktf.IResolvable): any;
export declare function integrationGcpSecretManagerOptionsToHclTerraform(struct?: IntegrationGcpSecretManagerOptions | cdktf.IResolvable): any;
export declare class IntegrationGcpSecretManagerOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IntegrationGcpSecretManagerOptions | cdktf.IResolvable | undefined;
    set internalValue(value: IntegrationGcpSecretManagerOptions | cdktf.IResolvable | undefined);
    private _secretPrefix?;
    get secretPrefix(): string;
    set secretPrefix(value: string);
    resetSecretPrefix(): void;
    get secretPrefixInput(): string;
    private _secretSuffix?;
    get secretSuffix(): string;
    set secretSuffix(value: string);
    resetSecretSuffix(): void;
    get secretSuffixInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager}
*/
export declare class IntegrationGcpSecretManager extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_integration_gcp_secret_manager";
    /**
    * Generates CDKTF code for importing a IntegrationGcpSecretManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationGcpSecretManager to import
    * @param importFromId The id of the existing IntegrationGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationGcpSecretManager to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationGcpSecretManagerConfig
    */
    constructor(scope: Construct, id: string, config: IntegrationGcpSecretManagerConfig);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _gcpProjectId?;
    get gcpProjectId(): string;
    set gcpProjectId(value: string);
    get gcpProjectIdInput(): string;
    get integrationAuthId(): any;
    get integrationId(): any;
    private _options;
    get options(): IntegrationGcpSecretManagerOptionsOutputReference;
    putOptions(value: IntegrationGcpSecretManagerOptions): void;
    resetOptions(): void;
    get optionsInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    private _serviceAccountJson?;
    get serviceAccountJson(): string;
    set serviceAccountJson(value: string);
    get serviceAccountJsonInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
