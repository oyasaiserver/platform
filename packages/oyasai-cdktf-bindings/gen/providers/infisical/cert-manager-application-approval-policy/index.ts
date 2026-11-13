// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerApplicationApprovalPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application the policy covers. Every approver must be a member of the application. Changing it creates a new policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#application_id CertManagerApplicationApprovalPolicy#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates requested by machine identities skip the approval. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#bypass_for_machine_identities CertManagerApplicationApprovalPolicy#bypass_for_machine_identities}
  */
  readonly bypassForMachineIdentities?: boolean | cdktf.IResolvable;
  /**
  * How long a certificate request can wait for approval before it expires, such as `7d` or `12h`. Must be between 1 hour and 30 days. Leave it out for requests that never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#max_request_ttl CertManagerApplicationApprovalPolicy#max_request_ttl}
  */
  readonly maxRequestTtl?: string;
  /**
  * The name of the approval policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#name CertManagerApplicationApprovalPolicy#name}
  */
  readonly name: string;
  /**
  * The names of the certificate profiles whose certificate requests need approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#profile_names CertManagerApplicationApprovalPolicy#profile_names}
  */
  readonly profileNames: string[];
  /**
  * The approval steps, in the order a request goes through them. A request moves to the next step once the current one has the approvals it requires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#steps CertManagerApplicationApprovalPolicy#steps}
  */
  readonly steps: CertManagerApplicationApprovalPolicySteps[] | cdktf.IResolvable;
}
export interface CertManagerApplicationApprovalPolicyStepsApprovers {
  /**
  * The ID of the approving user or group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#id CertManagerApplicationApprovalPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of the approver. Options: user, group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#type CertManagerApplicationApprovalPolicy#type}
  */
  readonly type: string;
}

