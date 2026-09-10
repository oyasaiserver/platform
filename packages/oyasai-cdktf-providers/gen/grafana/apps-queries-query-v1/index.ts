// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsQueriesQueryV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#metadata AppsQueriesQueryV1#metadata}
  */
  readonly metadata?: AppsQueriesQueryV1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#options AppsQueriesQueryV1#options}
  */
  readonly options?: AppsQueriesQueryV1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#spec AppsQueriesQueryV1#spec}
  */
  readonly spec?: AppsQueriesQueryV1Spec;
}
export interface AppsQueriesQueryV1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#folder_uid AppsQueriesQueryV1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#uid AppsQueriesQueryV1#uid}
  */
  readonly uid: string;
}

export function appsQueriesQueryV1MetadataToTerraform(struct?: AppsQueriesQueryV1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsQueriesQueryV1MetadataToHclTerraform(struct?: AppsQueriesQueryV1Metadata | cdktf.IResolvable): any {
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

export class AppsQueriesQueryV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsQueriesQueryV1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsQueriesQueryV1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsQueriesQueryV1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#manager_identity AppsQueriesQueryV1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#overwrite AppsQueriesQueryV1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsQueriesQueryV1OptionsToTerraform(struct?: AppsQueriesQueryV1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsQueriesQueryV1OptionsToHclTerraform(struct?: AppsQueriesQueryV1Options | cdktf.IResolvable): any {
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

export class AppsQueriesQueryV1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsQueriesQueryV1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsQueriesQueryV1Options | cdktf.IResolvable | undefined) {
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
export interface AppsQueriesQueryV1SpecTargets {
  /**
  * The returned Dataplane frame type for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#data_type AppsQueriesQueryV1#data_type}
  */
  readonly dataType?: string;
  /**
  * The datasource query for the target, as a JSON string (use jsonencode()).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#properties_json AppsQueriesQueryV1#properties_json}
  */
  readonly propertiesJson: string;
  /**
  * The variable replacements to apply to the target, as a JSON string (use jsonencode()).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#variables_json AppsQueriesQueryV1#variables_json}
  */
  readonly variablesJson?: string;
}

export function appsQueriesQueryV1SpecTargetsToTerraform(struct?: AppsQueriesQueryV1SpecTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    properties_json: cdktf.stringToTerraform(struct!.propertiesJson),
    variables_json: cdktf.stringToTerraform(struct!.variablesJson),
  }
}


export function appsQueriesQueryV1SpecTargetsToHclTerraform(struct?: AppsQueriesQueryV1SpecTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktf.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables_json: {
      value: cdktf.stringToHclTerraform(struct!.variablesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsQueriesQueryV1SpecTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsQueriesQueryV1SpecTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._variablesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.variablesJson = this._variablesJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsQueriesQueryV1SpecTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._propertiesJson = undefined;
      this._variablesJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._propertiesJson = value.propertiesJson;
      this._variablesJson = value.variablesJson;
    }
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // properties_json - computed: false, optional: false, required: true
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // variables_json - computed: false, optional: true, required: false
  private _variablesJson?: string; 
  public get variablesJson() {
    return this.getStringAttribute('variables_json');
  }
  public set variablesJson(value: string) {
    this._variablesJson = value;
  }
  public resetVariablesJson() {
    this._variablesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesJsonInput() {
    return this._variablesJson;
  }
}

export class AppsQueriesQueryV1SpecTargetsList extends cdktf.ComplexList {
  public internalValue? : AppsQueriesQueryV1SpecTargets[] | cdktf.IResolvable

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
  public get(index: number): AppsQueriesQueryV1SpecTargetsOutputReference {
    return new AppsQueriesQueryV1SpecTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsQueriesQueryV1SpecVars {
  /**
  * The values used when no value is selected during render.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#default_values AppsQueriesQueryV1#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#key AppsQueriesQueryV1#key}
  */
  readonly key: string;
  /**
  * The definition (as a JSON string) used by the frontend to fetch the list of selectable values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#value_list_definition_json AppsQueriesQueryV1#value_list_definition_json}
  */
  readonly valueListDefinitionJson?: string;
}

export function appsQueriesQueryV1SpecVarsToTerraform(struct?: AppsQueriesQueryV1SpecVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultValues),
    key: cdktf.stringToTerraform(struct!.key),
    value_list_definition_json: cdktf.stringToTerraform(struct!.valueListDefinitionJson),
  }
}


export function appsQueriesQueryV1SpecVarsToHclTerraform(struct?: AppsQueriesQueryV1SpecVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list_definition_json: {
      value: cdktf.stringToHclTerraform(struct!.valueListDefinitionJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsQueriesQueryV1SpecVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsQueriesQueryV1SpecVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._valueListDefinitionJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueListDefinitionJson = this._valueListDefinitionJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsQueriesQueryV1SpecVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._key = undefined;
      this._valueListDefinitionJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._key = value.key;
      this._valueListDefinitionJson = value.valueListDefinitionJson;
    }
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
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

  // value_list_definition_json - computed: false, optional: true, required: false
  private _valueListDefinitionJson?: string; 
  public get valueListDefinitionJson() {
    return this.getStringAttribute('value_list_definition_json');
  }
  public set valueListDefinitionJson(value: string) {
    this._valueListDefinitionJson = value;
  }
  public resetValueListDefinitionJson() {
    this._valueListDefinitionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListDefinitionJsonInput() {
    return this._valueListDefinitionJson;
  }
}

export class AppsQueriesQueryV1SpecVarsList extends cdktf.ComplexList {
  public internalValue? : AppsQueriesQueryV1SpecVars[] | cdktf.IResolvable

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
  public get(index: number): AppsQueriesQueryV1SpecVarsOutputReference {
    return new AppsQueriesQueryV1SpecVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsQueriesQueryV1Spec {
  /**
  * A longer description of the saved query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#description AppsQueriesQueryV1#description}
  */
  readonly description?: string;
  /**
  * Whether the saved query is locked and cannot be edited in the UI. This is purely for UI display purposes and not for security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#is_locked AppsQueriesQueryV1#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Whether the saved query is visible in the query library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#is_visible AppsQueriesQueryV1#is_visible}
  */
  readonly isVisible?: boolean | cdktf.IResolvable;
  /**
  * The tags used to filter the saved query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#tags AppsQueriesQueryV1#tags}
  */
  readonly tags?: string[];
  /**
  * The display name of the saved query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#title AppsQueriesQueryV1#title}
  */
  readonly title: string;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#targets AppsQueriesQueryV1#targets}
  */
  readonly targets?: AppsQueriesQueryV1SpecTargets[] | cdktf.IResolvable;
  /**
  * vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#vars AppsQueriesQueryV1#vars}
  */
  readonly vars?: AppsQueriesQueryV1SpecVars[] | cdktf.IResolvable;
}

export function appsQueriesQueryV1SpecToTerraform(struct?: AppsQueriesQueryV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    is_locked: cdktf.booleanToTerraform(struct!.isLocked),
    is_visible: cdktf.booleanToTerraform(struct!.isVisible),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    targets: cdktf.listMapper(appsQueriesQueryV1SpecTargetsToTerraform, true)(struct!.targets),
    vars: cdktf.listMapper(appsQueriesQueryV1SpecVarsToTerraform, true)(struct!.vars),
  }
}


export function appsQueriesQueryV1SpecToHclTerraform(struct?: AppsQueriesQueryV1Spec | cdktf.IResolvable): any {
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
    is_locked: {
      value: cdktf.booleanToHclTerraform(struct!.isLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_visible: {
      value: cdktf.booleanToHclTerraform(struct!.isVisible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(appsQueriesQueryV1SpecTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "AppsQueriesQueryV1SpecTargetsList",
    },
    vars: {
      value: cdktf.listMapperHcl(appsQueriesQueryV1SpecVarsToHclTerraform, true)(struct!.vars),
      isBlock: true,
      type: "list",
      storageClassType: "AppsQueriesQueryV1SpecVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsQueriesQueryV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsQueriesQueryV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocked = this._isLocked;
    }
    if (this._isVisible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVisible = this._isVisible;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._vars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsQueriesQueryV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isLocked = undefined;
      this._isVisible = undefined;
      this._tags = undefined;
      this._title = undefined;
      this._targets.internalValue = undefined;
      this._vars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isLocked = value.isLocked;
      this._isVisible = value.isVisible;
      this._tags = value.tags;
      this._title = value.title;
      this._targets.internalValue = value.targets;
      this._vars.internalValue = value.vars;
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

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // is_visible - computed: false, optional: true, required: false
  private _isVisible?: boolean | cdktf.IResolvable; 
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }
  public set isVisible(value: boolean | cdktf.IResolvable) {
    this._isVisible = value;
  }
  public resetIsVisible() {
    this._isVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisibleInput() {
    return this._isVisible;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // targets - computed: false, optional: true, required: false
  private _targets = new AppsQueriesQueryV1SpecTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: AppsQueriesQueryV1SpecTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // vars - computed: false, optional: true, required: false
  private _vars = new AppsQueriesQueryV1SpecVarsList(this, "vars", false);
  public get vars() {
    return this._vars;
  }
  public putVars(value: AppsQueriesQueryV1SpecVars[] | cdktf.IResolvable) {
    this._vars.internalValue = value;
  }
  public resetVars() {
    this._vars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1 grafana_apps_queries_query_v1}
*/
export class AppsQueriesQueryV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_queries_query_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsQueriesQueryV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsQueriesQueryV1 to import
  * @param importFromId The id of the existing AppsQueriesQueryV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsQueriesQueryV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_queries_query_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_queries_query_v1 grafana_apps_queries_query_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsQueriesQueryV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsQueriesQueryV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_queries_query_v1',
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
  private _metadata = new AppsQueriesQueryV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsQueriesQueryV1Metadata) {
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
  private _options = new AppsQueriesQueryV1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsQueriesQueryV1Options) {
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
  private _spec = new AppsQueriesQueryV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsQueriesQueryV1Spec) {
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
      metadata: appsQueriesQueryV1MetadataToTerraform(this._metadata.internalValue),
      options: appsQueriesQueryV1OptionsToTerraform(this._options.internalValue),
      spec: appsQueriesQueryV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsQueriesQueryV1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsQueriesQueryV1Metadata",
      },
      options: {
        value: appsQueriesQueryV1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsQueriesQueryV1Options",
      },
      spec: {
        value: appsQueriesQueryV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsQueriesQueryV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
