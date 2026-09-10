// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsNotificationsInhibitionruleV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#metadata AppsNotificationsInhibitionruleV1Beta1#metadata}
  */
  readonly metadata?: AppsNotificationsInhibitionruleV1Beta1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#options AppsNotificationsInhibitionruleV1Beta1#options}
  */
  readonly options?: AppsNotificationsInhibitionruleV1Beta1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#spec AppsNotificationsInhibitionruleV1Beta1#spec}
  */
  readonly spec?: AppsNotificationsInhibitionruleV1Beta1Spec;
}
export interface AppsNotificationsInhibitionruleV1Beta1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#folder_uid AppsNotificationsInhibitionruleV1Beta1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#uid AppsNotificationsInhibitionruleV1Beta1#uid}
  */
  readonly uid: string;
}

export function appsNotificationsInhibitionruleV1Beta1MetadataToTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsNotificationsInhibitionruleV1Beta1MetadataToHclTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_uid: {
      value: cdktf.stringToHclTerraform(struct!.folderUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsInhibitionruleV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsInhibitionruleV1Beta1Metadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderUid = this._folderUid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsInhibitionruleV1Beta1Metadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderUid = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folderUid = value.folderUid;
      this._uid = value.uid;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // folder_uid - computed: false, optional: true, required: false
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  public resetFolderUid() {
    this._folderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface AppsNotificationsInhibitionruleV1Beta1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#manager_identity AppsNotificationsInhibitionruleV1Beta1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#overwrite AppsNotificationsInhibitionruleV1Beta1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsNotificationsInhibitionruleV1Beta1OptionsToTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsNotificationsInhibitionruleV1Beta1OptionsToHclTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manager_identity: {
      value: cdktf.stringToHclTerraform(struct!.managerIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsInhibitionruleV1Beta1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsInhibitionruleV1Beta1Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managerIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerIdentity = this._managerIdentity;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsInhibitionruleV1Beta1Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managerIdentity = undefined;
      this._overwrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managerIdentity = value.managerIdentity;
      this._overwrite = value.overwrite;
    }
  }

  // manager_identity - computed: false, optional: true, required: false
  private _managerIdentity?: string; 
  public get managerIdentity() {
    return this.getStringAttribute('manager_identity');
  }
  public set managerIdentity(value: string) {
    this._managerIdentity = value;
  }
  public resetManagerIdentity() {
    this._managerIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdentityInput() {
    return this._managerIdentity;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }
}
export interface AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#label AppsNotificationsInhibitionruleV1Beta1#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#type AppsNotificationsInhibitionruleV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#value AppsNotificationsInhibitionruleV1Beta1#value}
  */
  readonly value?: string;
}

export function appsNotificationsInhibitionruleV1Beta1SpecSourceMatchersToTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsNotificationsInhibitionruleV1Beta1SpecSourceMatchersToHclTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchersOutputReference {
    return new AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#label AppsNotificationsInhibitionruleV1Beta1#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#type AppsNotificationsInhibitionruleV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#value AppsNotificationsInhibitionruleV1Beta1#value}
  */
  readonly value?: string;
}

export function appsNotificationsInhibitionruleV1Beta1SpecTargetMatchersToTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsNotificationsInhibitionruleV1Beta1SpecTargetMatchersToHclTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchersOutputReference {
    return new AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsNotificationsInhibitionruleV1Beta1Spec {
  /**
  * Labels that must have equal values in source and target alerts for the inhibition to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#equal AppsNotificationsInhibitionruleV1Beta1#equal}
  */
  readonly equal?: string[];
  /**
  * Matchers that must be satisfied for an alert to be a source of inhibition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#source_matchers AppsNotificationsInhibitionruleV1Beta1#source_matchers}
  */
  readonly sourceMatchers?: AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers[] | cdktf.IResolvable;
  /**
  * Matchers that must be satisfied for an alert to be inhibited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#target_matchers AppsNotificationsInhibitionruleV1Beta1#target_matchers}
  */
  readonly targetMatchers?: AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers[] | cdktf.IResolvable;
}

export function appsNotificationsInhibitionruleV1Beta1SpecToTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equal: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.equal),
    source_matchers: cdktf.listMapper(appsNotificationsInhibitionruleV1Beta1SpecSourceMatchersToTerraform, false)(struct!.sourceMatchers),
    target_matchers: cdktf.listMapper(appsNotificationsInhibitionruleV1Beta1SpecTargetMatchersToTerraform, false)(struct!.targetMatchers),
  }
}


