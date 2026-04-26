import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryTopicsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_topics#id RepositoryTopics#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the repository. The name is not case sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_topics#repository RepositoryTopics#repository}
    */
    readonly repository: string;
    /**
    * An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository. Note: Topic names cannot contain uppercase letters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_topics#topics RepositoryTopics#topics}
    */
    readonly topics: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_topics github_repository_topics}
*/
export declare class RepositoryTopics extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_topics";
    /**
    * Generates CDKTF code for importing a RepositoryTopics resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryTopics to import
    * @param importFromId The id of the existing RepositoryTopics that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_topics#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryTopics to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_topics github_repository_topics} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryTopicsConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryTopicsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _topics?;
    get topics(): string[];
    set topics(value: string[]);
    get topicsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
