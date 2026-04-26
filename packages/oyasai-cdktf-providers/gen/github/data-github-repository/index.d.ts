import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#description DataGithubRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#full_name DataGithubRepository#full_name}
    */
    readonly fullName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#homepage_url DataGithubRepository#homepage_url}
    */
    readonly homepageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#id DataGithubRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#name DataGithubRepository#name}
    */
    readonly name?: string;
}
export interface DataGithubRepositoryPagesSource {
}
export declare function dataGithubRepositoryPagesSourceToTerraform(struct?: DataGithubRepositoryPagesSource): any;
export declare function dataGithubRepositoryPagesSourceToHclTerraform(struct?: DataGithubRepositoryPagesSource): any;
export declare class DataGithubRepositoryPagesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryPagesSource | undefined;
    set internalValue(value: DataGithubRepositoryPagesSource | undefined);
    get branch(): any;
    get path(): any;
}
export declare class DataGithubRepositoryPagesSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubRepositoryPagesSourceOutputReference;
}
export interface DataGithubRepositoryPages {
}
export declare function dataGithubRepositoryPagesToTerraform(struct?: DataGithubRepositoryPages): any;
export declare function dataGithubRepositoryPagesToHclTerraform(struct?: DataGithubRepositoryPages): any;
export declare class DataGithubRepositoryPagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryPages | undefined;
    set internalValue(value: DataGithubRepositoryPages | undefined);
    get buildType(): any;
    get cname(): any;
    get custom404(): any;
    get htmlUrl(): any;
    private _source;
    get source(): DataGithubRepositoryPagesSourceList;
    get status(): any;
    get url(): any;
}
export declare class DataGithubRepositoryPagesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubRepositoryPagesOutputReference;
}
export interface DataGithubRepositoryRepositoryLicenseLicense {
}
export declare function dataGithubRepositoryRepositoryLicenseLicenseToTerraform(struct?: DataGithubRepositoryRepositoryLicenseLicense): any;
export declare function dataGithubRepositoryRepositoryLicenseLicenseToHclTerraform(struct?: DataGithubRepositoryRepositoryLicenseLicense): any;
export declare class DataGithubRepositoryRepositoryLicenseLicenseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryRepositoryLicenseLicense | undefined;
    set internalValue(value: DataGithubRepositoryRepositoryLicenseLicense | undefined);
    get body(): any;
    get conditions(): any;
    get description(): any;
    get featured(): any;
    get htmlUrl(): any;
    get implementation(): any;
    get key(): any;
    get limitations(): any;
    get name(): any;
    get permissions(): any;
    get spdxId(): any;
    get url(): any;
}
export declare class DataGithubRepositoryRepositoryLicenseLicenseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubRepositoryRepositoryLicenseLicenseOutputReference;
}
export interface DataGithubRepositoryRepositoryLicense {
}
export declare function dataGithubRepositoryRepositoryLicenseToTerraform(struct?: DataGithubRepositoryRepositoryLicense): any;
export declare function dataGithubRepositoryRepositoryLicenseToHclTerraform(struct?: DataGithubRepositoryRepositoryLicense): any;
export declare class DataGithubRepositoryRepositoryLicenseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryRepositoryLicense | undefined;
    set internalValue(value: DataGithubRepositoryRepositoryLicense | undefined);
    get content(): any;
    get downloadUrl(): any;
    get encoding(): any;
    get gitUrl(): any;
    get htmlUrl(): any;
    private _license;
    get license(): DataGithubRepositoryRepositoryLicenseLicenseList;
    get name(): any;
    get path(): any;
    get sha(): any;
    get size(): any;
    get type(): any;
    get url(): any;
}
export declare class DataGithubRepositoryRepositoryLicenseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubRepositoryRepositoryLicenseOutputReference;
}
export interface DataGithubRepositoryTemplate {
}
export declare function dataGithubRepositoryTemplateToTerraform(struct?: DataGithubRepositoryTemplate): any;
export declare function dataGithubRepositoryTemplateToHclTerraform(struct?: DataGithubRepositoryTemplate): any;
export declare class DataGithubRepositoryTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryTemplate | undefined;
    set internalValue(value: DataGithubRepositoryTemplate | undefined);
    get owner(): any;
    get repository(): any;
}
export declare class DataGithubRepositoryTemplateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubRepositoryTemplateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository github_repository}
*/
export declare class DataGithubRepository extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository";
    /**
    * Generates CDKTF code for importing a DataGithubRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepository to import
    * @param importFromId The id of the existing DataGithubRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository github_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubRepositoryConfig);
    get allowAutoMerge(): any;
    get allowForking(): any;
    get allowMergeCommit(): any;
    get allowRebaseMerge(): any;
    get allowSquashMerge(): any;
    get allowUpdateBranch(): any;
    get archived(): any;
    get defaultBranch(): any;
    get deleteBranchOnMerge(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get fork(): any;
    private _fullName?;
    get fullName(): string;
    set fullName(value: string);
    resetFullName(): void;
    get fullNameInput(): string;
    get gitCloneUrl(): any;
    get hasDiscussions(): any;
    get hasDownloads(): any;
    get hasIssues(): any;
    get hasProjects(): any;
    get hasWiki(): any;
    private _homepageUrl?;
    get homepageUrl(): string;
    set homepageUrl(value: string);
    resetHomepageUrl(): void;
    get homepageUrlInput(): string;
    get htmlUrl(): any;
    get httpCloneUrl(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get isTemplate(): any;
    get mergeCommitMessage(): any;
    get mergeCommitTitle(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get nodeId(): any;
    private _pages;
    get pages(): DataGithubRepositoryPagesList;
    get primaryLanguage(): any;
    get private(): any;
    get repoId(): any;
    private _repositoryLicense;
    get repositoryLicense(): DataGithubRepositoryRepositoryLicenseList;
    get squashMergeCommitMessage(): any;
    get squashMergeCommitTitle(): any;
    get sshCloneUrl(): any;
    get svnUrl(): any;
    private _template;
    get template(): DataGithubRepositoryTemplateList;
    get topics(): any;
    get visibility(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
