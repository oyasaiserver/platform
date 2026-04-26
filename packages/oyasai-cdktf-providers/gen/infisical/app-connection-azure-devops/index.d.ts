import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionAzureDevopsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Azure DevOps App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#credentials AppConnectionAzureDevops#credentials}
    */
    readonly credentials: AppConnectionAzureDevopsCredentials;
    /**
    * An optional description for the Azure DevOps App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#description AppConnectionAzureDevops#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Azure DevOps. Possible values are: access-token, client-secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#method AppConnectionAzureDevops#method}
    */
    readonly method: string;
    /**
    * The name of the Azure DevOps App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#name AppConnectionAzureDevops#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#project_id AppConnectionAzureDevops#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionAzureDevopsCredentials {
    /**
    * The Azure DevOps access token. Required for access-token method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-devops
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#access_token AppConnectionAzureDevops#access_token}
    */
    readonly accessToken?: string;
    /**
    * The Azure application (client) ID. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-client-secrets
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#client_id AppConnectionAzureDevops#client_id}
    */
    readonly clientId?: string;
    /**
    * The Azure client secret. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-client-secrets
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#client_secret AppConnectionAzureDevops#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The name of the Azure DevOps organization. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-devops
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#organization_name AppConnectionAzureDevops#organization_name}
    */
    readonly organizationName: string;
    /**
    * The Azure Active Directory (AAD) tenant ID. Required for client-secret method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/azure-client-secrets
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#tenant_id AppConnectionAzureDevops#tenant_id}
    */
    readonly tenantId?: string;
}
export declare function appConnectionAzureDevopsCredentialsToTerraform(struct?: AppConnectionAzureDevopsCredentials | cdktf.IResolvable): any;
export declare function appConnectionAzureDevopsCredentialsToHclTerraform(struct?: AppConnectionAzureDevopsCredentials | cdktf.IResolvable): any;
export declare class AppConnectionAzureDevopsCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionAzureDevopsCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionAzureDevopsCredentials | cdktf.IResolvable | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    resetClientSecret(): void;
    get clientSecretInput(): string;
    private _organizationName?;
    get organizationName(): string;
    set organizationName(value: string);
    get organizationNameInput(): string;
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    resetTenantId(): void;
    get tenantIdInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops infisical_app_connection_azure_devops}
*/
export declare class AppConnectionAzureDevops extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_azure_devops";
    /**
    * Generates CDKTF code for importing a AppConnectionAzureDevops resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAzureDevops to import
    * @param importFromId The id of the existing AppConnectionAzureDevops that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAzureDevops to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops infisical_app_connection_azure_devops} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAzureDevopsConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionAzureDevopsConfig);
    private _credentials;
    get credentials(): AppConnectionAzureDevopsCredentialsOutputReference;
    putCredentials(value: AppConnectionAzureDevopsCredentials): void;
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
