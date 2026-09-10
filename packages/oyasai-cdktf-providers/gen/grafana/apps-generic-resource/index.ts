// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsGenericResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the resource can be edited from the Grafana UI. Defaults to `false` — Terraform-managed resources are locked from UI edits unless you opt in. Set to `true` to allow UI modifications; not supported by all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource#allow_ui_updates AppsGenericResource#allow_ui_updates}
  */
  readonly allowUiUpdates?: boolean | cdktf.IResolvable;
  /**
  * Override the identity stamped on this resource's manager metadata. Defaults to "grafana-terraform-provider". Use this to distinguish resources managed by different Terraform workspaces targeting the same Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource#manager_identity AppsGenericResource#manager_identity}
  */
  readonly managerIdentity?: string;
  /**
  * Kubernetes-style manifest, typically from `yamldecode(file(...))` or `jsondecode(file(...))`. Must contain `apiVersion`, `kind`, `metadata` (with `name` or `uid`), and `spec`. Use HCL `merge()` to inject Terraform variables. If you start from an exported manifest, remove noisy server-managed metadata such as `resourceVersion`, `generation`, and `managedFields`, or import the resource first and use the normalized state shape. If `metadata.namespace` is set, it must match the namespace selected from provider `org_id` or `stack_id` / autodiscovery. Top-level manifest fields are limited to `apiVersion`, `kind`, `metadata`, `spec`, and the ignored `status` field. The `secure` field must not be set here; use the top-level `secure` argument instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource#manifest AppsGenericResource#manifest}
  */
  readonly manifest?: { [key: string]: any };
  /**
  * Write-only secure values map. Each key must contain exactly one of `create` or `name`; empty objects are invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource#secure AppsGenericResource#secure}
  */
  readonly secure?: { [key: string]: any };
  /**
  * Set this to 1 when using `secure`, then increment it whenever you want Terraform to re-apply secure values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource#secure_version AppsGenericResource#secure_version}
  */
  readonly secureVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource grafana_apps_generic_resource}
*/
export class AppsGenericResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_apps_generic_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsGenericResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsGenericResource to import
  * @param importFromId The id of the existing AppsGenericResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsGenericResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_apps_generic_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/apps_generic_resource grafana_apps_generic_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsGenericResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppsGenericResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_apps_generic_resource',
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
    this._allowUiUpdates = config.allowUiUpdates;
    this._managerIdentity = config.managerIdentity;
    this._manifest = config.manifest;
    this._secure = config.secure;
    this._secureVersion = config.secureVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ui_updates - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // manifest - computed: true, optional: true, required: false
  private _manifest?: { [key: string]: any }; 
  public get manifest() {
    return this.getAnyMapAttribute('manifest');
  }
  public set manifest(value: { [key: string]: any }) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: { [key: string]: any }; 
  public get secure() {
    return this.getAnyMapAttribute('secure');
  }
  public set secure(value: { [key: string]: any }) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // secure_version - computed: false, optional: true, required: false
  private _secureVersion?: number; 
  public get secureVersion() {
    return this.getNumberAttribute('secure_version');
  }
  public set secureVersion(value: number) {
    this._secureVersion = value;
  }
  public resetSecureVersion() {
    this._secureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureVersionInput() {
    return this._secureVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ui_updates: cdktf.booleanToTerraform(this._allowUiUpdates),
      manager_identity: cdktf.stringToTerraform(this._managerIdentity),
      manifest: cdktf.hashMapper(cdktf.anyToTerraform)(this._manifest),
      secure: cdktf.hashMapper(cdktf.anyToTerraform)(this._secure),
      secure_version: cdktf.numberToTerraform(this._secureVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ui_updates: {
        value: cdktf.booleanToHclTerraform(this._allowUiUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manager_identity: {
        value: cdktf.stringToHclTerraform(this._managerIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._manifest),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      secure: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._secure),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      secure_version: {
        value: cdktf.numberToHclTerraform(this._secureVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
