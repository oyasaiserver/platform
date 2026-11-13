// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsRulesAlertruleV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#metadata AppsRulesAlertruleV1Beta1#metadata}
  */
  readonly metadata?: AppsRulesAlertruleV1Beta1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#options AppsRulesAlertruleV1Beta1#options}
  */
  readonly options?: AppsRulesAlertruleV1Beta1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#spec AppsRulesAlertruleV1Beta1#spec}
  */
  readonly spec?: AppsRulesAlertruleV1Beta1Spec;
}
export interface AppsRulesAlertruleV1Beta1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#folder_uid AppsRulesAlertruleV1Beta1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The Grafana organization ID this resource belongs to, for self-hosted OSS or Enterprise Grafana. When set, it overrides the provider's `org_id` for this resource only, so a single provider configuration can manage App Platform resources across multiple organizations. Not supported on Grafana Cloud (configure a stack with `stack_id` instead). Changing this value forces the resource to be recreated in the new organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#org_id AppsRulesAlertruleV1Beta1#org_id}
  */
  readonly orgId?: number;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#uid AppsRulesAlertruleV1Beta1#uid}
  */
  readonly uid: string;
}

export function appsRulesAlertruleV1Beta1MetadataToTerraform(struct?: AppsRulesAlertruleV1Beta1Metadata | cdktf.IResolvable): any {
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


export function appsRulesAlertruleV1Beta1MetadataToHclTerraform(struct?: AppsRulesAlertruleV1Beta1Metadata | cdktf.IResolvable): any {
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

export class AppsRulesAlertruleV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesAlertruleV1Beta1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsRulesAlertruleV1Beta1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#manager_identity AppsRulesAlertruleV1Beta1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#overwrite AppsRulesAlertruleV1Beta1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsRulesAlertruleV1Beta1OptionsToTerraform(struct?: AppsRulesAlertruleV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsRulesAlertruleV1Beta1OptionsToHclTerraform(struct?: AppsRulesAlertruleV1Beta1Options | cdktf.IResolvable): any {
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

export class AppsRulesAlertruleV1Beta1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesAlertruleV1Beta1Options | cdktf.IResolvable | undefined) {
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
export interface AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#from AppsRulesAlertruleV1Beta1#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#to AppsRulesAlertruleV1Beta1#to}
  */
  readonly to: string;
}

export function appsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRangeToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function appsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRangeToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable): any {
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

export class AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange | cdktf.IResolvable | undefined) {
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
export interface AppsRulesAlertruleV1Beta1SpecExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#datasource_uid AppsRulesAlertruleV1Beta1#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#model AppsRulesAlertruleV1Beta1#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#query_type AppsRulesAlertruleV1Beta1#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#relative_time_range AppsRulesAlertruleV1Beta1#relative_time_range}
  */
  readonly relativeTimeRange: AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#source AppsRulesAlertruleV1Beta1#source}
  */
  readonly source: boolean | cdktf.IResolvable;
}

export function appsRulesAlertruleV1Beta1SpecExpressionsToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_uid: cdktf.stringToTerraform(struct!.datasourceUid),
    model: cdktf.stringToTerraform(struct!.model),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    relative_time_range: appsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
    source: cdktf.booleanToTerraform(struct!.source),
  }
}


export function appsRulesAlertruleV1Beta1SpecExpressionsToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecExpressions | cdktf.IResolvable): any {
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
      value: appsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange",
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

export class AppsRulesAlertruleV1Beta1SpecExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecExpressions | cdktf.IResolvable | undefined) {
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
  private _relativeTimeRange = new AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: AppsRulesAlertruleV1Beta1SpecExpressionsRelativeTimeRange) {
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

export class AppsRulesAlertruleV1Beta1SpecExpressionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AppsRulesAlertruleV1Beta1SpecExpressions } | cdktf.IResolvable

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
  public get(key: string): AppsRulesAlertruleV1Beta1SpecExpressionsOutputReference {
    return new AppsRulesAlertruleV1Beta1SpecExpressionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppsRulesAlertruleV1Beta1SpecPanelRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#dashboard_uid AppsRulesAlertruleV1Beta1#dashboard_uid}
  */
  readonly dashboardUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#panel_id AppsRulesAlertruleV1Beta1#panel_id}
  */
  readonly panelId?: number;
}

