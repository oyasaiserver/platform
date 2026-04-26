import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionAzureKeyVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Azure Key Vault App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#credentials AppConnectionAzureKeyVault#credentials}
    */
    readonly credentials: AppConnectionAzureKeyVaultCredentials;
    /**
    * An optional description for the Azure Key Vault App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#description AppConnectionAzureKeyVault#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Azure Key Vault. Possible values are: client-secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#method AppConnectionAzureKeyVault#method}
    */
    readonly method: string;
    /**
    * The name of the Azure Key Vault App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#name AppConnectionAzureKeyVault#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#project_id AppConnectionAzureKeyVault#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionAzureKeyVaultCredentials {
    /**
    * The Azure application (client) ID. Required for key-vault method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-key-vault
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#client_id AppConnectionAzureKeyVault#client_id}
    */
    readonly clientId: string;
    /**
    * The Azure client secret. Required for key-vault method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-key-vault
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#client_secret AppConnectionAzureKeyVault#client_secret}
    */
    readonly clientSecret: string;
    /**
    * The Azure Active Directory (AAD) tenant ID. Required for key-vault method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-key-vault
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#tenant_id AppConnectionAzureKeyVault#tenant_id}
    */
    readonly tenantId: string;
}
export declare function appConnectionAzureKeyVaultCredentialsToTerraform(struct?: AppConnectionAzureKeyVaultCredentials | cdktf.IResolvable): any;
export declare function appConnectionAzureKeyVaultCredentialsToHclTerraform(struct?: AppConnectionAzureKeyVaultCredentials | cdktf.IResolvable): any;
export declare class AppConnectionAzureKeyVaultCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionAzureKeyVaultCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionAzureKeyVaultCredentials | cdktf.IResolvable | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    get tenantIdInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault infisical_app_connection_azure_key_vault}
*/
export declare class AppConnectionAzureKeyVault extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_azure_key_vault";
    /**
    * Generates CDKTF code for importing a AppConnectionAzureKeyVault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAzureKeyVault to import
    * @param importFromId The id of the existing AppConnectionAzureKeyVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAzureKeyVault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_key_vault infisical_app_connection_azure_key_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAzureKeyVaultConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionAzureKeyVaultConfig);
    private _credentials;
    get credentials(): AppConnectionAzureKeyVaultCredentialsOutputReference;
    putCredentials(value: AppConnectionAzureKeyVaultCredentials): void;
    get credentialsInput(): any;
    get credentialsHash(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _method?;
    get method(): string;
    set method(value: string);
    get methodInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    resetProjectId(): void;
    get projectIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
