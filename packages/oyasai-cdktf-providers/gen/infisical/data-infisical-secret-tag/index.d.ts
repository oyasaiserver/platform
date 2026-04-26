import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalSecretTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * The project id associated with the secret tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag#project_id DataInfisicalSecretTag#project_id}
    */
    readonly projectId: string;
    /**
    * The slug of the tag to fetch
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag#slug DataInfisicalSecretTag#slug}
    */
    readonly slug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag infisical_secret_tag}
*/
export declare class DataInfisicalSecretTag extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_secret_tag";
    /**
    * Generates CDKTF code for importing a DataInfisicalSecretTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecretTag to import
    * @param importFromId The id of the existing DataInfisicalSecretTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecretTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_tag infisical_secret_tag} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretTagConfig
    */
    constructor(scope: Construct, id: string, config: DataInfisicalSecretTagConfig);
    get color(): any;
    get id(): any;
    get name(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