export function appsNotificationsInhibitionruleV1Beta1SpecToHclTerraform(struct?: AppsNotificationsInhibitionruleV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equal: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.equal),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_matchers: {
      value: cdktf.listMapperHcl(appsNotificationsInhibitionruleV1Beta1SpecSourceMatchersToHclTerraform, false)(struct!.sourceMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchersList",
    },
    target_matchers: {
      value: cdktf.listMapperHcl(appsNotificationsInhibitionruleV1Beta1SpecTargetMatchersToHclTerraform, false)(struct!.targetMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsInhibitionruleV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsInhibitionruleV1Beta1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equal !== undefined) {
      hasAnyValues = true;
      internalValueResult.equal = this._equal;
    }
    if (this._sourceMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMatchers = this._sourceMatchers?.internalValue;
    }
    if (this._targetMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMatchers = this._targetMatchers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsInhibitionruleV1Beta1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equal = undefined;
      this._sourceMatchers.internalValue = undefined;
      this._targetMatchers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equal = value.equal;
      this._sourceMatchers.internalValue = value.sourceMatchers;
      this._targetMatchers.internalValue = value.targetMatchers;
    }
  }

  // equal - computed: false, optional: true, required: false
  private _equal?: string[]; 
  public get equal() {
    return this.getListAttribute('equal');
  }
  public set equal(value: string[]) {
    this._equal = value;
  }
  public resetEqual() {
    this._equal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalInput() {
    return this._equal;
  }

  // source_matchers - computed: false, optional: true, required: false
  private _sourceMatchers = new AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchersList(this, "source_matchers", false);
  public get sourceMatchers() {
    return this._sourceMatchers;
  }
  public putSourceMatchers(value: AppsNotificationsInhibitionruleV1Beta1SpecSourceMatchers[] | cdktf.IResolvable) {
    this._sourceMatchers.internalValue = value;
  }
  public resetSourceMatchers() {
    this._sourceMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMatchersInput() {
    return this._sourceMatchers.internalValue;
  }

  // target_matchers - computed: false, optional: true, required: false
  private _targetMatchers = new AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchersList(this, "target_matchers", false);
  public get targetMatchers() {
    return this._targetMatchers;
  }
  public putTargetMatchers(value: AppsNotificationsInhibitionruleV1Beta1SpecTargetMatchers[] | cdktf.IResolvable) {
    this._targetMatchers.internalValue = value;
  }
  public resetTargetMatchers() {
    this._targetMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMatchersInput() {
    return this._targetMatchers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1 grafana_apps_notifications_inhibitionrule_v1beta1}
*/
export class AppsNotificationsInhibitionruleV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_notifications_inhibitionrule_v1beta1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsNotificationsInhibitionruleV1Beta1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsNotificationsInhibitionruleV1Beta1 to import
  * @param importFromId The id of the existing AppsNotificationsInhibitionruleV1Beta1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsNotificationsInhibitionruleV1Beta1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_notifications_inhibitionrule_v1beta1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_notifications_inhibitionrule_v1beta1 grafana_apps_notifications_inhibitionrule_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsNotificationsInhibitionruleV1Beta1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsNotificationsInhibitionruleV1Beta1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_notifications_inhibitionrule_v1beta1',
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
    this._metadata.internalValue = config.metadata;
    this._options.internalValue = config.options;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AppsNotificationsInhibitionruleV1Beta1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsNotificationsInhibitionruleV1Beta1Metadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new AppsNotificationsInhibitionruleV1Beta1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsNotificationsInhibitionruleV1Beta1Options) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AppsNotificationsInhibitionruleV1Beta1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsNotificationsInhibitionruleV1Beta1Spec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: appsNotificationsInhibitionruleV1Beta1MetadataToTerraform(this._metadata.internalValue),
      options: appsNotificationsInhibitionruleV1Beta1OptionsToTerraform(this._options.internalValue),
      spec: appsNotificationsInhibitionruleV1Beta1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsNotificationsInhibitionruleV1Beta1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsNotificationsInhibitionruleV1Beta1Metadata",
      },
      options: {
        value: appsNotificationsInhibitionruleV1Beta1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsNotificationsInhibitionruleV1Beta1Options",
      },
      spec: {
        value: appsNotificationsInhibitionruleV1Beta1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsNotificationsInhibitionruleV1Beta1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