export function certManagerApplicationApprovalPolicyStepsApproversToTerraform(struct?: CertManagerApplicationApprovalPolicyStepsApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function certManagerApplicationApprovalPolicyStepsApproversToHclTerraform(struct?: CertManagerApplicationApprovalPolicyStepsApprovers | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerApplicationApprovalPolicyStepsApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertManagerApplicationApprovalPolicyStepsApprovers | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerApplicationApprovalPolicyStepsApprovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
}

export class CertManagerApplicationApprovalPolicyStepsApproversList extends cdktf.ComplexList {
  public internalValue? : CertManagerApplicationApprovalPolicyStepsApprovers[] | cdktf.IResolvable

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
  public get(index: number): CertManagerApplicationApprovalPolicyStepsApproversOutputReference {
    return new CertManagerApplicationApprovalPolicyStepsApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertManagerApplicationApprovalPolicySteps {
  /**
  * The users and groups that can approve at this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#approvers CertManagerApplicationApprovalPolicy#approvers}
  */
  readonly approvers: CertManagerApplicationApprovalPolicyStepsApprovers[] | cdktf.IResolvable;
  /**
  * An optional name for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#name CertManagerApplicationApprovalPolicy#name}
  */
  readonly name?: string;
  /**
  * Whether the step's approvers are notified when a request reaches it. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#notify_approvers CertManagerApplicationApprovalPolicy#notify_approvers}
  */
  readonly notifyApprovers?: boolean | cdktf.IResolvable;
  /**
  * How many of the step's approvers must approve before the request moves on. Must be between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#required_approvals CertManagerApplicationApprovalPolicy#required_approvals}
  */
  readonly requiredApprovals: number;
}

export function certManagerApplicationApprovalPolicyStepsToTerraform(struct?: CertManagerApplicationApprovalPolicySteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approvers: cdktf.listMapper(certManagerApplicationApprovalPolicyStepsApproversToTerraform, false)(struct!.approvers),
    name: cdktf.stringToTerraform(struct!.name),
    notify_approvers: cdktf.booleanToTerraform(struct!.notifyApprovers),
    required_approvals: cdktf.numberToTerraform(struct!.requiredApprovals),
  }
}


export function certManagerApplicationApprovalPolicyStepsToHclTerraform(struct?: CertManagerApplicationApprovalPolicySteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approvers: {
      value: cdktf.listMapperHcl(certManagerApplicationApprovalPolicyStepsApproversToHclTerraform, false)(struct!.approvers),
      isBlock: true,
      type: "set",
      storageClassType: "CertManagerApplicationApprovalPolicyStepsApproversList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_approvers: {
      value: cdktf.booleanToHclTerraform(struct!.notifyApprovers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_approvals: {
      value: cdktf.numberToHclTerraform(struct!.requiredApprovals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerApplicationApprovalPolicyStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertManagerApplicationApprovalPolicySteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvers = this._approvers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyApprovers !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyApprovers = this._notifyApprovers;
    }
    if (this._requiredApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovals = this._requiredApprovals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerApplicationApprovalPolicySteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvers.internalValue = undefined;
      this._name = undefined;
      this._notifyApprovers = undefined;
      this._requiredApprovals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvers.internalValue = value.approvers;
      this._name = value.name;
      this._notifyApprovers = value.notifyApprovers;
      this._requiredApprovals = value.requiredApprovals;
    }
  }

  // approvers - computed: false, optional: false, required: true
  private _approvers = new CertManagerApplicationApprovalPolicyStepsApproversList(this, "approvers", true);
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: CertManagerApplicationApprovalPolicyStepsApprovers[] | cdktf.IResolvable) {
    this._approvers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }

  // name - computed: false, optional: true, required: false
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

  // notify_approvers - computed: true, optional: true, required: false
  private _notifyApprovers?: boolean | cdktf.IResolvable; 
  public get notifyApprovers() {
    return this.getBooleanAttribute('notify_approvers');
  }
  public set notifyApprovers(value: boolean | cdktf.IResolvable) {
    this._notifyApprovers = value;
  }
  public resetNotifyApprovers() {
    this._notifyApprovers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyApproversInput() {
    return this._notifyApprovers;
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
}

export class CertManagerApplicationApprovalPolicyStepsList extends cdktf.ComplexList {
  public internalValue? : CertManagerApplicationApprovalPolicySteps[] | cdktf.IResolvable

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
  public get(index: number): CertManagerApplicationApprovalPolicyStepsOutputReference {
    return new CertManagerApplicationApprovalPolicyStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy infisical_cert_manager_application_approval_policy}
*/
export class CertManagerApplicationApprovalPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_application_approval_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerApplicationApprovalPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerApplicationApprovalPolicy to import
  * @param importFromId The id of the existing CertManagerApplicationApprovalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerApplicationApprovalPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_application_approval_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/cert_manager_application_approval_policy infisical_cert_manager_application_approval_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerApplicationApprovalPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerApplicationApprovalPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_application_approval_policy',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._bypassForMachineIdentities = config.bypassForMachineIdentities;
    this._maxRequestTtl = config.maxRequestTtl;
    this._name = config.name;
    this._profileNames = config.profileNames;
    this._steps.internalValue = config.steps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // bypass_for_machine_identities - computed: true, optional: true, required: false
  private _bypassForMachineIdentities?: boolean | cdktf.IResolvable; 
  public get bypassForMachineIdentities() {
    return this.getBooleanAttribute('bypass_for_machine_identities');
  }
  public set bypassForMachineIdentities(value: boolean | cdktf.IResolvable) {
    this._bypassForMachineIdentities = value;
  }
  public resetBypassForMachineIdentities() {
    this._bypassForMachineIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassForMachineIdentitiesInput() {
    return this._bypassForMachineIdentities;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_request_ttl - computed: false, optional: true, required: false
  private _maxRequestTtl?: string; 
  public get maxRequestTtl() {
    return this.getStringAttribute('max_request_ttl');
  }
  public set maxRequestTtl(value: string) {
    this._maxRequestTtl = value;
  }
  public resetMaxRequestTtl() {
    this._maxRequestTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestTtlInput() {
    return this._maxRequestTtl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // profile_names - computed: false, optional: false, required: true
  private _profileNames?: string[]; 
  public get profileNames() {
    return cdktf.Fn.tolist(this.getListAttribute('profile_names'));
  }
  public set profileNames(value: string[]) {
    this._profileNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNamesInput() {
    return this._profileNames;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new CertManagerApplicationApprovalPolicyStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: CertManagerApplicationApprovalPolicySteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      bypass_for_machine_identities: cdktf.booleanToTerraform(this._bypassForMachineIdentities),
      max_request_ttl: cdktf.stringToTerraform(this._maxRequestTtl),
      name: cdktf.stringToTerraform(this._name),
      profile_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profileNames),
      steps: cdktf.listMapper(certManagerApplicationApprovalPolicyStepsToTerraform, false)(this._steps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_for_machine_identities: {
        value: cdktf.booleanToHclTerraform(this._bypassForMachineIdentities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_request_ttl: {
        value: cdktf.stringToHclTerraform(this._maxRequestTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profileNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      steps: {
        value: cdktf.listMapperHcl(certManagerApplicationApprovalPolicyStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertManagerApplicationApprovalPolicyStepsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
