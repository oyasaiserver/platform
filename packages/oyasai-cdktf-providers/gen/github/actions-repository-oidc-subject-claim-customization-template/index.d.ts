import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A list of OpenID Connect claims.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#include_claim_keys ActionsRepositoryOidcSubjectClaimCustomizationTemplate#include_claim_keys}
    */
    readonly includeClaimKeys?: string[];
    /**
    * The name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#repository ActionsRepositoryOidcSubjectClaimCustomizationTemplate#repository}
    */
    readonly repository: string;
    /**
    * Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#use_default ActionsRepositoryOidcSubjectClaimCustomizationTemplate#use_default}
    */
    readonly useDefault: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}
*/
export declare class ActionsRepositoryOidcSubjectClaimCustomizationTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_repository_oidc_subject_claim_customization_template";
    /**
    * Generates CDKTF code for importing a ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryOidcSubjectClaimCustomizationTemplate to import
    * @param importFromId The id of the existing ActionsRepositoryOidcSubjectClaimCustomizationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryOidcSubjectClaimCustomizationTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig
    */
    constructor(scope: Construct, id: string, config: ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _includeClaimKeys?;
    get includeClaimKeys(): string[];
    set includeClaimKeys(value: string[]);
    resetIncludeClaimKeys(): void;
    get includeClaimKeysInput(): string[];
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _useDefault?;
    get useDefault(): boolean | cdktf.IResolvable;
    set useDefault(value: boolean | cdktf.IResolvable);
    get useDefaultInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
