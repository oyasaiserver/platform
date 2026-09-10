// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsRulesRecordingruleV0Alpha1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#metadata AppsRulesRecordingruleV0Alpha1#metadata}
  */
  readonly metadata?: AppsRulesRecordingruleV0Alpha1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#options AppsRulesRecordingruleV0Alpha1#options}
  */
  readonly options?: AppsRulesRecordingruleV0Alpha1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#spec AppsRulesRecordingruleV0Alpha1#spec}
  */
  readonly spec?: AppsRulesRecordingruleV0Alpha1Spec;
}
export interface AppsRulesRecordingruleV0Alpha1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#folder_uid AppsRulesRecordingruleV0Alpha1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#uid AppsRulesRecordingruleV0Alpha1#uid}
  */
  readonly uid: string;
}

export function appsRulesRecordingruleV0Alpha1MetadataToTerraform(struct?: AppsRulesRecordingruleV0Alpha1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsRulesRecordingruleV0Alpha1MetadataToHclTerraform(struct?: AppsRulesRecordingruleV0Alpha1Metadata | cdktf.IResolvable): any {
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

export class AppsRulesRecordingruleV0Alpha1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV0Alpha1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesRecordingruleV0Alpha1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsRulesRecordingruleV0Alpha1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#manager_identity AppsRulesRecordingruleV0Alpha1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#overwrite AppsRulesRecordingruleV0Alpha1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsRulesRecordingruleV0Alpha1OptionsToTerraform(struct?: AppsRulesRecordingruleV0Alpha1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsRulesRecordingruleV0Alpha1OptionsToHclTerraform(struct?: AppsRulesRecordingruleV0Alpha1Options | cdktf.IResolvable): any {
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

export class AppsRulesRecordingruleV0Alpha1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV0Alpha1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesRecordingruleV0Alpha1Options | cdktf.IResolvable | undefined) {
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
export interface AppsRulesRecordingruleV0Alpha1SpecTrigger {
  /**
  * The interval at which the recording rule should be evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#interval AppsRulesRecordingruleV0Alpha1#interval}
  */
  readonly interval: string;
}

export function appsRulesRecordingruleV0Alpha1SpecTriggerToTerraform(struct?: AppsRulesRecordingruleV0Alpha1SpecTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function appsRulesRecordingruleV0Alpha1SpecTriggerToHclTerraform(struct?: AppsRulesRecordingruleV0Alpha1SpecTrigger | cdktf.IResolvable): any {
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

export class AppsRulesRecordingruleV0Alpha1SpecTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV0Alpha1SpecTrigger | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsRulesRecordingruleV0Alpha1SpecTrigger | cdktf.IResolvable | undefined) {
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
export interface AppsRulesRecordingruleV0Alpha1Spec {
  /**
  * A sequence of stages that describe the contents of the rule. Each value is a JSON string representing an expression object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#expressions AppsRulesRecordingruleV0Alpha1#expressions}
  */
  readonly expressions: { [key: string]: string };
  /**
  * Key-value pairs to attach to the recorded metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#labels AppsRulesRecordingruleV0Alpha1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the metric to write to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#metric AppsRulesRecordingruleV0Alpha1#metric}
  */
  readonly metric: string;
  /**
  * Sets whether the recording rule should be paused or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#paused AppsRulesRecordingruleV0Alpha1#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The UID of the datasource to write the metric to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#target_datasource_uid AppsRulesRecordingruleV0Alpha1#target_datasource_uid}
  */
  readonly targetDatasourceUid: string;
  /**
  * The title of the recording rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#title AppsRulesRecordingruleV0Alpha1#title}
  */
  readonly title: string;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#trigger AppsRulesRecordingruleV0Alpha1#trigger}
  */
  readonly trigger: AppsRulesRecordingruleV0Alpha1SpecTrigger;
}

export function appsRulesRecordingruleV0Alpha1SpecToTerraform(struct?: AppsRulesRecordingruleV0Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.expressions),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metric: cdktf.stringToTerraform(struct!.metric),
    paused: cdktf.booleanToTerraform(struct!.paused),
    target_datasource_uid: cdktf.stringToTerraform(struct!.targetDatasourceUid),
    title: cdktf.stringToTerraform(struct!.title),
    trigger: appsRulesRecordingruleV0Alpha1SpecTriggerToTerraform(struct!.trigger),
  }
}


export function appsRulesRecordingruleV0Alpha1SpecToHclTerraform(struct?: AppsRulesRecordingruleV0Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.expressions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
      value: appsRulesRecordingruleV0Alpha1SpecTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsRulesRecordingruleV0Alpha1SpecTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsRulesRecordingruleV0Alpha1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsRulesRecordingruleV0Alpha1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
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

  public set internalValue(value: AppsRulesRecordingruleV0Alpha1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions = undefined;
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
      this._expressions = value.expressions;
      this._labels = value.labels;
      this._metric = value.metric;
      this._paused = value.paused;
      this._targetDatasourceUid = value.targetDatasourceUid;
      this._title = value.title;
      this._trigger.internalValue = value.trigger;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: { [key: string]: string }; 
  public get expressions() {
    return this.getStringMapAttribute('expressions');
  }
  public set expressions(value: { [key: string]: string }) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
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
  private _trigger = new AppsRulesRecordingruleV0Alpha1SpecTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: AppsRulesRecordingruleV0Alpha1SpecTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1 grafana_apps_rules_recordingrule_v0alpha1}
*/
export class AppsRulesRecordingruleV0Alpha1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_rules_recordingrule_v0alpha1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsRulesRecordingruleV0Alpha1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsRulesRecordingruleV0Alpha1 to import
  * @param importFromId The id of the existing AppsRulesRecordingruleV0Alpha1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsRulesRecordingruleV0Alpha1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_rules_recordingrule_v0alpha1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_rules_recordingrule_v0alpha1 grafana_apps_rules_recordingrule_v0alpha1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsRulesRecordingruleV0Alpha1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsRulesRecordingruleV0Alpha1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_rules_recordingrule_v0alpha1',
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
  private _metadata = new AppsRulesRecordingruleV0Alpha1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsRulesRecordingruleV0Alpha1Metadata) {
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
  private _options = new AppsRulesRecordingruleV0Alpha1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsRulesRecordingruleV0Alpha1Options) {
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
  private _spec = new AppsRulesRecordingruleV0Alpha1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsRulesRecordingruleV0Alpha1Spec) {
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
      metadata: appsRulesRecordingruleV0Alpha1MetadataToTerraform(this._metadata.internalValue),
      options: appsRulesRecordingruleV0Alpha1OptionsToTerraform(this._options.internalValue),
      spec: appsRulesRecordingruleV0Alpha1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsRulesRecordingruleV0Alpha1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesRecordingruleV0Alpha1Metadata",
      },
      options: {
        value: appsRulesRecordingruleV0Alpha1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesRecordingruleV0Alpha1Options",
      },
      spec: {
        value: appsRulesRecordingruleV0Alpha1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsRulesRecordingruleV0Alpha1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
