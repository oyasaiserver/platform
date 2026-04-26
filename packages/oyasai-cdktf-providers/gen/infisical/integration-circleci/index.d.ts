import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IntegrationCircleciConfig extends cdktf.TerraformMetaArguments {
    /**
    * The organization slug of your CircleCI organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#circleci_org_slug IntegrationCircleci#circleci_org_slug}
    */
    readonly circleciOrgSlug: string;
    /**
    * The project ID of your CircleCI project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#circleci_project_id IntegrationCircleci#circleci_project_id}
    */
    readonly circleciProjectId: string;
    /**
    * Your personal CircleCI token to authenticate with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#circleci_token IntegrationCircleci#circleci_token}
    */
    readonly circleciToken: string;
    /**
    * The slug of the environment to sync to CircleCI (prod, dev, staging, etc).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#environment IntegrationCircleci#environment}
    */
    readonly environment: string;
    /**
    * The ID of your Infisical project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#project_id IntegrationCircleci#project_id}
    */
    readonly projectId: string;
    /**
    * The secret path in Infisical to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#secret_path IntegrationCircleci#secret_path}
    */
    readonly secretPath: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci infisical_integration_circleci}
*/
export declare class IntegrationCircleci extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_integration_circleci";
    /**
    * Generates CDKTF code for importing a IntegrationCircleci resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationCircleci to import
    * @param importFromId The id of the existing IntegrationCircleci that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationCircleci to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_circleci infisical_integration_circleci} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationCircleciConfig
    */
    constructor(scope: Construct, id: string, config: IntegrationCircleciConfig);
    private _circleciOrgSlug?;
    get circleciOrgSlug(): string;
    set circleciOrgSlug(value: string);
    get circleciOrgSlugInput(): string;
    private _circleciProjectId?;
    get circleciProjectId(): string;
    set circleciProjectId(value: string);
    get circleciProjectIdInput(): string;
    private _circleciToken?;
    get circleciToken(): string;
    set circleciToken(value: string);
    get circleciTokenInput(): string;
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
