import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ReleaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Text describing the contents of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#body Release#body}
    */
    readonly body?: string;
    /**
    * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#discussion_category_name Release#discussion_category_name}
    */
    readonly discussionCategoryName?: string;
    /**
    * Set to 'false' to create a published release.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#draft Release#draft}
    */
    readonly draft?: boolean | cdktf.IResolvable;
    /**
    * Set to 'true' to automatically generate the name and body for this release. If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#generate_release_notes Release#generate_release_notes}
    */
    readonly generateReleaseNotes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#id Release#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the release.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#name Release#name}
    */
    readonly name?: string;
    /**
    * Set to 'false' to identify the release as a full release.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#prerelease Release#prerelease}
    */
    readonly prerelease?: boolean | cdktf.IResolvable;
    /**
    * The name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#repository Release#repository}
    */
    readonly repository: string;
    /**
    * The name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#tag_name Release#tag_name}
    */
    readonly tagName: string;
    /**
    *  The branch name or commit SHA the tag is created from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#target_commitish Release#target_commitish}
    */
    readonly targetCommitish?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release github_release}
*/
export declare class Release extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_release";
    /**
    * Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Release to import
    * @param importFromId The id of the existing Release that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Release to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release github_release} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ReleaseConfig
    */
    constructor(scope: Construct, id: string, config: ReleaseConfig);
    get assetsUrl(): any;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    get createdAt(): any;
    private _discussionCategoryName?;
    get discussionCategoryName(): string;
    set discussionCategoryName(value: string);
    resetDiscussionCategoryName(): void;
    get discussionCategoryNameInput(): string;
    private _draft?;
    get draft(): boolean | cdktf.IResolvable;
    set draft(value: boolean | cdktf.IResolvable);
    resetDraft(): void;
    get draftInput(): any;
    get etag(): any;
    private _generateReleaseNotes?;
    get generateReleaseNotes(): boolean | cdktf.IResolvable;
    set generateReleaseNotes(value: boolean | cdktf.IResolvable);
    resetGenerateReleaseNotes(): void;
    get generateReleaseNotesInput(): any;
    get htmlUrl(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get nodeId(): any;
    private _prerelease?;
    get prerelease(): boolean | cdktf.IResolvable;
    set prerelease(value: boolean | cdktf.IResolvable);
    resetPrerelease(): void;
    get prereleaseInput(): any;
    get publishedAt(): any;
    get releaseId(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _tagName?;
    get tagName(): string;
    set tagName(value: string);
    get tagNameInput(): string;
    get tarballUrl(): any;
    private _targetCommitish?;
    get targetCommitish(): string;
    set targetCommitish(value: string);
    resetTargetCommitish(): void;
    get targetCommitishInput(): string;
    get uploadUrl(): any;
    get url(): any;
    get zipballUrl(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
