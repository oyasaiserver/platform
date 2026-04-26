import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionAzureAppConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Azure App Configuration App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#credentials AppConnectionAzureAppConfiguration#credentials}
    */
    readonly credentials: AppConnectionAzureAppConfigurationCredentials;
    /**
    * An optional description for the Azure App Configuration App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#description AppConnectionAzureAppConfiguration#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Azure App Configuration. Possible values are: client-secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#method AppConnectionAzureAppConfiguration#method}
    */
    readonly method: string;
    /**
    * The name of the Azure App Configuration App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#name AppConnectionAzureAppConfiguration#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#project_id AppConnectionAzureAppConfiguration#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionAzureAppConfigurationCredentials {
    /**
    * The Azure application (client) ID. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-app-configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#client_id AppConnectionAzureAppConfiguration#client_id}
    */
    readonly clientId: string;
    /**
    * The Azure client secret. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-app-configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#client_secret AppConnectionAzureAppConfiguration#client_secret}
    */
    readonly clientSecret: string;
    /**
    * The Azure Active Directory (AAD) tenant ID. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-app-configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#tenant_id AppConnectionAzureAppConfiguration#tenant_id}
    */
    readonly tenantId: string;
}
export declare function appConnectionAzureAppConfigurationCredentialsToTerraform(struct?: AppConnectionAzureAppConfigurationCredentials | cdktf.IResolvable): any;
export declare function appConnectionAzureAppConfigurationCredentialsToHclTerraform(struct?: AppConnectionAzureAppConfigurationCredentials | cdktf.IResolvable): any;
export declare class AppConnectionAzureAppConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionAzureAppConfigurationCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionAzureAppConfigurationCredentials | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration infisical_app_connection_azure_app_configuration}
*/
export declare class AppConnectionAzureAppConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_azure_app_configuration";
    /**
    * Generates CDKTF code for importing a AppConnectionAzureAppConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAzureAppConfiguration to import
    * @param importFromId The id of the existing AppConnectionAzureAppConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAzureAppConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration infisical_app_connection_azure_app_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAzureAppConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionAzureAppConfigurationConfig);
    private _credentials;
    get credentials(): AppConnectionAzureAppConfigurationCredentialsOutputReference;
    putCredentials(value: AppConnectionAzureAppConfigurationCredentials): void;
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
