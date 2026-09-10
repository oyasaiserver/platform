// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsNotificationsRoutingtreeV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#metadata AppsNotificationsRoutingtreeV1Beta1#metadata}
  */
  readonly metadata?: AppsNotificationsRoutingtreeV1Beta1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#options AppsNotificationsRoutingtreeV1Beta1#options}
  */
  readonly options?: AppsNotificationsRoutingtreeV1Beta1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#spec AppsNotificationsRoutingtreeV1Beta1#spec}
  */
  readonly spec?: AppsNotificationsRoutingtreeV1Beta1Spec;
}
export interface AppsNotificationsRoutingtreeV1Beta1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#folder_uid AppsNotificationsRoutingtreeV1Beta1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#uid AppsNotificationsRoutingtreeV1Beta1#uid}
  */
  readonly uid: string;
}

export function appsNotificationsRoutingtreeV1Beta1MetadataToTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsNotificationsRoutingtreeV1Beta1MetadataToHclTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1Metadata | cdktf.IResolvable): any {
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

export class AppsNotificationsRoutingtreeV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsRoutingtreeV1Beta1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsNotificationsRoutingtreeV1Beta1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsNotificationsRoutingtreeV1Beta1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#manager_identity AppsNotificationsRoutingtreeV1Beta1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#overwrite AppsNotificationsRoutingtreeV1Beta1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsNotificationsRoutingtreeV1Beta1OptionsToTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsNotificationsRoutingtreeV1Beta1OptionsToHclTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1Options | cdktf.IResolvable): any {
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

export class AppsNotificationsRoutingtreeV1Beta1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsRoutingtreeV1Beta1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsNotificationsRoutingtreeV1Beta1Options | cdktf.IResolvable | undefined) {
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
export interface AppsNotificationsRoutingtreeV1Beta1SpecDefaults {
  /**
  * A list of alert labels to group alerts into notifications by. Use the special label `...` to group by all labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#group_by AppsNotificationsRoutingtreeV1Beta1#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Minimum time interval between two notifications for the same group. Default is 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#group_interval AppsNotificationsRoutingtreeV1Beta1#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#group_wait AppsNotificationsRoutingtreeV1Beta1#group_wait}
  */
  readonly groupWait?: string;
  /**
  * The default contact point to route all unmatched notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#receiver AppsNotificationsRoutingtreeV1Beta1#receiver}
  */
  readonly receiver: string;
  /**
  * Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#repeat_interval AppsNotificationsRoutingtreeV1Beta1#repeat_interval}
  */
  readonly repeatInterval?: string;
}

export function appsNotificationsRoutingtreeV1Beta1SpecDefaultsToTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1SpecDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    receiver: cdktf.stringToTerraform(struct!.receiver),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
  }
}


export function appsNotificationsRoutingtreeV1Beta1SpecDefaultsToHclTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1SpecDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    receiver: {
      value: cdktf.stringToHclTerraform(struct!.receiver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AppsNotificationsRoutingtreeV1Beta1SpecDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsRoutingtreeV1Beta1SpecDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._receiver !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiver = this._receiver;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsRoutingtreeV1Beta1SpecDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._receiver = undefined;
      this._repeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._receiver = value.receiver;
      this._repeatInterval = value.repeatInterval;
    }
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

  // receiver - computed: false, optional: false, required: true
  private _receiver?: string; 
  public get receiver() {
    return this.getStringAttribute('receiver');
  }
  public set receiver(value: string) {
    this._receiver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver;
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
export interface AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#label AppsNotificationsRoutingtreeV1Beta1#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#type AppsNotificationsRoutingtreeV1Beta1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#value AppsNotificationsRoutingtreeV1Beta1#value}
  */
  readonly value?: string;
}

export function appsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersToTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers | cdktf.IResolvable): any {
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


export function appsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersToHclTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers | cdktf.IResolvable): any {
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

export class AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers | cdktf.IResolvable | undefined) {
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

export class AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersList extends cdktf.ComplexList {
  public internalValue? : AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers[] | cdktf.IResolvable

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
  public get(index: number): AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersOutputReference {
    return new AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsNotificationsRoutingtreeV1Beta1SpecRoutes {
  /**
  * A list of time interval names that activate this route only during the specified times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#active_time_intervals AppsNotificationsRoutingtreeV1Beta1#active_time_intervals}
  */
  readonly activeTimeIntervals?: string[];
  /**
  * Whether to continue matching subsequent sibling routes if an alert matches this route. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#continue AppsNotificationsRoutingtreeV1Beta1#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * A list of alert labels to group alerts into notifications by. Use the special label `...` to group by all labels. If not set, inherits from the nearest ancestor route that has it configured, ultimately falling back to `spec.defaults`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#group_by AppsNotificationsRoutingtreeV1Beta1#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Minimum time interval between two notifications for the same group. If not set, inherits from the nearest ancestor route that has it configured, ultimately falling back to `spec.defaults`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#group_interval AppsNotificationsRoutingtreeV1Beta1#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Time to wait to buffer alerts of the same group before sending a notification. If not set, inherits from the nearest ancestor route that has it configured, ultimately falling back to `spec.defaults`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#group_wait AppsNotificationsRoutingtreeV1Beta1#group_wait}
  */
  readonly groupWait?: string;
  /**
  * Matchers that an alert has to fulfill to match this route. When multiple matchers are supplied, an alert must match ALL of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#matchers AppsNotificationsRoutingtreeV1Beta1#matchers}
  */
  readonly matchers?: AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers[] | cdktf.IResolvable;
  /**
  * A list of time interval names that mute this route during the specified times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#mute_time_intervals AppsNotificationsRoutingtreeV1Beta1#mute_time_intervals}
  */
  readonly muteTimeIntervals?: string[];
  /**
  * The contact point to route notifications that match this rule to. If not set, inherits from the nearest ancestor route that has it configured, ultimately falling back to `spec.defaults`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#receiver AppsNotificationsRoutingtreeV1Beta1#receiver}
  */
  readonly receiver?: string;
  /**
  * Minimum time interval for re-sending a notification if an alert is still firing. If not set, inherits from the nearest ancestor route that has it configured, ultimately falling back to `spec.defaults`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#repeat_interval AppsNotificationsRoutingtreeV1Beta1#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#routes AppsNotificationsRoutingtreeV1Beta1#routes}
  */
  readonly routes?: AppsNotificationsRoutingtreeV1Beta1SpecRoutes[] | cdktf.IResolvable;
}

export function appsNotificationsRoutingtreeV1Beta1SpecRoutesToTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1SpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeTimeIntervals),
    continue: cdktf.booleanToTerraform(struct!.continue),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    matchers: cdktf.listMapper(appsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersToTerraform, false)(struct!.matchers),
    mute_time_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muteTimeIntervals),
    receiver: cdktf.stringToTerraform(struct!.receiver),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    routes: cdktf.listMapper(appsNotificationsRoutingtreeV1Beta1SpecRoutesToTerraform, true)(struct!.routes),
  }
}