export function appsRulesAlertruleV1Beta1SpecPanelRefToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecPanelRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_uid: cdktf.stringToTerraform(struct!.dashboardUid),
    panel_id: cdktf.numberToTerraform(struct!.panelId),
  }
}


export function appsRulesAlertruleV1Beta1SpecPanelRefToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecPanelRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_uid: {
      value: cdktf.stringToHclTerraform(struct!.dashboardUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panel_id: {
      value: cdktf.numberToHclTerraform(struct!.panelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesAlertruleV1Beta1SpecPanelRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecPanelRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardUid = this._dashboardUid;
    }
    if (this._panelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelId = this._panelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecPanelRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardUid = undefined;
      this._panelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardUid = value.dashboardUid;
      this._panelId = value.panelId;
    }
  }

  // dashboard_uid - computed: false, optional: true, required: false
  private _dashboardUid?: string; 
  public get dashboardUid() {
    return this.getStringAttribute('dashboard_uid');
  }
  public set dashboardUid(value: string) {
    this._dashboardUid = value;
  }
  public resetDashboardUid() {
    this._dashboardUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardUidInput() {
    return this._dashboardUid;
  }

  // panel_id - computed: false, optional: true, required: false
  private _panelId?: number; 
  public get panelId() {
    return this.getNumberAttribute('panel_id');
  }
  public set panelId(value: number) {
    this._panelId = value;
  }
  public resetPanelId() {
    this._panelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelIdInput() {
    return this._panelId;
  }
}
export interface AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree {
  /**
  * The name of the routing tree to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#routing_tree AppsRulesAlertruleV1Beta1#routing_tree}
  */
  readonly routingTree?: string;
}

export function appsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTreeToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_tree: cdktf.stringToTerraform(struct!.routingTree),
  }
}


export function appsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTreeToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_tree: {
      value: cdktf.stringToHclTerraform(struct!.routingTree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingTree !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTree = this._routingTree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingTree = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingTree = value.routingTree;
    }
  }

  // routing_tree - computed: false, optional: true, required: false
  private _routingTree?: string; 
  public get routingTree() {
    return this.getStringAttribute('routing_tree');
  }
  public set routingTree(value: string) {
    this._routingTree = value;
  }
  public resetRoutingTree() {
    this._routingTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTreeInput() {
    return this._routingTree;
  }
}
export interface AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting {
  /**
  * A list of time interval names to apply to alerts that match this policy to suppress them unless they are sent at the specified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#active_timings AppsRulesAlertruleV1Beta1#active_timings}
  */
  readonly activeTimings?: string[];
  /**
  * The contact point to route notifications that match this rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#contact_point AppsRulesAlertruleV1Beta1#contact_point}
  */
  readonly contactPoint?: string;
  /**
  * A list of alert labels to group alerts into notifications by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#group_by AppsRulesAlertruleV1Beta1#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Minimum time interval between two notifications for the same group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#group_interval AppsRulesAlertruleV1Beta1#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Time to wait to buffer alerts of the same group before sending a notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#group_wait AppsRulesAlertruleV1Beta1#group_wait}
  */
  readonly groupWait?: string;
  /**
  * A list of mute timing names to apply to alerts that match this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#mute_timings AppsRulesAlertruleV1Beta1#mute_timings}
  */
  readonly muteTimings?: string[];
  /**
  * Minimum time interval for re-sending a notification if an alert is still firing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#repeat_interval AppsRulesAlertruleV1Beta1#repeat_interval}
  */
  readonly repeatInterval?: string;
}

export function appsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRoutingToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_timings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeTimings),
    contact_point: cdktf.stringToTerraform(struct!.contactPoint),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    mute_timings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muteTimings),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
  }
}


