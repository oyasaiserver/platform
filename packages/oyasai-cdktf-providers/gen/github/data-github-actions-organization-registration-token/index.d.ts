import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubActionsOrganizationRegistrationTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_registration_token#id DataGithubActionsOrganizationRegistrationToken#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_registration_token github_actions_organization_registration_token}
*/
export declare class DataGithubActionsOrganizationRegistrationToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_actions_organization_registration_token";
    /**
    * Generates CDKTF code for importing a DataGithubActionsOrganizationRegistrationToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsOrganizationRegistrationToken to import
    * @param importFromId The id of the existing DataGithubActionsOrganizationRegistrationToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_registration_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsOrganizationRegistrationToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_registration_token github_actions_organization_registration_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsOrganizationRegistrationTokenConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubActionsOrganizationRegistrationTokenConfig);
    get expiresAt(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get token(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