export function appsNotificationsRoutingtreeV1Beta1SpecRoutesToHclTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1SpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_time_intervals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeTimeIntervals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    matchers: {
      value: cdktf.listMapperHcl(appsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersToHclTerraform, false)(struct!.matchers),
      isBlock: true,
      type: "list",
      storageClassType: "AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersList",
    },
    mute_time_intervals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.muteTimeIntervals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    receiver: {
      value: cdktf.stringToHclTerraform(struct!.receiver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(appsNotificationsRoutingtreeV1Beta1SpecRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "AppsNotificationsRoutingtreeV1Beta1SpecRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsRoutingtreeV1Beta1SpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsNotificationsRoutingtreeV1Beta1SpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimeIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeIntervals = this._activeTimeIntervals;
    }
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
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
    if (this._matchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchers = this._matchers?.internalValue;
    }
    if (this._muteTimeIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteTimeIntervals = this._muteTimeIntervals;
    }
    if (this._receiver !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiver = this._receiver;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsRoutingtreeV1Beta1SpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTimeIntervals = undefined;
      this._continue = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._matchers.internalValue = undefined;
      this._muteTimeIntervals = undefined;
      this._receiver = undefined;
      this._repeatInterval = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTimeIntervals = value.activeTimeIntervals;
      this._continue = value.continue;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._matchers.internalValue = value.matchers;
      this._muteTimeIntervals = value.muteTimeIntervals;
      this._receiver = value.receiver;
      this._repeatInterval = value.repeatInterval;
      this._routes.internalValue = value.routes;
    }
  }

  // active_time_intervals - computed: false, optional: true, required: false
  private _activeTimeIntervals?: string[]; 
  public get activeTimeIntervals() {
    return this.getListAttribute('active_time_intervals');
  }
  public set activeTimeIntervals(value: string[]) {
    this._activeTimeIntervals = value;
  }
  public resetActiveTimeIntervals() {
    this._activeTimeIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeIntervalsInput() {
    return this._activeTimeIntervals;
  }

  // continue - computed: true, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
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

  // matchers - computed: false, optional: true, required: false
  private _matchers = new AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchersList(this, "matchers", false);
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: AppsNotificationsRoutingtreeV1Beta1SpecRoutesMatchers[] | cdktf.IResolvable) {
    this._matchers.internalValue = value;
  }
  public resetMatchers() {
    this._matchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers.internalValue;
  }

  // mute_time_intervals - computed: false, optional: true, required: false
  private _muteTimeIntervals?: string[]; 
  public get muteTimeIntervals() {
    return this.getListAttribute('mute_time_intervals');
  }
  public set muteTimeIntervals(value: string[]) {
    this._muteTimeIntervals = value;
  }
  public resetMuteTimeIntervals() {
    this._muteTimeIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteTimeIntervalsInput() {
    return this._muteTimeIntervals;
  }

  // receiver - computed: false, optional: true, required: false
  private _receiver?: string; 
  public get receiver() {
    return this.getStringAttribute('receiver');
  }
  public set receiver(value: string) {
    this._receiver = value;
  }
  public resetReceiver() {
    this._receiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver;
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

  // routes - computed: false, optional: true, required: false
  private _routes = new AppsNotificationsRoutingtreeV1Beta1SpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: AppsNotificationsRoutingtreeV1Beta1SpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

export class AppsNotificationsRoutingtreeV1Beta1SpecRoutesList extends cdktf.ComplexList {
  public internalValue? : AppsNotificationsRoutingtreeV1Beta1SpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): AppsNotificationsRoutingtreeV1Beta1SpecRoutesOutputReference {
    return new AppsNotificationsRoutingtreeV1Beta1SpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsNotificationsRoutingtreeV1Beta1Spec {
  /**
  * Set to `true` to allow editing this resource from other sources (UI, API). Defaults to `false`, which locks the resource to Terraform management only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#disable_provenance AppsNotificationsRoutingtreeV1Beta1#disable_provenance}
  */
  readonly disableProvenance?: boolean | cdktf.IResolvable;
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#defaults AppsNotificationsRoutingtreeV1Beta1#defaults}
  */
  readonly defaults?: AppsNotificationsRoutingtreeV1Beta1SpecDefaults;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#routes AppsNotificationsRoutingtreeV1Beta1#routes}
  */
  readonly routes?: AppsNotificationsRoutingtreeV1Beta1SpecRoutes[] | cdktf.IResolvable;
}

export function appsNotificationsRoutingtreeV1Beta1SpecToTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_provenance: cdktf.booleanToTerraform(struct!.disableProvenance),
    defaults: appsNotificationsRoutingtreeV1Beta1SpecDefaultsToTerraform(struct!.defaults),
    routes: cdktf.listMapper(appsNotificationsRoutingtreeV1Beta1SpecRoutesToTerraform, true)(struct!.routes),
  }
}


export function appsNotificationsRoutingtreeV1Beta1SpecToHclTerraform(struct?: AppsNotificationsRoutingtreeV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_provenance: {
      value: cdktf.booleanToHclTerraform(struct!.disableProvenance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defaults: {
      value: appsNotificationsRoutingtreeV1Beta1SpecDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsNotificationsRoutingtreeV1Beta1SpecDefaults",
    },
    routes: {
      value: cdktf.listMapperHcl(appsNotificationsRoutingtreeV1Beta1SpecRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "AppsNotificationsRoutingtreeV1Beta1SpecRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsNotificationsRoutingtreeV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsNotificationsRoutingtreeV1Beta1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableProvenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProvenance = this._disableProvenance;
    }
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsNotificationsRoutingtreeV1Beta1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableProvenance = undefined;
      this._defaults.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableProvenance = value.disableProvenance;
      this._defaults.internalValue = value.defaults;
      this._routes.internalValue = value.routes;
    }
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

  // defaults - computed: false, optional: true, required: false
  private _defaults = new AppsNotificationsRoutingtreeV1Beta1SpecDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: AppsNotificationsRoutingtreeV1Beta1SpecDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new AppsNotificationsRoutingtreeV1Beta1SpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: AppsNotificationsRoutingtreeV1Beta1SpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1 grafana_apps_notifications_routingtree_v1beta1}
*/
export class AppsNotificationsRoutingtreeV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_notifications_routingtree_v1beta1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsNotificationsRoutingtreeV1Beta1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsNotificationsRoutingtreeV1Beta1 to import
  * @param importFromId The id of the existing AppsNotificationsRoutingtreeV1Beta1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsNotificationsRoutingtreeV1Beta1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_notifications_routingtree_v1beta1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_notifications_routingtree_v1beta1 grafana_apps_notifications_routingtree_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsNotificationsRoutingtreeV1Beta1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsNotificationsRoutingtreeV1Beta1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_notifications_routingtree_v1beta1',
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
  private _metadata = new AppsNotificationsRoutingtreeV1Beta1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsNotificationsRoutingtreeV1Beta1Metadata) {
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
  private _options = new AppsNotificationsRoutingtreeV1Beta1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsNotificationsRoutingtreeV1Beta1Options) {
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
  private _spec = new AppsNotificationsRoutingtreeV1Beta1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsNotificationsRoutingtreeV1Beta1Spec) {
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
      metadata: appsNotificationsRoutingtreeV1Beta1MetadataToTerraform(this._metadata.internalValue),
      options: appsNotificationsRoutingtreeV1Beta1OptionsToTerraform(this._options.internalValue),
      spec: appsNotificationsRoutingtreeV1Beta1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsNotificationsRoutingtreeV1Beta1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsNotificationsRoutingtreeV1Beta1Metadata",
      },
      options: {
        value: appsNotificationsRoutingtreeV1Beta1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsNotificationsRoutingtreeV1Beta1Options",
      },
      spec: {
        value: appsNotificationsRoutingtreeV1Beta1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsNotificationsRoutingtreeV1Beta1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