export function appsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRoutingToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_timings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeTimings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    contact_point: {
      value: cdktf.stringToHclTerraform(struct!.contactPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mute_timings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.muteTimings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimings !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimings = this._activeTimings;
    }
    if (this._contactPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactPoint = this._contactPoint;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._muteTimings !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteTimings = this._muteTimings;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTimings = undefined;
      this._contactPoint = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._muteTimings = undefined;
      this._repeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTimings = value.activeTimings;
      this._contactPoint = value.contactPoint;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._muteTimings = value.muteTimings;
      this._repeatInterval = value.repeatInterval;
    }
  }

  // active_timings - computed: false, optional: true, required: false
  private _activeTimings?: string[]; 
  public get activeTimings() {
    return this.getListAttribute('active_timings');
  }
  public set activeTimings(value: string[]) {
    this._activeTimings = value;
  }
  public resetActiveTimings() {
    this._activeTimings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimingsInput() {
    return this._activeTimings;
  }

  // contact_point - computed: false, optional: true, required: false
  private _contactPoint?: string; 
  public get contactPoint() {
    return this.getStringAttribute('contact_point');
  }
  public set contactPoint(value: string) {
    this._contactPoint = value;
  }
  public resetContactPoint() {
    this._contactPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPointInput() {
    return this._contactPoint;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // group_interval - computed: false, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: false, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // mute_timings - computed: false, optional: true, required: false
  private _muteTimings?: string[]; 
  public get muteTimings() {
    return this.getListAttribute('mute_timings');
  }
  public set muteTimings(value: string[]) {
    this._muteTimings = value;
  }
  public resetMuteTimings() {
    this._muteTimings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteTimingsInput() {
    return this._muteTimings;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}
export interface AppsRulesAlertruleV1Beta1SpecNotificationSettings {
  /**
  * named_routing_tree block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#named_routing_tree AppsRulesAlertruleV1Beta1#named_routing_tree}
  */
  readonly namedRoutingTree?: AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree;
  /**
  * simplified_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#simplified_routing AppsRulesAlertruleV1Beta1#simplified_routing}
  */
  readonly simplifiedRouting?: AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting;
}

export function appsRulesAlertruleV1Beta1SpecNotificationSettingsToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    named_routing_tree: appsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTreeToTerraform(struct!.namedRoutingTree),
    simplified_routing: appsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRoutingToTerraform(struct!.simplifiedRouting),
  }
}


export function appsRulesAlertruleV1Beta1SpecNotificationSettingsToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecNotificationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    named_routing_tree: {
      value: appsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTreeToHclTerraform(struct!.namedRoutingTree),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree",
    },
    simplified_routing: {
      value: appsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRoutingToHclTerraform(struct!.simplifiedRouting),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesAlertruleV1Beta1SpecNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecNotificationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namedRoutingTree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedRoutingTree = this._namedRoutingTree?.internalValue;
    }
    if (this._simplifiedRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simplifiedRouting = this._simplifiedRouting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecNotificationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namedRoutingTree.internalValue = undefined;
      this._simplifiedRouting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namedRoutingTree.internalValue = value.namedRoutingTree;
      this._simplifiedRouting.internalValue = value.simplifiedRouting;
    }
  }

  // named_routing_tree - computed: false, optional: true, required: false
  private _namedRoutingTree = new AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTreeOutputReference(this, "named_routing_tree");
  public get namedRoutingTree() {
    return this._namedRoutingTree;
  }
  public putNamedRoutingTree(value: AppsRulesAlertruleV1Beta1SpecNotificationSettingsNamedRoutingTree) {
    this._namedRoutingTree.internalValue = value;
  }
  public resetNamedRoutingTree() {
    this._namedRoutingTree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedRoutingTreeInput() {
    return this._namedRoutingTree.internalValue;
  }

  // simplified_routing - computed: false, optional: true, required: false
  private _simplifiedRouting = new AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRoutingOutputReference(this, "simplified_routing");
  public get simplifiedRouting() {
    return this._simplifiedRouting;
  }
  public putSimplifiedRouting(value: AppsRulesAlertruleV1Beta1SpecNotificationSettingsSimplifiedRouting) {
    this._simplifiedRouting.internalValue = value;
  }
  public resetSimplifiedRouting() {
    this._simplifiedRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simplifiedRoutingInput() {
    return this._simplifiedRouting.internalValue;
  }
}
export interface AppsRulesAlertruleV1Beta1SpecTrigger {
  /**
  * The interval at which the alert rule should be evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#interval AppsRulesAlertruleV1Beta1#interval}
  */
  readonly interval: string;
}

export function appsRulesAlertruleV1Beta1SpecTriggerToTerraform(struct?: AppsRulesAlertruleV1Beta1SpecTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function appsRulesAlertruleV1Beta1SpecTriggerToHclTerraform(struct?: AppsRulesAlertruleV1Beta1SpecTrigger | cdktf.IResolvable): any {
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

export class AppsRulesAlertruleV1Beta1SpecTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1SpecTrigger | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesAlertruleV1Beta1SpecTrigger | cdktf.IResolvable | undefined) {
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
export interface AppsRulesAlertruleV1Beta1Spec {
  /**
  * Key-value pairs of metadata to attach to the alert rule. They add additional information, such as a `summary` or `runbook_url`, to help identify and investigate alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#annotations AppsRulesAlertruleV1Beta1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Describes what state to enter when the rule's query is invalid and the rule cannot be executed. Options are OK, Error, KeepLast, and Alerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#exec_err_state AppsRulesAlertruleV1Beta1#exec_err_state}
  */
  readonly execErrState: string;
  /**
  * The stages of the rule, keyed by reference ID. Each expression is an object with `model` (the query or expression model as a JSON string, for example from `jsonencode`), `datasource_uid` (the datasource to run against; `__expr__` for server-side expressions), `query_type`, `relative_time_range` (an object with `from` and `to` durations) and `source`. Exactly one expression must set `source = true`. Every field must be set; use `null` for unused fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#expressions AppsRulesAlertruleV1Beta1#expressions}
  */
  readonly expressions: { [key: string]: AppsRulesAlertruleV1Beta1SpecExpressions } | cdktf.IResolvable;
  /**
  * The amount of time for which the rule must be breached for the rule to be considered to be Firing. Before this time has elapsed, the rule is only considered to be Pending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#for AppsRulesAlertruleV1Beta1#for}
  */
  readonly for?: string;
  /**
  * The amount of time for which the rule will considered to be Recovering after initially Firing. Before this time has elapsed, the rule will continue to fire once it's been triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#keep_firing_for AppsRulesAlertruleV1Beta1#keep_firing_for}
  */
  readonly keepFiringFor?: string;
  /**
  * Key-value pairs to attach to the alert rule that can be used in matching, grouping, and routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#labels AppsRulesAlertruleV1Beta1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of missing series evaluations that must occur before the rule is considered to be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#missing_series_evals_to_resolve AppsRulesAlertruleV1Beta1#missing_series_evals_to_resolve}
  */
  readonly missingSeriesEvalsToResolve?: number;
  /**
  * Describes what state to enter when the rule's query returns No Data. Options are OK, NoData, KeepLast, and Alerting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#no_data_state AppsRulesAlertruleV1Beta1#no_data_state}
  */
  readonly noDataState: string;
  /**
  * Reference to the dashboard panel this alert rule is associated with, as an object with `dashboard_uid` (string) and `panel_id` (number).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#panel_ref AppsRulesAlertruleV1Beta1#panel_ref}
  */
  readonly panelRef?: AppsRulesAlertruleV1Beta1SpecPanelRef;
  /**
  * Sets whether the rule should be paused or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#paused AppsRulesAlertruleV1Beta1#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The title of the alert rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#title AppsRulesAlertruleV1Beta1#title}
  */
  readonly title: string;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#notification_settings AppsRulesAlertruleV1Beta1#notification_settings}
  */
  readonly notificationSettings?: AppsRulesAlertruleV1Beta1SpecNotificationSettings;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#trigger AppsRulesAlertruleV1Beta1#trigger}
  */
  readonly trigger: AppsRulesAlertruleV1Beta1SpecTrigger;
}

export function appsRulesAlertruleV1Beta1SpecToTerraform(struct?: AppsRulesAlertruleV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    exec_err_state: cdktf.stringToTerraform(struct!.execErrState),
    expressions: cdktf.hashMapper(appsRulesAlertruleV1Beta1SpecExpressionsToTerraform)(struct!.expressions),
    for: cdktf.stringToTerraform(struct!.for),
    keep_firing_for: cdktf.stringToTerraform(struct!.keepFiringFor),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    missing_series_evals_to_resolve: cdktf.numberToTerraform(struct!.missingSeriesEvalsToResolve),
    no_data_state: cdktf.stringToTerraform(struct!.noDataState),
    panel_ref: appsRulesAlertruleV1Beta1SpecPanelRefToTerraform(struct!.panelRef),
    paused: cdktf.booleanToTerraform(struct!.paused),
    title: cdktf.stringToTerraform(struct!.title),
    notification_settings: appsRulesAlertruleV1Beta1SpecNotificationSettingsToTerraform(struct!.notificationSettings),
    trigger: appsRulesAlertruleV1Beta1SpecTriggerToTerraform(struct!.trigger),
  }
}


export function appsRulesAlertruleV1Beta1SpecToHclTerraform(struct?: AppsRulesAlertruleV1Beta1Spec | cdktf.IResolvable): any {
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
    exec_err_state: {
      value: cdktf.stringToHclTerraform(struct!.execErrState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expressions: {
      value: cdktf.hashMapperHcl(appsRulesAlertruleV1Beta1SpecExpressionsToHclTerraform)(struct!.expressions),
      isBlock: true,
      type: "map",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecExpressionsMap",
    },
    for: {
      value: cdktf.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_firing_for: {
      value: cdktf.stringToHclTerraform(struct!.keepFiringFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    missing_series_evals_to_resolve: {
      value: cdktf.numberToHclTerraform(struct!.missingSeriesEvalsToResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_data_state: {
      value: cdktf.stringToHclTerraform(struct!.noDataState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panel_ref: {
      value: appsRulesAlertruleV1Beta1SpecPanelRefToHclTerraform(struct!.panelRef),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecPanelRef",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_settings: {
      value: appsRulesAlertruleV1Beta1SpecNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecNotificationSettings",
    },
    trigger: {
      value: appsRulesAlertruleV1Beta1SpecTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesAlertruleV1Beta1SpecTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesAlertruleV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesAlertruleV1Beta1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._execErrState !== undefined) {
      hasAnyValues = true;
      internalValueResult.execErrState = this._execErrState;
    }
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._keepFiringFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepFiringFor = this._keepFiringFor;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._missingSeriesEvalsToResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingSeriesEvalsToResolve = this._missingSeriesEvalsToResolve;
    }
    if (this._noDataState !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDataState = this._noDataState;
    }
    if (this._panelRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelRef = this._panelRef?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsRulesAlertruleV1Beta1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._execErrState = undefined;
      this._expressions.internalValue = undefined;
      this._for = undefined;
      this._keepFiringFor = undefined;
      this._labels = undefined;
      this._missingSeriesEvalsToResolve = undefined;
      this._noDataState = undefined;
      this._panelRef.internalValue = undefined;
      this._paused = undefined;
      this._title = undefined;
      this._notificationSettings.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._execErrState = value.execErrState;
      this._expressions.internalValue = value.expressions;
      this._for = value.for;
      this._keepFiringFor = value.keepFiringFor;
      this._labels = value.labels;
      this._missingSeriesEvalsToResolve = value.missingSeriesEvalsToResolve;
      this._noDataState = value.noDataState;
      this._panelRef.internalValue = value.panelRef;
      this._paused = value.paused;
      this._title = value.title;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._trigger.internalValue = value.trigger;
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

  // exec_err_state - computed: false, optional: false, required: true
  private _execErrState?: string; 
  public get execErrState() {
    return this.getStringAttribute('exec_err_state');
  }
  public set execErrState(value: string) {
    this._execErrState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execErrStateInput() {
    return this._execErrState;
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new AppsRulesAlertruleV1Beta1SpecExpressionsMap(this, "expressions");
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: { [key: string]: AppsRulesAlertruleV1Beta1SpecExpressions } | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // for - computed: false, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // keep_firing_for - computed: false, optional: true, required: false
  private _keepFiringFor?: string; 
  public get keepFiringFor() {
    return this.getStringAttribute('keep_firing_for');
  }
  public set keepFiringFor(value: string) {
    this._keepFiringFor = value;
  }
  public resetKeepFiringFor() {
    this._keepFiringFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepFiringForInput() {
    return this._keepFiringFor;
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

  // missing_series_evals_to_resolve - computed: false, optional: true, required: false
  private _missingSeriesEvalsToResolve?: number; 
  public get missingSeriesEvalsToResolve() {
    return this.getNumberAttribute('missing_series_evals_to_resolve');
  }
  public set missingSeriesEvalsToResolve(value: number) {
    this._missingSeriesEvalsToResolve = value;
  }
  public resetMissingSeriesEvalsToResolve() {
    this._missingSeriesEvalsToResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingSeriesEvalsToResolveInput() {
    return this._missingSeriesEvalsToResolve;
  }

  // no_data_state - computed: false, optional: false, required: true
  private _noDataState?: string; 
  public get noDataState() {
    return this.getStringAttribute('no_data_state');
  }
  public set noDataState(value: string) {
    this._noDataState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataStateInput() {
    return this._noDataState;
  }

  // panel_ref - computed: false, optional: true, required: false
  private _panelRef = new AppsRulesAlertruleV1Beta1SpecPanelRefOutputReference(this, "panel_ref");
  public get panelRef() {
    return this._panelRef;
  }
  public putPanelRef(value: AppsRulesAlertruleV1Beta1SpecPanelRef) {
    this._panelRef.internalValue = value;
  }
  public resetPanelRef() {
    this._panelRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelRefInput() {
    return this._panelRef.internalValue;
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

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new AppsRulesAlertruleV1Beta1SpecNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: AppsRulesAlertruleV1Beta1SpecNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new AppsRulesAlertruleV1Beta1SpecTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: AppsRulesAlertruleV1Beta1SpecTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1 grafana_apps_rules_alertrule_v1beta1}
*/
export class AppsRulesAlertruleV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_rules_alertrule_v1beta1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsRulesAlertruleV1Beta1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsRulesAlertruleV1Beta1 to import
  * @param importFromId The id of the existing AppsRulesAlertruleV1Beta1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsRulesAlertruleV1Beta1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_rules_alertrule_v1beta1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/apps_rules_alertrule_v1beta1 grafana_apps_rules_alertrule_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsRulesAlertruleV1Beta1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsRulesAlertruleV1Beta1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_rules_alertrule_v1beta1',
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
  private _metadata = new AppsRulesAlertruleV1Beta1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsRulesAlertruleV1Beta1Metadata) {
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
  private _options = new AppsRulesAlertruleV1Beta1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsRulesAlertruleV1Beta1Options) {
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
  private _spec = new AppsRulesAlertruleV1Beta1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsRulesAlertruleV1Beta1Spec) {
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
      metadata: appsRulesAlertruleV1Beta1MetadataToTerraform(this._metadata.internalValue),
      options: appsRulesAlertruleV1Beta1OptionsToTerraform(this._options.internalValue),
      spec: appsRulesAlertruleV1Beta1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsRulesAlertruleV1Beta1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesAlertruleV1Beta1Metadata",
      },
      options: {
        value: appsRulesAlertruleV1Beta1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesAlertruleV1Beta1Options",
      },
      spec: {
        value: appsRulesAlertruleV1Beta1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesAlertruleV1Beta1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
