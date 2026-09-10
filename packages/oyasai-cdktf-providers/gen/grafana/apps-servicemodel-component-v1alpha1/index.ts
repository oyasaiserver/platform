// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsServicemodelComponentV1Alpha1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#metadata AppsServicemodelComponentV1Alpha1#metadata}
  */
  readonly metadata?: AppsServicemodelComponentV1Alpha1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#options AppsServicemodelComponentV1Alpha1#options}
  */
  readonly options?: AppsServicemodelComponentV1Alpha1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#spec AppsServicemodelComponentV1Alpha1#spec}
  */
  readonly spec?: AppsServicemodelComponentV1Alpha1Spec;
}
export interface AppsServicemodelComponentV1Alpha1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#folder_uid AppsServicemodelComponentV1Alpha1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#uid AppsServicemodelComponentV1Alpha1#uid}
  */
  readonly uid: string;
}

export function appsServicemodelComponentV1Alpha1MetadataToTerraform(struct?: AppsServicemodelComponentV1Alpha1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsServicemodelComponentV1Alpha1MetadataToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1Metadata | cdktf.IResolvable): any {
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

export class AppsServicemodelComponentV1Alpha1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsServicemodelComponentV1Alpha1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsServicemodelComponentV1Alpha1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsServicemodelComponentV1Alpha1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#manager_identity AppsServicemodelComponentV1Alpha1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#overwrite AppsServicemodelComponentV1Alpha1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsServicemodelComponentV1Alpha1OptionsToTerraform(struct?: AppsServicemodelComponentV1Alpha1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsServicemodelComponentV1Alpha1OptionsToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1Options | cdktf.IResolvable): any {
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

export class AppsServicemodelComponentV1Alpha1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsServicemodelComponentV1Alpha1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsServicemodelComponentV1Alpha1Options | cdktf.IResolvable | undefined) {
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
export interface AppsServicemodelComponentV1Alpha1SpecDependsOnRefs {
  /**
  * API version of the referenced object. Defaults to `servicemodel.ext.grafana.com/v1alpha1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#api_version AppsServicemodelComponentV1Alpha1#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referenced object. Defaults to `Component`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#kind AppsServicemodelComponentV1Alpha1#kind}
  */
  readonly kind?: string;
  /**
  * Name (`metadata.uid`) of the component this service depends on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#name AppsServicemodelComponentV1Alpha1#name}
  */
  readonly name: string;
}

export function appsServicemodelComponentV1Alpha1SpecDependsOnRefsToTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecDependsOnRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appsServicemodelComponentV1Alpha1SpecDependsOnRefsToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecDependsOnRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsServicemodelComponentV1Alpha1SpecDependsOnRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsServicemodelComponentV1Alpha1SpecDependsOnRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsServicemodelComponentV1Alpha1SpecDependsOnRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}

