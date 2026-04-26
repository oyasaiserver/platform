import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccessApprovalPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The required approvers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#approvers AccessApprovalPolicy#approvers}
    */
    readonly approvers: AccessApprovalPolicyApprovers[] | cdktf.IResolvable;
    /**
    * The enforcement level of the policy. This can either be hard or soft
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#enforcement_level AccessApprovalPolicy#enforcement_level}
    */
    readonly enforcementLevel?: string;
    /**
    * (DEPRECATED, Use environment_slugs instead) The environment to apply the access approval policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#environment_slug AccessApprovalPolicy#environment_slug}
    */
    readonly environmentSlug?: string;
    /**
    * The environments to apply the access approval policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#environment_slugs AccessApprovalPolicy#environment_slugs}
    */
    readonly environmentSlugs?: string[];
    /**
    * The name of the access approval policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#name AccessApprovalPolicy#name}
    */
    readonly name?: string;
    /**
    * The ID of the project to add the access approval policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#project_id AccessApprovalPolicy#project_id}
    */
    readonly projectId: string;
    /**
    * The number of required approvers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#required_approvals AccessApprovalPolicy#required_approvals}
    */
    readonly requiredApprovals: number;
    /**
    * The secret path to apply the access approval policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#secret_path AccessApprovalPolicy#secret_path}
    */
    readonly secretPath: string;
}
export interface AccessApprovalPolicyApprovers {
    /**
    * The ID of the approver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#id AccessApprovalPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The type of approver. Either group or user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#type AccessApprovalPolicy#type}
    */
    readonly type: string;
    /**
    * The username of the approver. By default, this is the email
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#username AccessApprovalPolicy#username}
    */
    readonly username?: string;
}
export declare function accessApprovalPolicyApproversToTerraform(struct?: AccessApprovalPolicyApprovers | cdktf.IResolvable): any;
export declare function accessApprovalPolicyApproversToHclTerraform(struct?: AccessApprovalPolicyApprovers | cdktf.IResolvable): any;
export declare class AccessApprovalPolicyApproversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccessApprovalPolicyApprovers | cdktf.IResolvable | undefined;
    set internalValue(value: AccessApprovalPolicyApprovers | cdktf.IResolvable | undefined);
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
export declare class AccessApprovalPolicyApproversList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccessApprovalPolicyApprovers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccessApprovalPolicyApproversOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy infisical_access_approval_policy}
*/
export declare class AccessApprovalPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_access_approval_policy";
    /**
    * Generates CDKTF code for importing a AccessApprovalPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccessApprovalPolicy to import
    * @param importFromId The id of the existing AccessApprovalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccessApprovalPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/access_approval_policy infisical_access_approval_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccessApprovalPolicyConfig
    */
    constructor(scope: Construct, id: string, config: AccessApprovalPolicyConfig);
    private _approvers;
    get approvers(): AccessApprovalPolicyApproversList;
    putApprovers(value: AccessApprovalPolicyApprovers[] | cdktf.IResolvable): void;
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
