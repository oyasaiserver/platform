// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsRulesRecordingruleV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#metadata AppsRulesRecordingruleV1Beta1#metadata}
  */
  readonly metadata?: AppsRulesRecordingruleV1Beta1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#options AppsRulesRecordingruleV1Beta1#options}
  */
  readonly options?: AppsRulesRecordingruleV1Beta1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#spec AppsRulesRecordingruleV1Beta1#spec}
  */
  readonly spec?: AppsRulesRecordingruleV1Beta1Spec;
}
export interface AppsRulesRecordingruleV1Beta1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#folder_uid AppsRulesRecordingruleV1Beta1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The Grafana organization ID this resource belongs to, for self-hosted OSS or Enterprise Grafana. When set, it overrides the provider's `org_id` for this resource only, so a single provider configuration can manage App Platform resources across multiple organizations. Not supported on Grafana Cloud (configure a stack with `stack_id` instead). Changing this value forces the resource to be recreated in the new organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#org_id AppsRulesRecordingruleV1Beta1#org_id}
  */
  readonly orgId?: number;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#uid AppsRulesRecordingruleV1Beta1#uid}
  */
  readonly uid: string;
}

export function appsRulesRecordingruleV1Beta1MetadataToTerraform(struct?: AppsRulesRecordingruleV1Beta1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    org_id: cdktf.numberToTerraform(struct!.orgId),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsRulesRecordingruleV1Beta1MetadataToHclTerraform(struct?: AppsRulesRecordingruleV1Beta1Metadata | cdktf.IResolvable): any {
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
    org_id: {
      value: cdktf.numberToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class AppsRulesRecordingruleV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV1Beta1Metadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderUid = this._folderUid;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesRecordingruleV1Beta1Metadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderUid = undefined;
      this._orgId = undefined;
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
      this._orgId = value.orgId;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
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
export interface AppsRulesRecordingruleV1Beta1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#manager_identity AppsRulesRecordingruleV1Beta1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#overwrite AppsRulesRecordingruleV1Beta1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsRulesRecordingruleV1Beta1OptionsToTerraform(struct?: AppsRulesRecordingruleV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsRulesRecordingruleV1Beta1OptionsToHclTerraform(struct?: AppsRulesRecordingruleV1Beta1Options | cdktf.IResolvable): any {
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

export class AppsRulesRecordingruleV1Beta1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV1Beta1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesRecordingruleV1Beta1Options | cdktf.IResolvable | undefined) {
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
export interface AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#from AppsRulesRecordingruleV1Beta1#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#to AppsRulesRecordingruleV1Beta1#to}
  */
  readonly to: string;
}

export function appsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRangeToTerraform(struct?: AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function appsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRangeToHclTerraform(struct?: AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface AppsRulesRecordingruleV1Beta1SpecExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#datasource_uid AppsRulesRecordingruleV1Beta1#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#model AppsRulesRecordingruleV1Beta1#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#query_type AppsRulesRecordingruleV1Beta1#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#relative_time_range AppsRulesRecordingruleV1Beta1#relative_time_range}
  */
  readonly relativeTimeRange: AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#source AppsRulesRecordingruleV1Beta1#source}
  */
  readonly source: boolean | cdktf.IResolvable;
}

export function appsRulesRecordingruleV1Beta1SpecExpressionsToTerraform(struct?: AppsRulesRecordingruleV1Beta1SpecExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_uid: cdktf.stringToTerraform(struct!.datasourceUid),
    model: cdktf.stringToTerraform(struct!.model),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    relative_time_range: appsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
    source: cdktf.booleanToTerraform(struct!.source),
  }
}


export function appsRulesRecordingruleV1Beta1SpecExpressionsToHclTerraform(struct?: AppsRulesRecordingruleV1Beta1SpecExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_uid: {
      value: cdktf.stringToHclTerraform(struct!.datasourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_time_range: {
      value: appsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange",
    },
    source: {
      value: cdktf.booleanToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesRecordingruleV1Beta1SpecExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppsRulesRecordingruleV1Beta1SpecExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceUid = this._datasourceUid;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesRecordingruleV1Beta1SpecExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceUid = undefined;
      this._model = undefined;
      this._queryType = undefined;
      this._relativeTimeRange.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceUid = value.datasourceUid;
      this._model = value.model;
      this._queryType = value.queryType;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
      this._source = value.source;
    }
  }

  // datasource_uid - computed: false, optional: false, required: true
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // relative_time_range - computed: false, optional: false, required: true
  private _relativeTimeRange = new AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: AppsRulesRecordingruleV1Beta1SpecExpressionsRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source?: boolean | cdktf.IResolvable; 
  public get source() {
    return this.getBooleanAttribute('source');
  }
  public set source(value: boolean | cdktf.IResolvable) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class AppsRulesRecordingruleV1Beta1SpecExpressionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AppsRulesRecordingruleV1Beta1SpecExpressions } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): AppsRulesRecordingruleV1Beta1SpecExpressionsOutputReference {
    return new AppsRulesRecordingruleV1Beta1SpecExpressionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppsRulesRecordingruleV1Beta1SpecTrigger {
  /**
  * The interval at which the recording rule should be evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#interval AppsRulesRecordingruleV1Beta1#interval}
  */
  readonly interval: string;
}

export function appsRulesRecordingruleV1Beta1SpecTriggerToTerraform(struct?: AppsRulesRecordingruleV1Beta1SpecTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function appsRulesRecordingruleV1Beta1SpecTriggerToHclTerraform(struct?: AppsRulesRecordingruleV1Beta1SpecTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesRecordingruleV1Beta1SpecTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV1Beta1SpecTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesRecordingruleV1Beta1SpecTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface AppsRulesRecordingruleV1Beta1Spec {
  /**
  * The stages of the rule, keyed by reference ID. Each expression is an object with `model` (the query or expression model as a JSON string, for example from `jsonencode`), `datasource_uid` (the datasource to run against; `__expr__` for server-side expressions), `query_type`, `relative_time_range` (an object with `from` and `to` durations) and `source`. Exactly one expression must set `source = true`. Every field must be set; use `null` for unused fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#expressions AppsRulesRecordingruleV1Beta1#expressions}
  */
  readonly expressions: { [key: string]: AppsRulesRecordingruleV1Beta1SpecExpressions } | cdktf.IResolvable;
  /**
  * Key-value pairs to attach to the recorded metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#labels AppsRulesRecordingruleV1Beta1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the metric to write to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#metric AppsRulesRecordingruleV1Beta1#metric}
  */
  readonly metric: string;
  /**
  * Sets whether the recording rule should be paused or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#paused AppsRulesRecordingruleV1Beta1#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The UID of the datasource to write the metric to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#target_datasource_uid AppsRulesRecordingruleV1Beta1#target_datasource_uid}
  */
  readonly targetDatasourceUid: string;
  /**
  * The title of the recording rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#title AppsRulesRecordingruleV1Beta1#title}
  */
  readonly title: string;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#trigger AppsRulesRecordingruleV1Beta1#trigger}
  */
  readonly trigger: AppsRulesRecordingruleV1Beta1SpecTrigger;
}

export function appsRulesRecordingruleV1Beta1SpecToTerraform(struct?: AppsRulesRecordingruleV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.hashMapper(appsRulesRecordingruleV1Beta1SpecExpressionsToTerraform)(struct!.expressions),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metric: cdktf.stringToTerraform(struct!.metric),
    paused: cdktf.booleanToTerraform(struct!.paused),
    target_datasource_uid: cdktf.stringToTerraform(struct!.targetDatasourceUid),
    title: cdktf.stringToTerraform(struct!.title),
    trigger: appsRulesRecordingruleV1Beta1SpecTriggerToTerraform(struct!.trigger),
  }
}


export function appsRulesRecordingruleV1Beta1SpecToHclTerraform(struct?: AppsRulesRecordingruleV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.hashMapperHcl(appsRulesRecordingruleV1Beta1SpecExpressionsToHclTerraform)(struct!.expressions),
      isBlock: true,
      type: "map",
      storageClassType: "AppsRulesRecordingruleV1Beta1SpecExpressionsMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_datasource_uid: {
      value: cdktf.stringToHclTerraform(struct!.targetDatasourceUid),
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
    trigger: {
      value: appsRulesRecordingruleV1Beta1SpecTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesRecordingruleV1Beta1SpecTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesRecordingruleV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV1Beta1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._targetDatasourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDatasourceUid = this._targetDatasourceUid;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesRecordingruleV1Beta1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
      this._labels = undefined;
      this._metric = undefined;
      this._paused = undefined;
      this._targetDatasourceUid = undefined;
      this._title = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
      this._labels = value.labels;
      this._metric = value.metric;
      this._paused = value.paused;
      this._targetDatasourceUid = value.targetDatasourceUid;
      this._title = value.title;
      this._trigger.internalValue = value.trigger;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new AppsRulesRecordingruleV1Beta1SpecExpressionsMap(this, "expressions");
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: { [key: string]: AppsRulesRecordingruleV1Beta1SpecExpressions } | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // target_datasource_uid - computed: false, optional: false, required: true
  private _targetDatasourceUid?: string; 
  public get targetDatasourceUid() {
    return this.getStringAttribute('target_datasource_uid');
  }
  public set targetDatasourceUid(value: string) {
    this._targetDatasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatasourceUidInput() {
    return this._targetDatasourceUid;
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

  // trigger - computed: false, optional: false, required: true
  private _trigger = new AppsRulesRecordingruleV1Beta1SpecTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: AppsRulesRecordingruleV1Beta1SpecTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1 grafana_apps_rules_recordingrule_v1beta1}
*/
export class AppsRulesRecordingruleV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_rules_recordingrule_v1beta1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsRulesRecordingruleV1Beta1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsRulesRecordingruleV1Beta1 to import
  * @param importFromId The id of the existing AppsRulesRecordingruleV1Beta1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsRulesRecordingruleV1Beta1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_rules_recordingrule_v1beta1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_recordingrule_v1beta1 grafana_apps_rules_recordingrule_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsRulesRecordingruleV1Beta1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsRulesRecordingruleV1Beta1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_rules_recordingrule_v1beta1',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.54.0'
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
  private _metadata = new AppsRulesRecordingruleV1Beta1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsRulesRecordingruleV1Beta1Metadata) {
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
  private _options = new AppsRulesRecordingruleV1Beta1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsRulesRecordingruleV1Beta1Options) {
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
  private _spec = new AppsRulesRecordingruleV1Beta1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsRulesRecordingruleV1Beta1Spec) {
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
      metadata: appsRulesRecordingruleV1Beta1MetadataToTerraform(this._metadata.internalValue),
      options: appsRulesRecordingruleV1Beta1OptionsToTerraform(this._options.internalValue),
      spec: appsRulesRecordingruleV1Beta1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsRulesRecordingruleV1Beta1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesRecordingruleV1Beta1Metadata",
      },
      options: {
        value: appsRulesRecordingruleV1Beta1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesRecordingruleV1Beta1Options",
      },
      spec: {
        value: appsRulesRecordingruleV1Beta1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesRecordingruleV1Beta1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
