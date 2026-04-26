import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryAutolinkReferenceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}
    */
    readonly isAlphanumeric?: boolean | cdktf.IResolvable;
    /**
    * This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}
    */
    readonly keyPrefix: string;
    /**
    * The repository name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}
    */
    readonly repository: string;
    /**
    * The template of the target URL used for the links; must be a valid URL and contain `<num>` for the reference number
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}
    */
    readonly targetUrlTemplate: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}
*/
export declare class RepositoryAutolinkReference extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_autolink_reference";
    /**
    * Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryAutolinkReference to import
    * @param importFromId The id of the existing RepositoryAutolinkReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryAutolinkReference to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference github_repository_autolink_reference} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryAutolinkReferenceConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryAutolinkReferenceConfig);
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _isAlphanumeric?;
    get isAlphanumeric(): boolean | cdktf.IResolvable;
    set isAlphanumeric(value: boolean | cdktf.IResolvable);
    resetIsAlphanumeric(): void;
    get isAlphanumericInput(): any;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    get keyPrefixInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _targetUrlTemplate?;
    get targetUrlTemplate(): string;
    set targetUrlTemplate(value: string);
    get targetUrlTemplateInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
