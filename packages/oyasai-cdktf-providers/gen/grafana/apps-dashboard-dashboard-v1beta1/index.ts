// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsDashboardDashboardV1Beta1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#metadata AppsDashboardDashboardV1Beta1#metadata}
  */
  readonly metadata?: AppsDashboardDashboardV1Beta1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#options AppsDashboardDashboardV1Beta1#options}
  */
  readonly options?: AppsDashboardDashboardV1Beta1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#spec AppsDashboardDashboardV1Beta1#spec}
  */
  readonly spec?: AppsDashboardDashboardV1Beta1Spec;
}
export interface AppsDashboardDashboardV1Beta1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#folder_uid AppsDashboardDashboardV1Beta1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#uid AppsDashboardDashboardV1Beta1#uid}
  */
  readonly uid: string;
}

export function appsDashboardDashboardV1Beta1MetadataToTerraform(struct?: AppsDashboardDashboardV1Beta1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsDashboardDashboardV1Beta1MetadataToHclTerraform(struct?: AppsDashboardDashboardV1Beta1Metadata | cdktf.IResolvable): any {
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

export class AppsDashboardDashboardV1Beta1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsDashboardDashboardV1Beta1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsDashboardDashboardV1Beta1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsDashboardDashboardV1Beta1Options {
  /**
  * Set to true to allow editing the resource from the Grafana UI. By default, resources managed by Terraform cannot be edited in the UI. Enabling this option will cause divergence between the Terraform configuration and the resource in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#allow_ui_updates AppsDashboardDashboardV1Beta1#allow_ui_updates}
  */
  readonly allowUiUpdates?: boolean | cdktf.IResolvable;
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#manager_identity AppsDashboardDashboardV1Beta1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#overwrite AppsDashboardDashboardV1Beta1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsDashboardDashboardV1Beta1OptionsToTerraform(struct?: AppsDashboardDashboardV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ui_updates: cdktf.booleanToTerraform(struct!.allowUiUpdates),
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsDashboardDashboardV1Beta1OptionsToHclTerraform(struct?: AppsDashboardDashboardV1Beta1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ui_updates: {
      value: cdktf.booleanToHclTerraform(struct!.allowUiUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class AppsDashboardDashboardV1Beta1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsDashboardDashboardV1Beta1Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUiUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUiUpdates = this._allowUiUpdates;
    }
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

  public set internalValue(value: AppsDashboardDashboardV1Beta1Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUiUpdates = undefined;
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
      this._allowUiUpdates = value.allowUiUpdates;
      this._managerIdentity = value.managerIdentity;
      this._overwrite = value.overwrite;
    }
  }

  // allow_ui_updates - computed: false, optional: true, required: false
  private _allowUiUpdates?: boolean | cdktf.IResolvable; 
  public get allowUiUpdates() {
    return this.getBooleanAttribute('allow_ui_updates');
  }
  public set allowUiUpdates(value: boolean | cdktf.IResolvable) {
    this._allowUiUpdates = value;
  }
  public resetAllowUiUpdates() {
    this._allowUiUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUiUpdatesInput() {
    return this._allowUiUpdates;
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
export interface AppsDashboardDashboardV1Beta1Spec {
  /**
  * The JSON representation of the dashboard spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#json AppsDashboardDashboardV1Beta1#json}
  */
  readonly json: string;
  /**
  * The tags of the dashboard. If not set, the tags will be derived from the JSON spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#tags AppsDashboardDashboardV1Beta1#tags}
  */
  readonly tags?: string[];
  /**
  * The title of the dashboard. If not set, the title will be derived from the JSON spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#title AppsDashboardDashboardV1Beta1#title}
  */
  readonly title?: string;
}

export function appsDashboardDashboardV1Beta1SpecToTerraform(struct?: AppsDashboardDashboardV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.stringToTerraform(struct!.json),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function appsDashboardDashboardV1Beta1SpecToHclTerraform(struct?: AppsDashboardDashboardV1Beta1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsDashboardDashboardV1Beta1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsDashboardDashboardV1Beta1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsDashboardDashboardV1Beta1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json = value.json;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // json - computed: false, optional: false, required: true
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1 grafana_apps_dashboard_dashboard_v1beta1}
*/
export class AppsDashboardDashboardV1Beta1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_dashboard_dashboard_v1beta1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsDashboardDashboardV1Beta1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsDashboardDashboardV1Beta1 to import
  * @param importFromId The id of the existing AppsDashboardDashboardV1Beta1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsDashboardDashboardV1Beta1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_dashboard_dashboard_v1beta1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_dashboard_dashboard_v1beta1 grafana_apps_dashboard_dashboard_v1beta1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsDashboardDashboardV1Beta1Config = {}
  */
  public constructor(scope: Construct, id: string, config: AppsDashboardDashboardV1Beta1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_dashboard_dashboard_v1beta1',
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
  private _metadata = new AppsDashboardDashboardV1Beta1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsDashboardDashboardV1Beta1Metadata) {
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
  private _options = new AppsDashboardDashboardV1Beta1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsDashboardDashboardV1Beta1Options) {
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
  private _spec = new AppsDashboardDashboardV1Beta1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsDashboardDashboardV1Beta1Spec) {
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
      metadata: appsDashboardDashboardV1Beta1MetadataToTerraform(this._metadata.internalValue),
      options: appsDashboardDashboardV1Beta1OptionsToTerraform(this._options.internalValue),
      spec: appsDashboardDashboardV1Beta1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsDashboardDashboardV1Beta1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsDashboardDashboardV1Beta1Metadata",
      },
      options: {
        value: appsDashboardDashboardV1Beta1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsDashboardDashboardV1Beta1Options",
      },
      spec: {
        value: appsDashboardDashboardV1Beta1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsDashboardDashboardV1Beta1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
