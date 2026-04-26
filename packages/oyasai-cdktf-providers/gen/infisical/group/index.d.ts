import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group#name Group#name}
    */
    readonly name: string;
    /**
    * The role of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group#role Group#role}
    */
    readonly role: string;
    /**
    * The slug of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group#slug Group#slug}
    */
    readonly slug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group infisical_group}
*/
export declare class Group extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_group";
    /**
    * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Group to import
    * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Group to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group infisical_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroupConfig
    */
    constructor(scope: Construct, id: string, config: GroupConfig);
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
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
