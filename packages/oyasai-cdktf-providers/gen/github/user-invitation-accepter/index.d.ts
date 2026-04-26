import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserInvitationAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Allow the ID to be unset. This will result in the resource being skipped when the ID is not set instead of returning an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter#allow_empty_id UserInvitationAccepter#allow_empty_id}
    */
    readonly allowEmptyId?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter#invitation_id UserInvitationAccepter#invitation_id}
    */
    readonly invitationId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter github_user_invitation_accepter}
*/
export declare class UserInvitationAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_user_invitation_accepter";
    /**
    * Generates CDKTF code for importing a UserInvitationAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserInvitationAccepter to import
    * @param importFromId The id of the existing UserInvitationAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserInvitationAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter github_user_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserInvitationAccepterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: UserInvitationAccepterConfig);
    private _allowEmptyId?;
    get allowEmptyId(): boolean | cdktf.IResolvable;
    set allowEmptyId(value: boolean | cdktf.IResolvable);
    resetAllowEmptyId(): void;
    get allowEmptyIdInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _invitationId?;
    get invitationId(): string;
    set invitationId(value: string);
    resetInvitationId(): void;
    get invitationIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
