import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryCollaboratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#id RepositoryCollaborator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The permission of the outside collaborator for the repository. Must be one of 'pull', 'push', 'maintain', 'triage' or 'admin' or the name of an existing custom repository role within the organization for organization-owned repositories. Must be 'push' for personal repositories. Defaults to 'push'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#permission RepositoryCollaborator#permission}
    */
    readonly permission?: string;
    /**
    * Suppress plan diffs for triage and maintain. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#permission_diff_suppression RepositoryCollaborator#permission_diff_suppression}
    */
    readonly permissionDiffSuppression?: boolean | cdktf.IResolvable;
    /**
    * The GitHub repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#repository RepositoryCollaborator#repository}
    */
    readonly repository: string;
    /**
    * The user to add to the repository as a collaborator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#username RepositoryCollaborator#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator github_repository_collaborator}
*/
export declare class RepositoryCollaborator extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_collaborator";
    /**
    * Generates CDKTF code for importing a RepositoryCollaborator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCollaborator to import
    * @param importFromId The id of the existing RepositoryCollaborator that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCollaborator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator github_repository_collaborator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCollaboratorConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryCollaboratorConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get invitationId(): any;
    private _permission?;
    get permission(): string;
    set permission(value: string);
    resetPermission(): void;
    get permissionInput(): string;
    private _permissionDiffSuppression?;
    get permissionDiffSuppression(): boolean | cdktf.IResolvable;
    set permissionDiffSuppression(value: boolean | cdktf.IResolvable);
    resetPermissionDiffSuppression(): void;
    get permissionDiffSuppressionInput(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
