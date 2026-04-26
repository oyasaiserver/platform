import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Color code for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag#color SecretTag#color}
    */
    readonly color: string;
    /**
    * The name for the new tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag#name SecretTag#name}
    */
    readonly name: string;
    /**
    * The project id associated with the secret tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag#project_id SecretTag#project_id}
    */
    readonly projectId: string;
    /**
    * The slug for the new tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag#slug SecretTag#slug}
    */
    readonly slug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag infisical_secret_tag}
*/
export declare class SecretTag extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_tag";
    /**
    * Generates CDKTF code for importing a SecretTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretTag to import
    * @param importFromId The id of the existing SecretTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_tag infisical_secret_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretTagConfig
    */
    constructor(scope: Construct, id: string, config: SecretTagConfig);
    private _color?;
    get color(): string;
    set color(value: string);
    get colorInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
