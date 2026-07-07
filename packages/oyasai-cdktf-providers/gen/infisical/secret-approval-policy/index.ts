// https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretApprovalPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow the  approvers to approve their own changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#allow_self_approval SecretApprovalPolicy#allow_self_approval}
  */
  readonly allowSelfApproval?: boolean | cdktf.IResolvable;
  /**
  * The required approvers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#approvers SecretApprovalPolicy#approvers}
  */
  readonly approvers: SecretApprovalPolicyApprovers[] | cdktf.IResolvable;
  /**
  * The enforcement level of the policy. This can either be hard or soft
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#enforcement_level SecretApprovalPolicy#enforcement_level}
  */
  readonly enforcementLevel?: string;
  /**
  *  (DEPRECATED, Use environment_slugs instead) The environment to apply the secret approval policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#environment_slug SecretApprovalPolicy#environment_slug}
  */
  readonly environmentSlug?: string;
  /**
  * The environments to apply the secret approval policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#environment_slugs SecretApprovalPolicy#environment_slugs}
  */
  readonly environmentSlugs?: string[];
  /**
  * The name of the secret approval policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#name SecretApprovalPolicy#name}
  */
  readonly name?: string;
  /**
  * The ID of the project to add the secret approval policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#project_id SecretApprovalPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * The number of required approvers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#required_approvals SecretApprovalPolicy#required_approvals}
  */
  readonly requiredApprovals: number;
  /**
  * The secret path to apply the secret approval policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#secret_path SecretApprovalPolicy#secret_path}
  */
  readonly secretPath: string;
}
export interface SecretApprovalPolicyApprovers {
  /**
  * The ID of the approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#id SecretApprovalPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of approver. Either group or user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#type SecretApprovalPolicy#type}
  */
  readonly type: string;
  /**
  * The username of the approver. By default, this is the email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#username SecretApprovalPolicy#username}
  */
  readonly username?: string;
}

export function secretApprovalPolicyApproversToTerraform(struct?: SecretApprovalPolicyApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function secretApprovalPolicyApproversToHclTerraform(struct?: SecretApprovalPolicyApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretApprovalPolicyApproversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecretApprovalPolicyApprovers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretApprovalPolicyApprovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class SecretApprovalPolicyApproversList extends cdktf.ComplexList {
  public internalValue? : SecretApprovalPolicyApprovers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecretApprovalPolicyApproversOutputReference {
    return new SecretApprovalPolicyApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy infisical_secret_approval_policy}
*/
export class SecretApprovalPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_approval_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretApprovalPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretApprovalPolicy to import
  * @param importFromId The id of the existing SecretApprovalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretApprovalPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_approval_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/secret_approval_policy infisical_secret_approval_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretApprovalPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecretApprovalPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_approval_policy',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSelfApproval = config.allowSelfApproval;
    this._approvers.internalValue = config.approvers;
    this._enforcementLevel = config.enforcementLevel;
    this._environmentSlug = config.environmentSlug;
    this._environmentSlugs = config.environmentSlugs;
    this._name = config.name;
    this._projectId = config.projectId;
    this._requiredApprovals = config.requiredApprovals;
    this._secretPath = config.secretPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_self_approval - computed: true, optional: true, required: false
  private _allowSelfApproval?: boolean | cdktf.IResolvable; 
  public get allowSelfApproval() {
    return this.getBooleanAttribute('allow_self_approval');
  }
  public set allowSelfApproval(value: boolean | cdktf.IResolvable) {
    this._allowSelfApproval = value;
  }
  public resetAllowSelfApproval() {
    this._allowSelfApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelfApprovalInput() {
    return this._allowSelfApproval;
  }

  // approvers - computed: false, optional: false, required: true
  private _approvers = new SecretApprovalPolicyApproversList(this, "approvers", true);
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: SecretApprovalPolicyApprovers[] | cdktf.IResolvable) {
    this._approvers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }

  // enforcement_level - computed: true, optional: true, required: false
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  public resetEnforcementLevel() {
    this._enforcementLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
  }

  // environment_slug - computed: false, optional: true, required: false
  private _environmentSlug?: string; 
  public get environmentSlug() {
    return this.getStringAttribute('environment_slug');
  }
  public set environmentSlug(value: string) {
    this._environmentSlug = value;
  }
  public resetEnvironmentSlug() {
    this._environmentSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugInput() {
    return this._environmentSlug;
  }

  // environment_slugs - computed: false, optional: true, required: false
  private _environmentSlugs?: string[]; 
  public get environmentSlugs() {
    return this.getListAttribute('environment_slugs');
  }
  public set environmentSlugs(value: string[]) {
    this._environmentSlugs = value;
  }
  public resetEnvironmentSlugs() {
    this._environmentSlugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSlugsInput() {
    return this._environmentSlugs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // required_approvals - computed: false, optional: false, required: true
  private _requiredApprovals?: number; 
  public get requiredApprovals() {
    return this.getNumberAttribute('required_approvals');
  }
  public set requiredApprovals(value: number) {
    this._requiredApprovals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalsInput() {
    return this._requiredApprovals;
  }

  // secret_path - computed: false, optional: false, required: true
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_self_approval: cdktf.booleanToTerraform(this._allowSelfApproval),
      approvers: cdktf.listMapper(secretApprovalPolicyApproversToTerraform, false)(this._approvers.internalValue),
      enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
      environment_slug: cdktf.stringToTerraform(this._environmentSlug),
      environment_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentSlugs),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      required_approvals: cdktf.numberToTerraform(this._requiredApprovals),
      secret_path: cdktf.stringToTerraform(this._secretPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_self_approval: {
        value: cdktf.booleanToHclTerraform(this._allowSelfApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approvers: {
        value: cdktf.listMapperHcl(secretApprovalPolicyApproversToHclTerraform, false)(this._approvers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecretApprovalPolicyApproversList",
      },
      enforcement_level: {
        value: cdktf.stringToHclTerraform(this._enforcementLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_slug: {
        value: cdktf.stringToHclTerraform(this._environmentSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_slugs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentSlugs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required_approvals: {
        value: cdktf.numberToHclTerraform(this._requiredApprovals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_path: {
        value: cdktf.stringToHclTerraform(this._secretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
