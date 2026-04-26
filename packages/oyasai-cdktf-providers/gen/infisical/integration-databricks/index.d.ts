import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IntegrationDatabricksConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Databricks host URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#databricks_host IntegrationDatabricks#databricks_host}
    */
    readonly databricksHost: string;
    /**
    * The Databricks secret scope. Example: your-secret-scope
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#databricks_secret_scope IntegrationDatabricks#databricks_secret_scope}
    */
    readonly databricksSecretScope: string;
    /**
    * The Databricks access token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#databricks_token IntegrationDatabricks#databricks_token}
    */
    readonly databricksToken: string;
    /**
    * The slug of the environment to sync to Databricks (prod, dev, staging, etc).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#environment IntegrationDatabricks#environment}
    */
    readonly environment: string;
    /**
    * The ID of your Infisical project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#project_id IntegrationDatabricks#project_id}
    */
    readonly projectId: string;
    /**
    * The secret path in Infisical to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#secret_path IntegrationDatabricks#secret_path}
    */
    readonly secretPath: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks infisical_integration_databricks}
*/
export declare class IntegrationDatabricks extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_integration_databricks";
    /**
    * Generates CDKTF code for importing a IntegrationDatabricks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationDatabricks to import
    * @param importFromId The id of the existing IntegrationDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationDatabricks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_databricks infisical_integration_databricks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationDatabricksConfig
    */
    constructor(scope: Construct, id: string, config: IntegrationDatabricksConfig);
    private _databricksHost?;
    get databricksHost(): string;
    set databricksHost(value: string);
    get databricksHostInput(): string;
    private _databricksSecretScope?;
    get databricksSecretScope(): string;
    set databricksSecretScope(value: string);
    get databricksSecretScopeInput(): string;
    private _databricksToken?;
    get databricksToken(): string;
    set databricksToken(value: string);
    get databricksTokenInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    get integrationAuthId(): any;
    get integrationId(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
