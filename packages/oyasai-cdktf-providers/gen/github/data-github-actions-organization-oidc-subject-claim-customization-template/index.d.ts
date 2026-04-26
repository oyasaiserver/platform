import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template#id DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}
*/
export declare class DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_actions_organization_oidc_subject_claim_customization_template";
    /**
    * Generates CDKTF code for importing a DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate to import
    * @param importFromId The id of the existing DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get includeClaimKeys(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
