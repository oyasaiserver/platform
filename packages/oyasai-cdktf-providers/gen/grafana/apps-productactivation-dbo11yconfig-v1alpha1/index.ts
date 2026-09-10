// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsProductactivationDbo11YconfigV1Alpha1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#metadata AppsProductactivationDbo11YconfigV1Alpha1#metadata}
  */
  readonly metadata?: AppsProductactivationDbo11YconfigV1Alpha1Metadata;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#options AppsProductactivationDbo11YconfigV1Alpha1#options}
  */
  readonly options?: AppsProductactivationDbo11YconfigV1Alpha1Options;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#spec AppsProductactivationDbo11YconfigV1Alpha1#spec}
  */
  readonly spec: AppsProductactivationDbo11YconfigV1Alpha1Spec;
}
export interface AppsProductactivationDbo11YconfigV1Alpha1Metadata {
  /**
  * The UID of the folder to save the resource in. For example, it's supported for dashboards and folders. To know if it's supported for the specific resource you're using check the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#folder_uid AppsProductactivationDbo11YconfigV1Alpha1#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * The unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#uid AppsProductactivationDbo11YconfigV1Alpha1#uid}
  */
  readonly uid: string;
}

export function appsProductactivationDbo11YconfigV1Alpha1MetadataToTerraform(struct?: AppsProductactivationDbo11YconfigV1Alpha1Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function appsProductactivationDbo11YconfigV1Alpha1MetadataToHclTerraform(struct?: AppsProductactivationDbo11YconfigV1Alpha1Metadata | cdktf.IResolvable): any {
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

export class AppsProductactivationDbo11YconfigV1Alpha1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProductactivationDbo11YconfigV1Alpha1Metadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsProductactivationDbo11YconfigV1Alpha1Metadata | cdktf.IResolvable | undefined) {
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
export interface AppsProductactivationDbo11YconfigV1Alpha1Options {
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#manager_identity AppsProductactivationDbo11YconfigV1Alpha1#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Set to true if you want to overwrite existing resource with newer version, same resource title in folder or same resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#overwrite AppsProductactivationDbo11YconfigV1Alpha1#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
}

export function appsProductactivationDbo11YconfigV1Alpha1OptionsToTerraform(struct?: AppsProductactivationDbo11YconfigV1Alpha1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manager_identity: cdktf.stringToTerraform(struct!.managerIdentity),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
  }
}


export function appsProductactivationDbo11YconfigV1Alpha1OptionsToHclTerraform(struct?: AppsProductactivationDbo11YconfigV1Alpha1Options | cdktf.IResolvable): any {
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

export class AppsProductactivationDbo11YconfigV1Alpha1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProductactivationDbo11YconfigV1Alpha1Options | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsProductactivationDbo11YconfigV1Alpha1Options | cdktf.IResolvable | undefined) {
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
export interface AppsProductactivationDbo11YconfigV1Alpha1Spec {
  /**
  * Whether database observability is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#enabled AppsProductactivationDbo11YconfigV1Alpha1#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function appsProductactivationDbo11YconfigV1Alpha1SpecToTerraform(struct?: AppsProductactivationDbo11YconfigV1Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function appsProductactivationDbo11YconfigV1Alpha1SpecToHclTerraform(struct?: AppsProductactivationDbo11YconfigV1Alpha1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsProductactivationDbo11YconfigV1Alpha1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsProductactivationDbo11YconfigV1Alpha1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsProductactivationDbo11YconfigV1Alpha1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1 grafana_apps_productactivation_dbo11yconfig_v1alpha1}
*/
export class AppsProductactivationDbo11YconfigV1Alpha1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_productactivation_dbo11yconfig_v1alpha1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsProductactivationDbo11YconfigV1Alpha1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsProductactivationDbo11YconfigV1Alpha1 to import
  * @param importFromId The id of the existing AppsProductactivationDbo11YconfigV1Alpha1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsProductactivationDbo11YconfigV1Alpha1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_productactivation_dbo11yconfig_v1alpha1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/apps_productactivation_dbo11yconfig_v1alpha1 grafana_apps_productactivation_dbo11yconfig_v1alpha1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsProductactivationDbo11YconfigV1Alpha1Config
  */
  public constructor(scope: Construct, id: string, config: AppsProductactivationDbo11YconfigV1Alpha1Config) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_productactivation_dbo11yconfig_v1alpha1',
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
  private _metadata = new AppsProductactivationDbo11YconfigV1Alpha1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppsProductactivationDbo11YconfigV1Alpha1Metadata) {
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
  private _options = new AppsProductactivationDbo11YconfigV1Alpha1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsProductactivationDbo11YconfigV1Alpha1Options) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AppsProductactivationDbo11YconfigV1Alpha1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppsProductactivationDbo11YconfigV1Alpha1Spec) {
    this._spec.internalValue = value;
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
      metadata: appsProductactivationDbo11YconfigV1Alpha1MetadataToTerraform(this._metadata.internalValue),
      options: appsProductactivationDbo11YconfigV1Alpha1OptionsToTerraform(this._options.internalValue),
      spec: appsProductactivationDbo11YconfigV1Alpha1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: appsProductactivationDbo11YconfigV1Alpha1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProductactivationDbo11YconfigV1Alpha1Metadata",
      },
      options: {
        value: appsProductactivationDbo11YconfigV1Alpha1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProductactivationDbo11YconfigV1Alpha1Options",
      },
      spec: {
        value: appsProductactivationDbo11YconfigV1Alpha1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsProductactivationDbo11YconfigV1Alpha1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