export class AppsServicemodelComponentV1Alpha1SpecDependsOnRefsList extends cdktf.ComplexList {
  public internalValue? : AppsServicemodelComponentV1Alpha1SpecDependsOnRefs[] | cdktf.IResolvable

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
  public get(index: number): AppsServicemodelComponentV1Alpha1SpecDependsOnRefsOutputReference {
    return new AppsServicemodelComponentV1Alpha1SpecDependsOnRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsServicemodelComponentV1Alpha1SpecIdentifiers {
  /**
  * Identifier key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#key AppsServicemodelComponentV1Alpha1#key}
  */
  readonly key: string;
  /**
  * Identifier value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#value AppsServicemodelComponentV1Alpha1#value}
  */
  readonly value: string;
}

export function appsServicemodelComponentV1Alpha1SpecIdentifiersToTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appsServicemodelComponentV1Alpha1SpecIdentifiersToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AppsServicemodelComponentV1Alpha1SpecIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsServicemodelComponentV1Alpha1SpecIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsServicemodelComponentV1Alpha1SpecIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppsServicemodelComponentV1Alpha1SpecIdentifiersList extends cdktf.ComplexList {
  public internalValue? : AppsServicemodelComponentV1Alpha1SpecIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): AppsServicemodelComponentV1Alpha1SpecIdentifiersOutputReference {
    return new AppsServicemodelComponentV1Alpha1SpecIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsServicemodelComponentV1Alpha1SpecLinks {
  /**
  * Icon of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#icon AppsServicemodelComponentV1Alpha1#icon}
  */
  readonly icon?: string;
  /**
  * Display title of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#title AppsServicemodelComponentV1Alpha1#title}
  */
  readonly title?: string;
  /**
  * Type of the link. The Service Center UI uses `documentation`, `repository`, `backlog` and `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#type AppsServicemodelComponentV1Alpha1#type}
  */
  readonly type?: string;
  /**
  * URL of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#url AppsServicemodelComponentV1Alpha1#url}
  */
  readonly url: string;
}

export function appsServicemodelComponentV1Alpha1SpecLinksToTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appsServicemodelComponentV1Alpha1SpecLinksToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class AppsServicemodelComponentV1Alpha1SpecLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsServicemodelComponentV1Alpha1SpecLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsServicemodelComponentV1Alpha1SpecLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon = undefined;
      this._title = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon = value.icon;
      this._title = value.title;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class AppsServicemodelComponentV1Alpha1SpecLinksList extends cdktf.ComplexList {
  public internalValue? : AppsServicemodelComponentV1Alpha1SpecLinks[] | cdktf.IResolvable

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
  public get(index: number): AppsServicemodelComponentV1Alpha1SpecLinksOutputReference {
    return new AppsServicemodelComponentV1Alpha1SpecLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsServicemodelComponentV1Alpha1SpecOwnerRef {
  /**
  * API version of the referenced object. Defaults to `iam.grafana.app/v0alpha1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#api_version AppsServicemodelComponentV1Alpha1#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referenced object. Defaults to `Team`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#kind AppsServicemodelComponentV1Alpha1#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referenced object. For the default team reference, this is the Grafana team UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#name AppsServicemodelComponentV1Alpha1#name}
  */
  readonly name?: string;
}

export function appsServicemodelComponentV1Alpha1SpecOwnerRefToTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecOwnerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appsServicemodelComponentV1Alpha1SpecOwnerRefToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1SpecOwnerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsServicemodelComponentV1Alpha1SpecOwnerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsServicemodelComponentV1Alpha1SpecOwnerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsServicemodelComponentV1Alpha1SpecOwnerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface AppsServicemodelComponentV1Alpha1Spec {
  /**
  * Description of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#description AppsServicemodelComponentV1Alpha1#description}
  */
  readonly description?: string;
  /**
  * Display name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#title AppsServicemodelComponentV1Alpha1#title}
  */
  readonly title: string;
  /**
  * Component type. Defaults to `service`, the only type currently displayed by Service Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#type AppsServicemodelComponentV1Alpha1#type}
  */
  readonly type?: string;
  /**
  * depends_on_refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#depends_on_refs AppsServicemodelComponentV1Alpha1#depends_on_refs}
  */
  readonly dependsOnRefs?: AppsServicemodelComponentV1Alpha1SpecDependsOnRefs[] | cdktf.IResolvable;
  /**
  * identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#identifiers AppsServicemodelComponentV1Alpha1#identifiers}
  */
  readonly identifiers?: AppsServicemodelComponentV1Alpha1SpecIdentifiers[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#links AppsServicemodelComponentV1Alpha1#links}
  */
  readonly links?: AppsServicemodelComponentV1Alpha1SpecLinks[] | cdktf.IResolvable;
  /**
  * owner_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#owner_ref AppsServicemodelComponentV1Alpha1#owner_ref}
  */
  readonly ownerRef?: AppsServicemodelComponentV1Alpha1SpecOwnerRef;
}

export function appsServicemodelComponentV1Alpha1SpecToTerraform(struct?: AppsServicemodelComponentV1Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    depends_on_refs: cdktf.listMapper(appsServicemodelComponentV1Alpha1SpecDependsOnRefsToTerraform, true)(struct!.dependsOnRefs),
    identifiers: cdktf.listMapper(appsServicemodelComponentV1Alpha1SpecIdentifiersToTerraform, true)(struct!.identifiers),
    links: cdktf.listMapper(appsServicemodelComponentV1Alpha1SpecLinksToTerraform, true)(struct!.links),
    owner_ref: appsServicemodelComponentV1Alpha1SpecOwnerRefToTerraform(struct!.ownerRef),
  }
}


export function appsServicemodelComponentV1Alpha1SpecToHclTerraform(struct?: AppsServicemodelComponentV1Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    depends_on_refs: {
      value: cdktf.listMapperHcl(appsServicemodelComponentV1Alpha1SpecDependsOnRefsToHclTerraform, true)(struct!.dependsOnRefs),
      isBlock: true,
      type: "list",
      storageClassType: "AppsServicemodelComponentV1Alpha1SpecDependsOnRefsList",
    },
    identifiers: {
      value: cdktf.listMapperHcl(appsServicemodelComponentV1Alpha1SpecIdentifiersToHclTerraform, true)(struct!.identifiers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsServicemodelComponentV1Alpha1SpecIdentifiersList",
    },
    links: {
      value: cdktf.listMapperHcl(appsServicemodelComponentV1Alpha1SpecLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "AppsServicemodelComponentV1Alpha1SpecLinksList",
    },
    owner_ref: {
      value: appsServicemodelComponentV1Alpha1SpecOwnerRefToHclTerraform(struct!.ownerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsServicemodelComponentV1Alpha1SpecOwnerRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsServicemodelComponentV1Alpha1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsServicemodelComponentV1Alpha1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dependsOnRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOnRefs = this._dependsOnRefs?.internalValue;
    }
    if (this._identifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._ownerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerRef = this._ownerRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsServicemodelComponentV1Alpha1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._title = undefined;
      this._type = undefined;
      this._dependsOnRefs.internalValue = undefined;
      this._identifiers.internalValue = undefined;
      this._links.internalValue = undefined;
      this._ownerRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._title = value.title;
      this._type = value.type;
      this._dependsOnRefs.internalValue = value.dependsOnRefs;
      this._identifiers.internalValue = value.identifiers;
      this._links.internalValue = value.links;
      this._ownerRef.internalValue = value.ownerRef;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

  // depends_on_refs - computed: false, optional: true, required: false
  private _dependsOnRefs = new AppsServicemodelComponentV1Alpha1SpecDependsOnRefsList(this, "depends_on_refs", false);
  public get dependsOnRefs() {
    return this._dependsOnRefs;
  }
  public putDependsOnRefs(value: AppsServicemodelComponentV1Alpha1SpecDependsOnRefs[] | cdktf.IResolvable) {
    this._dependsOnRefs.internalValue = value;
  }
  public resetDependsOnRefs() {
    this._dependsOnRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnRefsInput() {
    return this._dependsOnRefs.internalValue;
  }

  // identifiers - computed: false, optional: true, required: false
  private _identifiers = new AppsServicemodelComponentV1Alpha1SpecIdentifiersList(this, "identifiers", false);
  public get identifiers() {
    return this._identifiers;
  }
  public putIdentifiers(value: AppsServicemodelComponentV1Alpha1SpecIdentifiers[] | cdktf.IResolvable) {
    this._identifiers.internalValue = value;
  }
  public resetIdentifiers() {
    this._identifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers.internalValue;
  }

  // links - computed: false, optional: true, required: false
  private _links = new AppsServicemodelComponentV1Alpha1SpecLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: AppsServicemodelComponentV1Alpha1SpecLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // owner_ref - computed: false, optional: true, required: false
  private _ownerRef = new AppsServicemodelComponentV1Alpha1SpecOwnerRefOutputReference(this, "owner_ref");
  public get ownerRef() {
    return this._ownerRef;
  }
  public putOwnerRef(value: AppsServicemodelComponentV1Alpha1SpecOwnerRef) {
    this._ownerRef.internalValue = value;
  }
  public resetOwnerRef() {
    this._ownerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerRefInput() {
    return this._ownerRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1 grafana_apps_servicemodel_component_v1alpha1}
*/
export class AppsServicemodelComponentV1Alpha1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_servicemodel_component_v1alpha1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsServicemodelComponentV1Alpha1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsServicemodelComponentV1Alpha1 to import
  * @param importFromId The id of the existing AppsServicemodelComponentV1Alpha1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsServicemodelComponentV1Alpha1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_servicemodel_component_v1alpha1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_servicemodel_component_v1alpha1 grafana_apps_servicemodel_component_v1alpha1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsServicemodelComponentV1Alpha1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsServicemodelComponentV1Alpha1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_servicemodel_component_v1alpha1',
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
  private _metadata = new AppsServicemodelComponentV1Alpha1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsServicemodelComponentV1Alpha1Metadata) {
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
  private _options = new AppsServicemodelComponentV1Alpha1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsServicemodelComponentV1Alpha1Options) {
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
  private _spec = new AppsServicemodelComponentV1Alpha1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsServicemodelComponentV1Alpha1Spec) {
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
      metadata: appsServicemodelComponentV1Alpha1MetadataToTerraform(this._metadata.internalValue),
      options: appsServicemodelComponentV1Alpha1OptionsToTerraform(this._options.internalValue),
      spec: appsServicemodelComponentV1Alpha1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsServicemodelComponentV1Alpha1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsServicemodelComponentV1Alpha1Metadata",
      },
      options: {
        value: appsServicemodelComponentV1Alpha1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsServicemodelComponentV1Alpha1Options",
      },
      spec: {
        value: appsServicemodelComponentV1Alpha1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsServicemodelComponentV1Alpha1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
