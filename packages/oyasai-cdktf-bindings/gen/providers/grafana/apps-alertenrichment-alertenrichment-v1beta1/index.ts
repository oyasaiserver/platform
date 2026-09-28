// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsAlertenrichmentAlertenrichmentV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#metadata AppsAlertenrichmentAlertenrichmentV1Beta1#metadata}
  */
  readonly metadata?: AppsAlertenrichmentAlertenrichmentV1Beta1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#options AppsAlertenrichmentAlertenrichmentV1Beta1#options}
  */
  readonly options?: AppsAlertenrichmentAlertenrichmentV1Beta1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#spec AppsAlertenrichmentAlertenrichmentV1Beta1#spec}
  */
  readonly spec?: AppsAlertenrichmentAlertenrichmentV1Beta1Spec;
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#folder_uid AppsAlertenrichmentAlertenrichmentV1Beta1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#uid AppsAlertenrichmentAlertenrichmentV1Beta1#uid}
  */
  readonly uid: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1MetadataToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1MetadataToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1Metadata | cdktf.IResolvable): any {
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsAlertenrichmentAlertenrichmentV1Beta1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#manager_identity AppsAlertenrichmentAlertenrichmentV1Beta1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#overwrite AppsAlertenrichmentAlertenrichmentV1Beta1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1OptionsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1OptionsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1Options | cdktf.IResolvable): any {
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1Options | cdktf.IResolvable | undefined) {
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
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#name AppsAlertenrichmentAlertenrichmentV1Beta1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#type AppsAlertenrichmentAlertenrichmentV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#value AppsAlertenrichmentAlertenrichmentV1Beta1#value}
  */
  readonly value?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#name AppsAlertenrichmentAlertenrichmentV1Beta1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#type AppsAlertenrichmentAlertenrichmentV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#value AppsAlertenrichmentAlertenrichmentV1Beta1#value}
  */
  readonly value?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssertsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssertsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign {
  /**
  * Map of annotation names to values to set on matching alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotations AppsAlertenrichmentAlertenrichmentV1Beta1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssignToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssignToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._timeout = value.timeout;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigationsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigationsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssertsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssertsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign {
  /**
  * Map of annotation names to values to set on matching alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotations AppsAlertenrichmentAlertenrichmentV1Beta1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssignToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssignToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._timeout = value.timeout;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigationsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigationsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery {
  /**
  * Data source type (e.g., 'loki').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_type AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * UID of the data source to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_uid AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_uid}
  */
  readonly dataSourceUid?: string;
  /**
  * Log query expression to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#expr AppsAlertenrichmentAlertenrichmentV1Beta1#expr}
  */
  readonly expr?: string;
  /**
  * Maximum number of log lines to include. Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#max_lines AppsAlertenrichmentAlertenrichmentV1Beta1#max_lines}
  */
  readonly maxLines?: number;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQueryToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_type: cdktf.stringToTerraform(struct!.dataSourceType),
    data_source_uid: cdktf.stringToTerraform(struct!.dataSourceUid),
    expr: cdktf.stringToTerraform(struct!.expr),
    max_lines: cdktf.numberToTerraform(struct!.maxLines),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQueryToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_type: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_uid: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lines: {
      value: cdktf.numberToHclTerraform(struct!.maxLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceType = this._dataSourceType;
    }
    if (this._dataSourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceUid = this._dataSourceUid;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._maxLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLines = this._maxLines;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceType = undefined;
      this._dataSourceUid = undefined;
      this._expr = undefined;
      this._maxLines = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceType = value.dataSourceType;
      this._dataSourceUid = value.dataSourceUid;
      this._expr = value.expr;
      this._maxLines = value.maxLines;
    }
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // data_source_uid - computed: false, optional: true, required: false
  private _dataSourceUid?: string; 
  public get dataSourceUid() {
    return this.getStringAttribute('data_source_uid');
  }
  public set dataSourceUid(value: string) {
    this._dataSourceUid = value;
  }
  public resetDataSourceUid() {
    this._dataSourceUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceUidInput() {
    return this._dataSourceUid;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // max_lines - computed: true, optional: true, required: false
  private _maxLines?: number; 
  public get maxLines() {
    return this.getNumberAttribute('max_lines');
  }
  public set maxLines(value: number) {
    this._maxLines = value;
  }
  public resetMaxLines() {
    this._maxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinesInput() {
    return this._maxLines;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery {
  /**
  * Reference ID for correlating queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#ref_id AppsAlertenrichmentAlertenrichmentV1Beta1#ref_id}
  */
  readonly refId?: string;
  /**
  * Raw request payload for the data source query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#request AppsAlertenrichmentAlertenrichmentV1Beta1#request}
  */
  readonly request?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQueryToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_id: cdktf.stringToTerraform(struct!.refId),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQueryToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refId = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refId = value.refId;
      this._request = value.request;
    }
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * logs_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#logs_query AppsAlertenrichmentAlertenrichmentV1Beta1#logs_query}
  */
  readonly logsQuery?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery;
  /**
  * raw_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#raw_query AppsAlertenrichmentAlertenrichmentV1Beta1#raw_query}
  */
  readonly rawQuery?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    logs_query: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQueryToTerraform(struct!.logsQuery),
    raw_query: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQueryToTerraform(struct!.rawQuery),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs_query: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQueryToHclTerraform(struct!.logsQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery",
    },
    raw_query: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQueryToHclTerraform(struct!.rawQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._logsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsQuery = this._logsQuery?.internalValue;
    }
    if (this._rawQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawQuery = this._rawQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._logsQuery.internalValue = undefined;
      this._rawQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._logsQuery.internalValue = value.logsQuery;
      this._rawQuery.internalValue = value.rawQuery;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // logs_query - computed: false, optional: true, required: false
  private _logsQuery = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQueryOutputReference(this, "logs_query");
  public get logsQuery() {
    return this._logsQuery;
  }
  public putLogsQuery(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceLogsQuery) {
    this._logsQuery.internalValue = value;
  }
  public resetLogsQuery() {
    this._logsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsQueryInput() {
    return this._logsQuery.internalValue;
  }

  // raw_query - computed: false, optional: true, required: false
  private _rawQuery = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQueryOutputReference(this, "raw_query");
  public get rawQuery() {
    return this._rawQuery;
  }
  public putRawQuery(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceRawQuery) {
    this._rawQuery.internalValue = value;
  }
  public resetRawQuery() {
    this._rawQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawQueryInput() {
    return this._rawQuery.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain {
  /**
  * Annotation name to set the explanation in. Defaults to 'ai_explanation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotation AppsAlertenrichmentAlertenrichmentV1Beta1#annotation}
  */
  readonly annotation?: string;
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplainToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplainToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._timeout = value.timeout;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * HTTP endpoint URL to call for enrichment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#url AppsAlertenrichmentAlertenrichmentV1Beta1#url}
  */
  readonly url?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternalToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternalToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSiftToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSiftToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep {
  /**
  * asserts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#asserts AppsAlertenrichmentAlertenrichmentV1Beta1#asserts}
  */
  readonly asserts?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts;
  /**
  * assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#assign AppsAlertenrichmentAlertenrichmentV1Beta1#assign}
  */
  readonly assign?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign;
  /**
  * assistant_investigations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#assistant_investigations AppsAlertenrichmentAlertenrichmentV1Beta1#assistant_investigations}
  */
  readonly assistantInvestigations?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source AppsAlertenrichmentAlertenrichmentV1Beta1#data_source}
  */
  readonly dataSource?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource;
  /**
  * explain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#explain AppsAlertenrichmentAlertenrichmentV1Beta1#explain}
  */
  readonly explain?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#external AppsAlertenrichmentAlertenrichmentV1Beta1#external}
  */
  readonly external?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal;
  /**
  * sift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#sift AppsAlertenrichmentAlertenrichmentV1Beta1#sift}
  */
  readonly sift?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asserts: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssertsToTerraform(struct!.asserts),
    assign: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssignToTerraform(struct!.assign),
    assistant_investigations: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigationsToTerraform(struct!.assistantInvestigations),
    data_source: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceToTerraform(struct!.dataSource),
    explain: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplainToTerraform(struct!.explain),
    external: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternalToTerraform(struct!.external),
    sift: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSiftToTerraform(struct!.sift),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asserts: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssertsToHclTerraform(struct!.asserts),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts",
    },
    assign: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssignToHclTerraform(struct!.assign),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign",
    },
    assistant_investigations: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigationsToHclTerraform(struct!.assistantInvestigations),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations",
    },
    data_source: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource",
    },
    explain: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplainToHclTerraform(struct!.explain),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain",
    },
    external: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal",
    },
    sift: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSiftToHclTerraform(struct!.sift),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asserts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asserts = this._asserts?.internalValue;
    }
    if (this._assign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assign = this._assign?.internalValue;
    }
    if (this._assistantInvestigations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assistantInvestigations = this._assistantInvestigations?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._explain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explain = this._explain?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._sift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sift = this._sift?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asserts.internalValue = undefined;
      this._assign.internalValue = undefined;
      this._assistantInvestigations.internalValue = undefined;
      this._dataSource.internalValue = undefined;
      this._explain.internalValue = undefined;
      this._external.internalValue = undefined;
      this._sift.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asserts.internalValue = value.asserts;
      this._assign.internalValue = value.assign;
      this._assistantInvestigations.internalValue = value.assistantInvestigations;
      this._dataSource.internalValue = value.dataSource;
      this._explain.internalValue = value.explain;
      this._external.internalValue = value.external;
      this._sift.internalValue = value.sift;
    }
  }

  // asserts - computed: false, optional: true, required: false
  private _asserts = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssertsOutputReference(this, "asserts");
  public get asserts() {
    return this._asserts;
  }
  public putAsserts(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAsserts) {
    this._asserts.internalValue = value;
  }
  public resetAsserts() {
    this._asserts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertsInput() {
    return this._asserts.internalValue;
  }

  // assign - computed: false, optional: true, required: false
  private _assign = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssignOutputReference(this, "assign");
  public get assign() {
    return this._assign;
  }
  public putAssign(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssign) {
    this._assign.internalValue = value;
  }
  public resetAssign() {
    this._assign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign.internalValue;
  }

  // assistant_investigations - computed: false, optional: true, required: false
  private _assistantInvestigations = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigationsOutputReference(this, "assistant_investigations");
  public get assistantInvestigations() {
    return this._assistantInvestigations;
  }
  public putAssistantInvestigations(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepAssistantInvestigations) {
    this._assistantInvestigations.internalValue = value;
  }
  public resetAssistantInvestigations() {
    this._assistantInvestigations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantInvestigationsInput() {
    return this._assistantInvestigations.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // explain - computed: false, optional: true, required: false
  private _explain = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplainOutputReference(this, "explain");
  public get explain() {
    return this._explain;
  }
  public putExplain(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExplain) {
    this._explain.internalValue = value;
  }
  public resetExplain() {
    this._explain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainInput() {
    return this._explain.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // sift - computed: false, optional: true, required: false
  private _sift = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSiftOutputReference(this, "sift");
  public get sift() {
    return this._sift;
  }
  public putSift(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepSift) {
    this._sift.internalValue = value;
  }
  public resetSift() {
    this._sift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siftInput() {
    return this._sift.internalValue;
  }
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#step AppsAlertenrichmentAlertenrichmentV1Beta1#step}
  */
  readonly step?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep[] | cdktf.IResolvable;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepToTerraform, true)(struct!.step),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: true, required: false
  private _step = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#name AppsAlertenrichmentAlertenrichmentV1Beta1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#type AppsAlertenrichmentAlertenrichmentV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#value AppsAlertenrichmentAlertenrichmentV1Beta1#value}
  */
  readonly value?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#name AppsAlertenrichmentAlertenrichmentV1Beta1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#type AppsAlertenrichmentAlertenrichmentV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#value AppsAlertenrichmentAlertenrichmentV1Beta1#value}
  */
  readonly value?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition {
  /**
  * Data source request payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#request AppsAlertenrichmentAlertenrichmentV1Beta1#request}
  */
  readonly request?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceConditionToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceConditionToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._request = value.request;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf {
  /**
  * Annotation matchers for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotation_matchers AppsAlertenrichmentAlertenrichmentV1Beta1#annotation_matchers}
  */
  readonly annotationMatchers?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers[] | cdktf.IResolvable;
  /**
  * Label matchers for the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#label_matchers AppsAlertenrichmentAlertenrichmentV1Beta1#label_matchers}
  */
  readonly labelMatchers?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers[] | cdktf.IResolvable;
  /**
  * data_source_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_condition AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_condition}
  */
  readonly dataSourceCondition?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_matchers: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersToTerraform, false)(struct!.annotationMatchers),
    label_matchers: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersToTerraform, false)(struct!.labelMatchers),
    data_source_condition: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceConditionToTerraform(struct!.dataSourceCondition),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_matchers: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersToHclTerraform, false)(struct!.annotationMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersList",
    },
    label_matchers: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersToHclTerraform, false)(struct!.labelMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersList",
    },
    data_source_condition: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceConditionToHclTerraform(struct!.dataSourceCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationMatchers = this._annotationMatchers?.internalValue;
    }
    if (this._labelMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchers = this._labelMatchers?.internalValue;
    }
    if (this._dataSourceCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceCondition = this._dataSourceCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationMatchers.internalValue = undefined;
      this._labelMatchers.internalValue = undefined;
      this._dataSourceCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationMatchers.internalValue = value.annotationMatchers;
      this._labelMatchers.internalValue = value.labelMatchers;
      this._dataSourceCondition.internalValue = value.dataSourceCondition;
    }
  }

  // annotation_matchers - computed: false, optional: true, required: false
  private _annotationMatchers = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchersList(this, "annotation_matchers", false);
  public get annotationMatchers() {
    return this._annotationMatchers;
  }
  public putAnnotationMatchers(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfAnnotationMatchers[] | cdktf.IResolvable) {
    this._annotationMatchers.internalValue = value;
  }
  public resetAnnotationMatchers() {
    this._annotationMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationMatchersInput() {
    return this._annotationMatchers.internalValue;
  }

  // label_matchers - computed: false, optional: true, required: false
  private _labelMatchers = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchersList(this, "label_matchers", false);
  public get labelMatchers() {
    return this._labelMatchers;
  }
  public putLabelMatchers(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfLabelMatchers[] | cdktf.IResolvable) {
    this._labelMatchers.internalValue = value;
  }
  public resetLabelMatchers() {
    this._labelMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchersInput() {
    return this._labelMatchers.internalValue;
  }

  // data_source_condition - computed: false, optional: true, required: false
  private _dataSourceCondition = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceConditionOutputReference(this, "data_source_condition");
  public get dataSourceCondition() {
    return this._dataSourceCondition;
  }
  public putDataSourceCondition(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfDataSourceCondition) {
    this._dataSourceCondition.internalValue = value;
  }
  public resetDataSourceCondition() {
    this._dataSourceCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConditionInput() {
    return this._dataSourceCondition.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssertsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssertsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign {
  /**
  * Map of annotation names to values to set on matching alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotations AppsAlertenrichmentAlertenrichmentV1Beta1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssignToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssignToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._timeout = value.timeout;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigationsToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigationsToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery {
  /**
  * Data source type (e.g., 'loki').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_type AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * UID of the data source to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_uid AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_uid}
  */
  readonly dataSourceUid?: string;
  /**
  * Log query expression to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#expr AppsAlertenrichmentAlertenrichmentV1Beta1#expr}
  */
  readonly expr?: string;
  /**
  * Maximum number of log lines to include. Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#max_lines AppsAlertenrichmentAlertenrichmentV1Beta1#max_lines}
  */
  readonly maxLines?: number;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQueryToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_type: cdktf.stringToTerraform(struct!.dataSourceType),
    data_source_uid: cdktf.stringToTerraform(struct!.dataSourceUid),
    expr: cdktf.stringToTerraform(struct!.expr),
    max_lines: cdktf.numberToTerraform(struct!.maxLines),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQueryToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_type: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_uid: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lines: {
      value: cdktf.numberToHclTerraform(struct!.maxLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceType = this._dataSourceType;
    }
    if (this._dataSourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceUid = this._dataSourceUid;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._maxLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLines = this._maxLines;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceType = undefined;
      this._dataSourceUid = undefined;
      this._expr = undefined;
      this._maxLines = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceType = value.dataSourceType;
      this._dataSourceUid = value.dataSourceUid;
      this._expr = value.expr;
      this._maxLines = value.maxLines;
    }
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // data_source_uid - computed: false, optional: true, required: false
  private _dataSourceUid?: string; 
  public get dataSourceUid() {
    return this.getStringAttribute('data_source_uid');
  }
  public set dataSourceUid(value: string) {
    this._dataSourceUid = value;
  }
  public resetDataSourceUid() {
    this._dataSourceUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceUidInput() {
    return this._dataSourceUid;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // max_lines - computed: true, optional: true, required: false
  private _maxLines?: number; 
  public get maxLines() {
    return this.getNumberAttribute('max_lines');
  }
  public set maxLines(value: number) {
    this._maxLines = value;
  }
  public resetMaxLines() {
    this._maxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinesInput() {
    return this._maxLines;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery {
  /**
  * Reference ID for correlating queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#ref_id AppsAlertenrichmentAlertenrichmentV1Beta1#ref_id}
  */
  readonly refId?: string;
  /**
  * Raw request payload for the data source query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#request AppsAlertenrichmentAlertenrichmentV1Beta1#request}
  */
  readonly request?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQueryToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_id: cdktf.stringToTerraform(struct!.refId),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQueryToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refId = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refId = value.refId;
      this._request = value.request;
    }
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * logs_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#logs_query AppsAlertenrichmentAlertenrichmentV1Beta1#logs_query}
  */
  readonly logsQuery?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery;
  /**
  * raw_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#raw_query AppsAlertenrichmentAlertenrichmentV1Beta1#raw_query}
  */
  readonly rawQuery?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    logs_query: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQueryToTerraform(struct!.logsQuery),
    raw_query: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQueryToTerraform(struct!.rawQuery),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs_query: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQueryToHclTerraform(struct!.logsQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery",
    },
    raw_query: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQueryToHclTerraform(struct!.rawQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._logsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsQuery = this._logsQuery?.internalValue;
    }
    if (this._rawQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawQuery = this._rawQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._logsQuery.internalValue = undefined;
      this._rawQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._logsQuery.internalValue = value.logsQuery;
      this._rawQuery.internalValue = value.rawQuery;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // logs_query - computed: false, optional: true, required: false
  private _logsQuery = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQueryOutputReference(this, "logs_query");
  public get logsQuery() {
    return this._logsQuery;
  }
  public putLogsQuery(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceLogsQuery) {
    this._logsQuery.internalValue = value;
  }
  public resetLogsQuery() {
    this._logsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsQueryInput() {
    return this._logsQuery.internalValue;
  }

  // raw_query - computed: false, optional: true, required: false
  private _rawQuery = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQueryOutputReference(this, "raw_query");
  public get rawQuery() {
    return this._rawQuery;
  }
  public putRawQuery(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceRawQuery) {
    this._rawQuery.internalValue = value;
  }
  public resetRawQuery() {
    this._rawQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawQueryInput() {
    return this._rawQuery.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain {
  /**
  * Annotation name to set the explanation in. Defaults to 'ai_explanation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotation AppsAlertenrichmentAlertenrichmentV1Beta1#annotation}
  */
  readonly annotation?: string;
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplainToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplainToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._timeout = value.timeout;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * HTTP endpoint URL to call for enrichment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#url AppsAlertenrichmentAlertenrichmentV1Beta1#url}
  */
  readonly url?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternalToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternalToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSiftToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSiftToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep {
  /**
  * asserts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#asserts AppsAlertenrichmentAlertenrichmentV1Beta1#asserts}
  */
  readonly asserts?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts;
  /**
  * assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#assign AppsAlertenrichmentAlertenrichmentV1Beta1#assign}
  */
  readonly assign?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign;
  /**
  * assistant_investigations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#assistant_investigations AppsAlertenrichmentAlertenrichmentV1Beta1#assistant_investigations}
  */
  readonly assistantInvestigations?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source AppsAlertenrichmentAlertenrichmentV1Beta1#data_source}
  */
  readonly dataSource?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource;
  /**
  * explain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#explain AppsAlertenrichmentAlertenrichmentV1Beta1#explain}
  */
  readonly explain?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#external AppsAlertenrichmentAlertenrichmentV1Beta1#external}
  */
  readonly external?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal;
  /**
  * sift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#sift AppsAlertenrichmentAlertenrichmentV1Beta1#sift}
  */
  readonly sift?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asserts: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssertsToTerraform(struct!.asserts),
    assign: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssignToTerraform(struct!.assign),
    assistant_investigations: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigationsToTerraform(struct!.assistantInvestigations),
    data_source: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceToTerraform(struct!.dataSource),
    explain: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplainToTerraform(struct!.explain),
    external: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternalToTerraform(struct!.external),
    sift: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSiftToTerraform(struct!.sift),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asserts: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssertsToHclTerraform(struct!.asserts),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts",
    },
    assign: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssignToHclTerraform(struct!.assign),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign",
    },
    assistant_investigations: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigationsToHclTerraform(struct!.assistantInvestigations),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations",
    },
    data_source: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource",
    },
    explain: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplainToHclTerraform(struct!.explain),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain",
    },
    external: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal",
    },
    sift: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSiftToHclTerraform(struct!.sift),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asserts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asserts = this._asserts?.internalValue;
    }
    if (this._assign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assign = this._assign?.internalValue;
    }
    if (this._assistantInvestigations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assistantInvestigations = this._assistantInvestigations?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._explain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explain = this._explain?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._sift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sift = this._sift?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asserts.internalValue = undefined;
      this._assign.internalValue = undefined;
      this._assistantInvestigations.internalValue = undefined;
      this._dataSource.internalValue = undefined;
      this._explain.internalValue = undefined;
      this._external.internalValue = undefined;
      this._sift.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asserts.internalValue = value.asserts;
      this._assign.internalValue = value.assign;
      this._assistantInvestigations.internalValue = value.assistantInvestigations;
      this._dataSource.internalValue = value.dataSource;
      this._explain.internalValue = value.explain;
      this._external.internalValue = value.external;
      this._sift.internalValue = value.sift;
    }
  }

  // asserts - computed: false, optional: true, required: false
  private _asserts = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssertsOutputReference(this, "asserts");
  public get asserts() {
    return this._asserts;
  }
  public putAsserts(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAsserts) {
    this._asserts.internalValue = value;
  }
  public resetAsserts() {
    this._asserts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertsInput() {
    return this._asserts.internalValue;
  }

  // assign - computed: false, optional: true, required: false
  private _assign = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssignOutputReference(this, "assign");
  public get assign() {
    return this._assign;
  }
  public putAssign(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssign) {
    this._assign.internalValue = value;
  }
  public resetAssign() {
    this._assign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign.internalValue;
  }

  // assistant_investigations - computed: false, optional: true, required: false
  private _assistantInvestigations = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigationsOutputReference(this, "assistant_investigations");
  public get assistantInvestigations() {
    return this._assistantInvestigations;
  }
  public putAssistantInvestigations(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepAssistantInvestigations) {
    this._assistantInvestigations.internalValue = value;
  }
  public resetAssistantInvestigations() {
    this._assistantInvestigations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantInvestigationsInput() {
    return this._assistantInvestigations.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // explain - computed: false, optional: true, required: false
  private _explain = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplainOutputReference(this, "explain");
  public get explain() {
    return this._explain;
  }
  public putExplain(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExplain) {
    this._explain.internalValue = value;
  }
  public resetExplain() {
    this._explain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainInput() {
    return this._explain.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // sift - computed: false, optional: true, required: false
  private _sift = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSiftOutputReference(this, "sift");
  public get sift() {
    return this._sift;
  }
  public putSift(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepSift) {
    this._sift.internalValue = value;
  }
  public resetSift() {
    this._sift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siftInput() {
    return this._sift.internalValue;
  }
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#step AppsAlertenrichmentAlertenrichmentV1Beta1#step}
  */
  readonly step?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep[] | cdktf.IResolvable;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepToTerraform, true)(struct!.step),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: true, required: false
  private _step = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * else block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#else AppsAlertenrichmentAlertenrichmentV1Beta1#else}
  */
  readonly else?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse;
  /**
  * if block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#if AppsAlertenrichmentAlertenrichmentV1Beta1#if}
  */
  readonly if?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#then AppsAlertenrichmentAlertenrichmentV1Beta1#then}
  */
  readonly then?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    else: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseToTerraform(struct!.else),
    if: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfToTerraform(struct!.if),
    then: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenToTerraform(struct!.then),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    else: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseToHclTerraform(struct!.else),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse",
    },
    if: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfToHclTerraform(struct!.if),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf",
    },
    then: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._else?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.else = this._else?.internalValue;
    }
    if (this._if?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.if = this._if?.internalValue;
    }
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._else.internalValue = undefined;
      this._if.internalValue = undefined;
      this._then.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._else.internalValue = value.else;
      this._if.internalValue = value.if;
      this._then.internalValue = value.then;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // else - computed: false, optional: true, required: false
  private _else = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElseOutputReference(this, "else");
  public get else() {
    return this._else;
  }
  public putElse(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalElse) {
    this._else.internalValue = value;
  }
  public resetElse() {
    this._else.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseInput() {
    return this._else.internalValue;
  }

  // if - computed: false, optional: true, required: false
  private _if = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIfOutputReference(this, "if");
  public get if() {
    return this._if;
  }
  public putIf(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalIf) {
    this._if.internalValue = value;
  }
  public resetIf() {
    this._if.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery {
  /**
  * Data source type (e.g., 'loki').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_type AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * UID of the data source to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source_uid AppsAlertenrichmentAlertenrichmentV1Beta1#data_source_uid}
  */
  readonly dataSourceUid?: string;
  /**
  * Log query expression to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#expr AppsAlertenrichmentAlertenrichmentV1Beta1#expr}
  */
  readonly expr?: string;
  /**
  * Maximum number of log lines to include. Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#max_lines AppsAlertenrichmentAlertenrichmentV1Beta1#max_lines}
  */
  readonly maxLines?: number;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQueryToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_type: cdktf.stringToTerraform(struct!.dataSourceType),
    data_source_uid: cdktf.stringToTerraform(struct!.dataSourceUid),
    expr: cdktf.stringToTerraform(struct!.expr),
    max_lines: cdktf.numberToTerraform(struct!.maxLines),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQueryToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_type: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_uid: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lines: {
      value: cdktf.numberToHclTerraform(struct!.maxLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceType = this._dataSourceType;
    }
    if (this._dataSourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceUid = this._dataSourceUid;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._maxLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLines = this._maxLines;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceType = undefined;
      this._dataSourceUid = undefined;
      this._expr = undefined;
      this._maxLines = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceType = value.dataSourceType;
      this._dataSourceUid = value.dataSourceUid;
      this._expr = value.expr;
      this._maxLines = value.maxLines;
    }
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // data_source_uid - computed: false, optional: true, required: false
  private _dataSourceUid?: string; 
  public get dataSourceUid() {
    return this.getStringAttribute('data_source_uid');
  }
  public set dataSourceUid(value: string) {
    this._dataSourceUid = value;
  }
  public resetDataSourceUid() {
    this._dataSourceUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceUidInput() {
    return this._dataSourceUid;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // max_lines - computed: true, optional: true, required: false
  private _maxLines?: number; 
  public get maxLines() {
    return this.getNumberAttribute('max_lines');
  }
  public set maxLines(value: number) {
    this._maxLines = value;
  }
  public resetMaxLines() {
    this._maxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinesInput() {
    return this._maxLines;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery {
  /**
  * Reference ID for correlating queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#ref_id AppsAlertenrichmentAlertenrichmentV1Beta1#ref_id}
  */
  readonly refId?: string;
  /**
  * Raw request payload for the data source query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#request AppsAlertenrichmentAlertenrichmentV1Beta1#request}
  */
  readonly request?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQueryToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_id: cdktf.stringToTerraform(struct!.refId),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQueryToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refId = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refId = value.refId;
      this._request = value.request;
    }
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * logs_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#logs_query AppsAlertenrichmentAlertenrichmentV1Beta1#logs_query}
  */
  readonly logsQuery?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery;
  /**
  * raw_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#raw_query AppsAlertenrichmentAlertenrichmentV1Beta1#raw_query}
  */
  readonly rawQuery?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    logs_query: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQueryToTerraform(struct!.logsQuery),
    raw_query: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQueryToTerraform(struct!.rawQuery),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs_query: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQueryToHclTerraform(struct!.logsQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery",
    },
    raw_query: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQueryToHclTerraform(struct!.rawQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._logsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsQuery = this._logsQuery?.internalValue;
    }
    if (this._rawQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawQuery = this._rawQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._logsQuery.internalValue = undefined;
      this._rawQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._logsQuery.internalValue = value.logsQuery;
      this._rawQuery.internalValue = value.rawQuery;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // logs_query - computed: false, optional: true, required: false
  private _logsQuery = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQueryOutputReference(this, "logs_query");
  public get logsQuery() {
    return this._logsQuery;
  }
  public putLogsQuery(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceLogsQuery) {
    this._logsQuery.internalValue = value;
  }
  public resetLogsQuery() {
    this._logsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsQueryInput() {
    return this._logsQuery.internalValue;
  }

  // raw_query - computed: false, optional: true, required: false
  private _rawQuery = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQueryOutputReference(this, "raw_query");
  public get rawQuery() {
    return this._rawQuery;
  }
  public putRawQuery(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceRawQuery) {
    this._rawQuery.internalValue = value;
  }
  public resetRawQuery() {
    this._rawQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawQueryInput() {
    return this._rawQuery.internalValue;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain {
  /**
  * Annotation name to set the explanation in. Defaults to 'ai_explanation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotation AppsAlertenrichmentAlertenrichmentV1Beta1#annotation}
  */
  readonly annotation?: string;
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplainToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplainToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._timeout = value.timeout;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
  /**
  * HTTP endpoint URL to call for enrichment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#url AppsAlertenrichmentAlertenrichmentV1Beta1#url}
  */
  readonly url?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternalToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternalToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift {
  /**
  * Maximum execution time (e.g., '30s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#timeout AppsAlertenrichmentAlertenrichmentV1Beta1#timeout}
  */
  readonly timeout?: string;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepSiftToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepSiftToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep {
  /**
  * asserts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#asserts AppsAlertenrichmentAlertenrichmentV1Beta1#asserts}
  */
  readonly asserts?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts;
  /**
  * assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#assign AppsAlertenrichmentAlertenrichmentV1Beta1#assign}
  */
  readonly assign?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign;
  /**
  * assistant_investigations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#assistant_investigations AppsAlertenrichmentAlertenrichmentV1Beta1#assistant_investigations}
  */
  readonly assistantInvestigations?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations;
  /**
  * conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#conditional AppsAlertenrichmentAlertenrichmentV1Beta1#conditional}
  */
  readonly conditional?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#data_source AppsAlertenrichmentAlertenrichmentV1Beta1#data_source}
  */
  readonly dataSource?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource;
  /**
  * explain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#explain AppsAlertenrichmentAlertenrichmentV1Beta1#explain}
  */
  readonly explain?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#external AppsAlertenrichmentAlertenrichmentV1Beta1#external}
  */
  readonly external?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal;
  /**
  * sift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#sift AppsAlertenrichmentAlertenrichmentV1Beta1#sift}
  */
  readonly sift?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asserts: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssertsToTerraform(struct!.asserts),
    assign: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssignToTerraform(struct!.assign),
    assistant_investigations: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigationsToTerraform(struct!.assistantInvestigations),
    conditional: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalToTerraform(struct!.conditional),
    data_source: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceToTerraform(struct!.dataSource),
    explain: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplainToTerraform(struct!.explain),
    external: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternalToTerraform(struct!.external),
    sift: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepSiftToTerraform(struct!.sift),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecStepToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asserts: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssertsToHclTerraform(struct!.asserts),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts",
    },
    assign: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssignToHclTerraform(struct!.assign),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign",
    },
    assistant_investigations: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigationsToHclTerraform(struct!.assistantInvestigations),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations",
    },
    conditional: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalToHclTerraform(struct!.conditional),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional",
    },
    data_source: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource",
    },
    explain: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplainToHclTerraform(struct!.explain),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain",
    },
    external: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal",
    },
    sift: {
      value: appsAlertenrichmentAlertenrichmentV1Beta1SpecStepSiftToHclTerraform(struct!.sift),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asserts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asserts = this._asserts?.internalValue;
    }
    if (this._assign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assign = this._assign?.internalValue;
    }
    if (this._assistantInvestigations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assistantInvestigations = this._assistantInvestigations?.internalValue;
    }
    if (this._conditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditional = this._conditional?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._explain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explain = this._explain?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._sift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sift = this._sift?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asserts.internalValue = undefined;
      this._assign.internalValue = undefined;
      this._assistantInvestigations.internalValue = undefined;
      this._conditional.internalValue = undefined;
      this._dataSource.internalValue = undefined;
      this._explain.internalValue = undefined;
      this._external.internalValue = undefined;
      this._sift.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asserts.internalValue = value.asserts;
      this._assign.internalValue = value.assign;
      this._assistantInvestigations.internalValue = value.assistantInvestigations;
      this._conditional.internalValue = value.conditional;
      this._dataSource.internalValue = value.dataSource;
      this._explain.internalValue = value.explain;
      this._external.internalValue = value.external;
      this._sift.internalValue = value.sift;
    }
  }

  // asserts - computed: false, optional: true, required: false
  private _asserts = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssertsOutputReference(this, "asserts");
  public get asserts() {
    return this._asserts;
  }
  public putAsserts(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAsserts) {
    this._asserts.internalValue = value;
  }
  public resetAsserts() {
    this._asserts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertsInput() {
    return this._asserts.internalValue;
  }

  // assign - computed: false, optional: true, required: false
  private _assign = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssignOutputReference(this, "assign");
  public get assign() {
    return this._assign;
  }
  public putAssign(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssign) {
    this._assign.internalValue = value;
  }
  public resetAssign() {
    this._assign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign.internalValue;
  }

  // assistant_investigations - computed: false, optional: true, required: false
  private _assistantInvestigations = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigationsOutputReference(this, "assistant_investigations");
  public get assistantInvestigations() {
    return this._assistantInvestigations;
  }
  public putAssistantInvestigations(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepAssistantInvestigations) {
    this._assistantInvestigations.internalValue = value;
  }
  public resetAssistantInvestigations() {
    this._assistantInvestigations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantInvestigationsInput() {
    return this._assistantInvestigations.internalValue;
  }

  // conditional - computed: false, optional: true, required: false
  private _conditional = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditionalOutputReference(this, "conditional");
  public get conditional() {
    return this._conditional;
  }
  public putConditional(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepConditional) {
    this._conditional.internalValue = value;
  }
  public resetConditional() {
    this._conditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalInput() {
    return this._conditional.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // explain - computed: false, optional: true, required: false
  private _explain = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplainOutputReference(this, "explain");
  public get explain() {
    return this._explain;
  }
  public putExplain(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExplain) {
    this._explain.internalValue = value;
  }
  public resetExplain() {
    this._explain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainInput() {
    return this._explain.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // sift - computed: false, optional: true, required: false
  private _sift = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSiftOutputReference(this, "sift");
  public get sift() {
    return this._sift;
  }
  public putSift(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepSift) {
    this._sift.internalValue = value;
  }
  public resetSift() {
    this._sift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siftInput() {
    return this._sift.internalValue;
  }
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepList extends cdktf.ComplexList {
  public internalValue? : AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep[] | cdktf.IResolvable

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
  public get(index: number): AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepOutputReference {
    return new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsAlertenrichmentAlertenrichmentV1Beta1Spec {
  /**
  * UIDs of alert rules this enrichment applies to. If empty, applies to all alert rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#alert_rule_uids AppsAlertenrichmentAlertenrichmentV1Beta1#alert_rule_uids}
  */
  readonly alertRuleUids?: string[];
  /**
  * Annotation matchers that an alert must satisfy for this enrichment to apply. Each matcher is an object with: 'type' (string, one of: =, !=, =~, !~), 'name' (string, annotation key to match), 'value' (string, annotation value to compare against, supports regex for =~/!~ operators).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#annotation_matchers AppsAlertenrichmentAlertenrichmentV1Beta1#annotation_matchers}
  */
  readonly annotationMatchers?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers[] | cdktf.IResolvable;
  /**
  * Description of the alert enrichment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#description AppsAlertenrichmentAlertenrichmentV1Beta1#description}
  */
  readonly description?: string;
  /**
  * Allow modifying alert enrichment outside of Terraform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#disable_provenance AppsAlertenrichmentAlertenrichmentV1Beta1#disable_provenance}
  */
  readonly disableProvenance?: boolean | cdktf.IResolvable;
  /**
  * Label matchers that an alert must satisfy for this enrichment to apply. Each matcher is an object with: 'type' (string, one of: =, !=, =~, !~), 'name' (string, label key to match), 'value' (string, label value to compare against, supports regex for =~/!~ operators).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#label_matchers AppsAlertenrichmentAlertenrichmentV1Beta1#label_matchers}
  */
  readonly labelMatchers?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers[] | cdktf.IResolvable;
  /**
  * Receiver names to match. If empty, applies to all receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#receivers AppsAlertenrichmentAlertenrichmentV1Beta1#receivers}
  */
  readonly receivers?: string[];
  /**
  * The title of the alert enrichment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#title AppsAlertenrichmentAlertenrichmentV1Beta1#title}
  */
  readonly title: string;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#step AppsAlertenrichmentAlertenrichmentV1Beta1#step}
  */
  readonly step?: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep[] | cdktf.IResolvable;
}

export function appsAlertenrichmentAlertenrichmentV1Beta1SpecToTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_rule_uids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertRuleUids),
    annotation_matchers: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersToTerraform, false)(struct!.annotationMatchers),
    description: cdktf.stringToTerraform(struct!.description),
    disable_provenance: cdktf.booleanToTerraform(struct!.disableProvenance),
    label_matchers: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersToTerraform, false)(struct!.labelMatchers),
    receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receivers),
    title: cdktf.stringToTerraform(struct!.title),
    step: cdktf.listMapper(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepToTerraform, true)(struct!.step),
  }
}


export function appsAlertenrichmentAlertenrichmentV1Beta1SpecToHclTerraform(struct?: AppsAlertenrichmentAlertenrichmentV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_rule_uids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertRuleUids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    annotation_matchers: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersToHclTerraform, false)(struct!.annotationMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_provenance: {
      value: cdktf.booleanToHclTerraform(struct!.disableProvenance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_matchers: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersToHclTerraform, false)(struct!.labelMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersList",
    },
    receivers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receivers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step: {
      value: cdktf.listMapperHcl(appsAlertenrichmentAlertenrichmentV1Beta1SpecStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsAlertenrichmentAlertenrichmentV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsAlertenrichmentAlertenrichmentV1Beta1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertRuleUids !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRuleUids = this._alertRuleUids;
    }
    if (this._annotationMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationMatchers = this._annotationMatchers?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableProvenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProvenance = this._disableProvenance;
    }
    if (this._labelMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchers = this._labelMatchers?.internalValue;
    }
    if (this._receivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivers = this._receivers;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsAlertenrichmentAlertenrichmentV1Beta1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertRuleUids = undefined;
      this._annotationMatchers.internalValue = undefined;
      this._description = undefined;
      this._disableProvenance = undefined;
      this._labelMatchers.internalValue = undefined;
      this._receivers = undefined;
      this._title = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertRuleUids = value.alertRuleUids;
      this._annotationMatchers.internalValue = value.annotationMatchers;
      this._description = value.description;
      this._disableProvenance = value.disableProvenance;
      this._labelMatchers.internalValue = value.labelMatchers;
      this._receivers = value.receivers;
      this._title = value.title;
      this._step.internalValue = value.step;
    }
  }

  // alert_rule_uids - computed: false, optional: true, required: false
  private _alertRuleUids?: string[]; 
  public get alertRuleUids() {
    return this.getListAttribute('alert_rule_uids');
  }
  public set alertRuleUids(value: string[]) {
    this._alertRuleUids = value;
  }
  public resetAlertRuleUids() {
    this._alertRuleUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleUidsInput() {
    return this._alertRuleUids;
  }

  // annotation_matchers - computed: false, optional: true, required: false
  private _annotationMatchers = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchersList(this, "annotation_matchers", false);
  public get annotationMatchers() {
    return this._annotationMatchers;
  }
  public putAnnotationMatchers(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecAnnotationMatchers[] | cdktf.IResolvable) {
    this._annotationMatchers.internalValue = value;
  }
  public resetAnnotationMatchers() {
    this._annotationMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationMatchersInput() {
    return this._annotationMatchers.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_provenance - computed: true, optional: true, required: false
  private _disableProvenance?: boolean | cdktf.IResolvable; 
  public get disableProvenance() {
    return this.getBooleanAttribute('disable_provenance');
  }
  public set disableProvenance(value: boolean | cdktf.IResolvable) {
    this._disableProvenance = value;
  }
  public resetDisableProvenance() {
    this._disableProvenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProvenanceInput() {
    return this._disableProvenance;
  }

  // label_matchers - computed: false, optional: true, required: false
  private _labelMatchers = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchersList(this, "label_matchers", false);
  public get labelMatchers() {
    return this._labelMatchers;
  }
  public putLabelMatchers(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecLabelMatchers[] | cdktf.IResolvable) {
    this._labelMatchers.internalValue = value;
  }
  public resetLabelMatchers() {
    this._labelMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchersInput() {
    return this._labelMatchers.internalValue;
  }

  // receivers - computed: false, optional: true, required: false
  private _receivers?: string[]; 
  public get receivers() {
    return this.getListAttribute('receivers');
  }
  public set receivers(value: string[]) {
    this._receivers = value;
  }
  public resetReceivers() {
    this._receivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // step - computed: false, optional: true, required: false
  private _step = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: AppsAlertenrichmentAlertenrichmentV1Beta1SpecStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1 grafana_apps_alertenrichment_alertenrichment_v1beta1}
*/
export class AppsAlertenrichmentAlertenrichmentV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_alertenrichment_alertenrichment_v1beta1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsAlertenrichmentAlertenrichmentV1Beta1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsAlertenrichmentAlertenrichmentV1Beta1 to import
  * @param importFromId The id of the existing AppsAlertenrichmentAlertenrichmentV1Beta1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsAlertenrichmentAlertenrichmentV1Beta1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_alertenrichment_alertenrichment_v1beta1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_alertenrichment_alertenrichment_v1beta1 grafana_apps_alertenrichment_alertenrichment_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsAlertenrichmentAlertenrichmentV1Beta1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsAlertenrichmentAlertenrichmentV1Beta1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_alertenrichment_alertenrichment_v1beta1',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
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
  private _metadata = new AppsAlertenrichmentAlertenrichmentV1Beta1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsAlertenrichmentAlertenrichmentV1Beta1Metadata) {
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
  private _options = new AppsAlertenrichmentAlertenrichmentV1Beta1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsAlertenrichmentAlertenrichmentV1Beta1Options) {
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
  private _spec = new AppsAlertenrichmentAlertenrichmentV1Beta1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsAlertenrichmentAlertenrichmentV1Beta1Spec) {
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
      metadata: appsAlertenrichmentAlertenrichmentV1Beta1MetadataToTerraform(this._metadata.internalValue),
      options: appsAlertenrichmentAlertenrichmentV1Beta1OptionsToTerraform(this._options.internalValue),
      spec: appsAlertenrichmentAlertenrichmentV1Beta1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsAlertenrichmentAlertenrichmentV1Beta1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1Metadata",
      },
      options: {
        value: appsAlertenrichmentAlertenrichmentV1Beta1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1Options",
      },
      spec: {
        value: appsAlertenrichmentAlertenrichmentV1Beta1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsAlertenrichmentAlertenrichmentV1Beta1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
