import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TeamSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#id TeamSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Whether to notify the entire team when at least one member is also assigned to the pull request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#notify TeamSettings#notify}
    */
    readonly notify?: boolean | cdktf.IResolvable;
    /**
    * The GitHub team id or the GitHub team slug.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#team_id TeamSettings#team_id}
    */
    readonly teamId: string;
    /**
    * review_request_delegation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#review_request_delegation TeamSettings#review_request_delegation}
    */
    readonly reviewRequestDelegation?: TeamSettingsReviewRequestDelegation;
}
export interface TeamSettingsReviewRequestDelegation {
    /**
    * The algorithm to use when assigning pull requests to team members. Supported values are ROUND_ROBIN and LOAD_BALANCE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#algorithm TeamSettings#algorithm}
    */
    readonly algorithm?: string;
    /**
    * The number of team members to assign to a pull request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#member_count TeamSettings#member_count}
    */
    readonly memberCount?: number;
    /**
    * whether to notify the entire team when at least one member is also assigned to the pull request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#notify TeamSettings#notify}
    */
    readonly notify?: boolean | cdktf.IResolvable;
}
export declare function teamSettingsReviewRequestDelegationToTerraform(struct?: TeamSettingsReviewRequestDelegationOutputReference | TeamSettingsReviewRequestDelegation): any;
export declare function teamSettingsReviewRequestDelegationToHclTerraform(struct?: TeamSettingsReviewRequestDelegationOutputReference | TeamSettingsReviewRequestDelegation): any;
export declare class TeamSettingsReviewRequestDelegationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TeamSettingsReviewRequestDelegation | undefined;
    set internalValue(value: TeamSettingsReviewRequestDelegation | undefined);
    private _algorithm?;
    get algorithm(): string;
    set algorithm(value: string);
    resetAlgorithm(): void;
    get algorithmInput(): string;
    private _memberCount?;
    get memberCount(): number;
    set memberCount(value: number);
    resetMemberCount(): void;
    get memberCountInput(): number;
    private _notify?;
    get notify(): boolean | cdktf.IResolvable;
    set notify(value: boolean | cdktf.IResolvable);
    resetNotify(): void;
    get notifyInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings github_team_settings}
*/
export declare class TeamSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_team_settings";
    /**
    * Generates CDKTF code for importing a TeamSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamSettings to import
    * @param importFromId The id of the existing TeamSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings github_team_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamSettingsConfig
    */
    constructor(scope: Construct, id: string, config: TeamSettingsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _notify?;
    get notify(): boolean | cdktf.IResolvable;
    set notify(value: boolean | cdktf.IResolvable);
    resetNotify(): void;
    get notifyInput(): any;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string;
    get teamSlug(): any;
    get teamUid(): any;
    private _reviewRequestDelegation;
    get reviewRequestDelegation(): TeamSettingsReviewRequestDelegationOutputReference;
    putReviewRequestDelegation(value: TeamSettingsReviewRequestDelegation): void;
    resetReviewRequestDelegation(): void;
    get reviewRequestDelegationInput(): TeamSettingsReviewRequestDelegation;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
