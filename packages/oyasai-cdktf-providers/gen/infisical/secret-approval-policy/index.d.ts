import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretApprovalPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to allow the  approvers to approve their own changes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#allow_self_approval SecretApprovalPolicy#allow_self_approval}
    */
    readonly allowSelfApproval?: boolean | cdktf.IResolvable;
    /**
    * The required approvers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#approvers SecretApprovalPolicy#approvers}
    */
    readonly approvers: SecretApprovalPolicyApprovers[] | cdktf.IResolvable;
    /**
    * The enforcement level of the policy. This can either be hard or soft
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#enforcement_level SecretApprovalPolicy#enforcement_level}
    */
    readonly enforcementLevel?: string;
    /**
    *  (DEPRECATED, Use environment_slugs instead) The environment to apply the secret approval policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#environment_slug SecretApprovalPolicy#environment_slug}
    */
    readonly environmentSlug?: string;
    /**
    * The environments to apply the secret approval policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#environment_slugs SecretApprovalPolicy#environment_slugs}
    */
    readonly environmentSlugs?: string[];
    /**
    * The name of the secret approval policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#name SecretApprovalPolicy#name}
    */
    readonly name?: string;
    /**
    * The ID of the project to add the secret approval policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#project_id SecretApprovalPolicy#project_id}
    */
    readonly projectId: string;
    /**
    * The number of required approvers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#required_approvals SecretApprovalPolicy#required_approvals}
    */
    readonly requiredApprovals: number;
    /**
    * The secret path to apply the secret approval policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#secret_path SecretApprovalPolicy#secret_path}
    */
    readonly secretPath: string;
}
export interface SecretApprovalPolicyApprovers {
    /**
    * The ID of the approver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#id SecretApprovalPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The type of approver. Either group or user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#type SecretApprovalPolicy#type}
    */
    readonly type: string;
    /**
    * The username of the approver. By default, this is the email
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#username SecretApprovalPolicy#username}
    */
    readonly username?: string;
}
export declare function secretApprovalPolicyApproversToTerraform(struct?: SecretApprovalPolicyApprovers | cdktf.IResolvable): any;
export declare function secretApprovalPolicyApproversToHclTerraform(struct?: SecretApprovalPolicyApprovers | cdktf.IResolvable): any;
export declare class SecretApprovalPolicyApproversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecretApprovalPolicyApprovers | cdktf.IResolvable | undefined;
    set internalValue(value: SecretApprovalPolicyApprovers | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
}
export declare class SecretApprovalPolicyApproversList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecretApprovalPolicyApprovers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecretApprovalPolicyApproversOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy infisical_secret_approval_policy}
*/
export declare class SecretApprovalPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_approval_policy";
    /**
    * Generates CDKTF code for importing a SecretApprovalPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretApprovalPolicy to import
    * @param importFromId The id of the existing SecretApprovalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretApprovalPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_approval_policy infisical_secret_approval_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretApprovalPolicyConfig
    */
    constructor(scope: Construct, id: string, config: SecretApprovalPolicyConfig);
    private _allowSelfApproval?;
    get allowSelfApproval(): boolean | cdktf.IResolvable;
    set allowSelfApproval(value: boolean | cdktf.IResolvable);
    resetAllowSelfApproval(): void;
    get allowSelfApprovalInput(): any;
    private _approvers;
    get approvers(): SecretApprovalPolicyApproversList;
    putApprovers(value: SecretApprovalPolicyApprovers[] | cdktf.IResolvable): void;
    get approversInput(): any;
    private _enforcementLevel?;
    get enforcementLevel(): string;
    set enforcementLevel(value: string);
    resetEnforcementLevel(): void;
    get enforcementLevelInput(): string;
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    resetEnvironmentSlug(): void;
    get environmentSlugInput(): string;
    private _environmentSlugs?;
    get environmentSlugs(): string[];
    set environmentSlugs(value: string[]);
    resetEnvironmentSlugs(): void;
    get environmentSlugsInput(): string[];
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _requiredApprovals?;
    get requiredApprovals(): number;
    set requiredApprovals(value: number);
    get requiredApprovalsInput(): number;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
