import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryPagesAConfig extends cdktf.TerraformMetaArguments {
    /**
    * The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}
    */
    readonly buildType?: string;
    /**
    * The custom domain for the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#cname RepositoryPagesA#cname}
    */
    readonly cname?: string;
    /**
    * Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}
    */
    readonly httpsEnforced?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#public RepositoryPagesA#public}
    */
    readonly public?: boolean | cdktf.IResolvable;
    /**
    * The repository name to configure GitHub Pages for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#repository RepositoryPagesA#repository}
    */
    readonly repository: string;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#source RepositoryPagesA#source}
    */
    readonly source?: RepositoryPagesSourceA;
}
export interface RepositoryPagesSourceA {
    /**
    * The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#branch RepositoryPagesA#branch}
    */
    readonly branch: string;
    /**
    * The repository directory from which the site publishes (Default: '/')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#path RepositoryPagesA#path}
    */
    readonly path?: string;
}
export declare function repositoryPagesSourceAToTerraform(struct?: RepositoryPagesSourceAOutputReference | RepositoryPagesSourceA): any;
export declare function repositoryPagesSourceAToHclTerraform(struct?: RepositoryPagesSourceAOutputReference | RepositoryPagesSourceA): any;
export declare class RepositoryPagesSourceAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryPagesSourceA | undefined;
    set internalValue(value: RepositoryPagesSourceA | undefined);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    get branchInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages}
*/
export declare class RepositoryPagesA extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_pages";
    /**
    * Generates CDKTF code for importing a RepositoryPagesA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryPagesA to import
    * @param importFromId The id of the existing RepositoryPagesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryPagesA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryPagesAConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryPagesAConfig);
    get apiUrl(): any;
    get buildStatus(): any;
    private _buildType?;
    get buildType(): string;
    set buildType(value: string);
    resetBuildType(): void;
    get buildTypeInput(): string;
    private _cname?;
    get cname(): string;
    set cname(value: string);
    resetCname(): void;
    get cnameInput(): string;
    get custom404(): any;
    get htmlUrl(): any;
    private _httpsEnforced?;
    get httpsEnforced(): boolean | cdktf.IResolvable;
    set httpsEnforced(value: boolean | cdktf.IResolvable);
    resetHttpsEnforced(): void;
    get httpsEnforcedInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _public?;
    get public(): boolean | cdktf.IResolvable;
    set public(value: boolean | cdktf.IResolvable);
    resetPublic(): void;
    get publicInput(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    private _source;
    get source(): RepositoryPagesSourceAOutputReference;
    putSource(value: RepositoryPagesSourceA): void;
    resetSource(): void;
    get sourceInput(): RepositoryPagesSourceA;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
