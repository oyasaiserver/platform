import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TeamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Adds a default maintainer to the team. Adds the creating user to the team when 'true'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}
    */
    readonly createDefaultMaintainer?: boolean | cdktf.IResolvable;
    /**
    * A description of the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#description Team#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#id Team#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#ldap_dn Team#ldap_dn}
    */
    readonly ldapDn?: string;
    /**
    * The name of the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#name Team#name}
    */
    readonly name: string;
    /**
    * The notification setting for the team. Must be one of 'notifications_enabled' or 'notifications_disabled'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#notification_setting Team#notification_setting}
    */
    readonly notificationSetting?: string;
    /**
    * The ID or slug of the parent team, if this is a nested team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#parent_team_id Team#parent_team_id}
    */
    readonly parentTeamId?: string;
    /**
    * The id of the parent team read in Github.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}
    */
    readonly parentTeamReadId?: string;
    /**
    * The id of the parent team read in Github.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}
    */
    readonly parentTeamReadSlug?: string;
    /**
    * The level of privacy for the team. Must be one of 'secret' or 'closed'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#privacy Team#privacy}
    */
    readonly privacy?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team github_team}
*/
export declare class Team extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_team";
    /**
    * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Team to import
    * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Team to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team github_team} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamConfig
    */
    constructor(scope: Construct, id: string, config: TeamConfig);
    private _createDefaultMaintainer?;
    get createDefaultMaintainer(): boolean | cdktf.IResolvable;
    set createDefaultMaintainer(value: boolean | cdktf.IResolvable);
    resetCreateDefaultMaintainer(): void;
    get createDefaultMaintainerInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _ldapDn?;
    get ldapDn(): string;
    set ldapDn(value: string);
    resetLdapDn(): void;
    get ldapDnInput(): string;
    get membersCount(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nodeId(): any;
    private _notificationSetting?;
    get notificationSetting(): string;
    set notificationSetting(value: string);
    resetNotificationSetting(): void;
    get notificationSettingInput(): string;
    private _parentTeamId?;
    get parentTeamId(): string;
    set parentTeamId(value: string);
    resetParentTeamId(): void;
    get parentTeamIdInput(): string;
    private _parentTeamReadId?;
    get parentTeamReadId(): string;
    set parentTeamReadId(value: string);
    resetParentTeamReadId(): void;
    get parentTeamReadIdInput(): string;
    private _parentTeamReadSlug?;
    get parentTeamReadSlug(): string;
    set parentTeamReadSlug(value: string);
    resetParentTeamReadSlug(): void;
    get parentTeamReadSlugInput(): string;
    private _privacy?;
    get privacy(): string;
    set privacy(value: string);
    resetPrivacy(): void;
    get privacyInput(): string;
    get slug(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
