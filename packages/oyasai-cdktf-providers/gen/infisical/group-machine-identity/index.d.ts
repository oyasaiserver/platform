import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GroupMachineIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity#group_id GroupMachineIdentity#group_id}
    */
    readonly groupId: string;
    /**
    * The ID of the machine identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity#identity_id GroupMachineIdentity#identity_id}
    */
    readonly identityId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity infisical_group_machine_identity}
*/
export declare class GroupMachineIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_group_machine_identity";
    /**
    * Generates CDKTF code for importing a GroupMachineIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GroupMachineIdentity to import
    * @param importFromId The id of the existing GroupMachineIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GroupMachineIdentity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity infisical_group_machine_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroupMachineIdentityConfig
    */
    constructor(scope: Construct, id: string, config: GroupMachineIdentityConfig);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
