import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmuGroupMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Integer corresponding to the external group ID to be linked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping#group_id EmuGroupMapping#group_id}
    */
    readonly groupId: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping#id EmuGroupMapping#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Slug of the GitHub team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping#team_slug EmuGroupMapping#team_slug}
    */
    readonly teamSlug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping github_emu_group_mapping}
*/
export declare class EmuGroupMapping extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_emu_group_mapping";
    /**
    * Generates CDKTF code for importing a EmuGroupMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmuGroupMapping to import
    * @param importFromId The id of the existing EmuGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmuGroupMapping to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping github_emu_group_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmuGroupMappingConfig
    */
    constructor(scope: Construct, id: string, config: EmuGroupMappingConfig);
    get etag(): any;
    private _groupId?;
    get groupId(): number;
    set groupId(value: number);
    get groupIdInput(): number;
    get groupName(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get teamId(): any;
    private _teamSlug?;
    get teamSlug(): string;
    set teamSlug(value: string);
    get teamSlugInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
