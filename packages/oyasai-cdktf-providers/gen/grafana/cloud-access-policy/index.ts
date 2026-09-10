// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the access policy. Defaults to the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#display_name CloudAccessPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#id CloudAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#name CloudAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Region where the API is deployed. Generally where the stack is deployed. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#region CloudAccessPolicy#region}
  */
  readonly region: string;
  /**
  * Scopes of the access policy. See https://grafana.com/docs/grafana-cloud/security-and-account-management/authentication-and-permissions/access-policies/#scopes for possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#scopes CloudAccessPolicy#scopes}
  */
  readonly scopes: string[];
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#conditions CloudAccessPolicy#conditions}
  */
  readonly conditions?: CloudAccessPolicyConditions[] | cdktf.IResolvable;
  /**
  * realm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#realm CloudAccessPolicy#realm}
  */
  readonly realm: CloudAccessPolicyRealm[] | cdktf.IResolvable;
}
export interface CloudAccessPolicyConditions {
  /**
  * Conditions that apply to the access policy,such as IP Allow lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#allowed_subnets CloudAccessPolicy#allowed_subnets}
  */
  readonly allowedSubnets: string[];
}

export function cloudAccessPolicyConditionsToTerraform(struct?: CloudAccessPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSubnets),
  }
}


export function cloudAccessPolicyConditionsToHclTerraform(struct?: CloudAccessPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSubnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccessPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccessPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSubnets = this._allowedSubnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccessPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedSubnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedSubnets = value.allowedSubnets;
    }
  }

  // allowed_subnets - computed: false, optional: false, required: true
  private _allowedSubnets?: string[]; 
  public get allowedSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_subnets'));
  }
  public set allowedSubnets(value: string[]) {
    this._allowedSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSubnetsInput() {
    return this._allowedSubnets;
  }
}

export class CloudAccessPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : CloudAccessPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): CloudAccessPolicyConditionsOutputReference {
    return new CloudAccessPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAccessPolicyRealmLabelPolicy {
  /**
  * The label selector to match in metrics or logs query. Should be in PromQL or LogQL format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#selector CloudAccessPolicy#selector}
  */
  readonly selector: string;
}

export function cloudAccessPolicyRealmLabelPolicyToTerraform(struct?: CloudAccessPolicyRealmLabelPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function cloudAccessPolicyRealmLabelPolicyToHclTerraform(struct?: CloudAccessPolicyRealmLabelPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccessPolicyRealmLabelPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccessPolicyRealmLabelPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccessPolicyRealmLabelPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class CloudAccessPolicyRealmLabelPolicyList extends cdktf.ComplexList {
  public internalValue? : CloudAccessPolicyRealmLabelPolicy[] | cdktf.IResolvable

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
  public get(index: number): CloudAccessPolicyRealmLabelPolicyOutputReference {
    return new CloudAccessPolicyRealmLabelPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAccessPolicyRealm {
  /**
  * The identifier of the org or stack. For orgs, this is the slug, for stacks, this is the stack ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#identifier CloudAccessPolicy#identifier}
  */
  readonly identifier: string;
  /**
  * Whether a policy applies to a Cloud org or a specific stack. Should be one of `org` or `stack`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#type CloudAccessPolicy#type}
  */
  readonly type: string;
  /**
  * label_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#label_policy CloudAccessPolicy#label_policy}
  */
  readonly labelPolicy?: CloudAccessPolicyRealmLabelPolicy[] | cdktf.IResolvable;
}

export function cloudAccessPolicyRealmToTerraform(struct?: CloudAccessPolicyRealm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    type: cdktf.stringToTerraform(struct!.type),
    label_policy: cdktf.listMapper(cloudAccessPolicyRealmLabelPolicyToTerraform, true)(struct!.labelPolicy),
  }
}


export function cloudAccessPolicyRealmToHclTerraform(struct?: CloudAccessPolicyRealm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
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
    label_policy: {
      value: cdktf.listMapperHcl(cloudAccessPolicyRealmLabelPolicyToHclTerraform, true)(struct!.labelPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "CloudAccessPolicyRealmLabelPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccessPolicyRealmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccessPolicyRealm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._labelPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelPolicy = this._labelPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccessPolicyRealm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._type = undefined;
      this._labelPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._type = value.type;
      this._labelPolicy.internalValue = value.labelPolicy;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // label_policy - computed: false, optional: true, required: false
  private _labelPolicy = new CloudAccessPolicyRealmLabelPolicyList(this, "label_policy", true);
  public get labelPolicy() {
    return this._labelPolicy;
  }
  public putLabelPolicy(value: CloudAccessPolicyRealmLabelPolicy[] | cdktf.IResolvable) {
    this._labelPolicy.internalValue = value;
  }
  public resetLabelPolicy() {
    this._labelPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPolicyInput() {
    return this._labelPolicy.internalValue;
  }
}

export class CloudAccessPolicyRealmList extends cdktf.ComplexList {
  public internalValue? : CloudAccessPolicyRealm[] | cdktf.IResolvable

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
  public get(index: number): CloudAccessPolicyRealmOutputReference {
    return new CloudAccessPolicyRealmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy grafana_cloud_access_policy}
*/
export class CloudAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccessPolicy to import
  * @param importFromId The id of the existing CloudAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_access_policy grafana_cloud_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._scopes = config.scopes;
    this._conditions.internalValue = config.conditions;
    this._realm.internalValue = config.realm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new CloudAccessPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CloudAccessPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // realm - computed: false, optional: false, required: true
  private _realm = new CloudAccessPolicyRealmList(this, "realm", false);
  public get realm() {
    return this._realm;
  }
  public putRealm(value: CloudAccessPolicyRealm[] | cdktf.IResolvable) {
    this._realm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      conditions: cdktf.listMapper(cloudAccessPolicyConditionsToTerraform, true)(this._conditions.internalValue),
      realm: cdktf.listMapper(cloudAccessPolicyRealmToTerraform, true)(this._realm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      conditions: {
        value: cdktf.listMapperHcl(cloudAccessPolicyConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAccessPolicyConditionsList",
      },
      realm: {
        value: cdktf.listMapperHcl(cloudAccessPolicyRealmToHclTerraform, true)(this._realm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccessPolicyRealmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
