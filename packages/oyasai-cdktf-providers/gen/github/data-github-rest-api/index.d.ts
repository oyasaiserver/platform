import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRestApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api#endpoint DataGithubRestApi#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api#id DataGithubRestApi#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api github_rest_api}
*/
export declare class DataGithubRestApi extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_rest_api";
    /**
    * Generates CDKTF code for importing a DataGithubRestApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRestApi to import
    * @param importFromId The id of the existing DataGithubRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRestApi to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api github_rest_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRestApiConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRestApiConfig);
    get body(): any;
    get code(): any;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string;
    get headers(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get status(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
