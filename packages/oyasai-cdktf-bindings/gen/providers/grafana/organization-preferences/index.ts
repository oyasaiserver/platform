// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Organization home dashboard UID. This is only available in Grafana 9.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#home_dashboard_uid OrganizationPreferences#home_dashboard_uid}
  */
  readonly homeDashboardUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#id OrganizationPreferences#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#org_id OrganizationPreferences#org_id}
  */
  readonly orgId?: string;
  /**
  * The Organization theme. Any string value is supported, including custom themes. Common values are `light`, `dark`, `system`, or an empty string for the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#theme OrganizationPreferences#theme}
  */
  readonly theme?: string;
  /**
  * The Organization timezone. Any string value is supported, including IANA timezone names. Common values are `utc`, `browser`, or an empty string for the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#timezone OrganizationPreferences#timezone}
  */
  readonly timezone?: string;
  /**
  * The Organization week start day. Available values are `sunday`, `monday`, `saturday`, or an empty string for the default. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#week_start OrganizationPreferences#week_start}
  */
  readonly weekStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences grafana_organization_preferences}
*/
export class OrganizationPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_organization_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationPreferences to import
  * @param importFromId The id of the existing OrganizationPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_organization_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/organization_preferences grafana_organization_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPreferencesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationPreferencesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_organization_preferences',
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
    this._homeDashboardUid = config.homeDashboardUid;
    this._id = config.id;
    this._orgId = config.orgId;
    this._theme = config.theme;
    this._timezone = config.timezone;
    this._weekStart = config.weekStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // home_dashboard_uid - computed: false, optional: true, required: false
  private _homeDashboardUid?: string; 
  public get homeDashboardUid() {
    return this.getStringAttribute('home_dashboard_uid');
  }
  public set homeDashboardUid(value: string) {
    this._homeDashboardUid = value;
  }
  public resetHomeDashboardUid() {
    this._homeDashboardUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDashboardUidInput() {
    return this._homeDashboardUid;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // week_start - computed: false, optional: true, required: false
  private _weekStart?: string; 
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
  public set weekStart(value: string) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      home_dashboard_uid: cdktf.stringToTerraform(this._homeDashboardUid),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      theme: cdktf.stringToTerraform(this._theme),
      timezone: cdktf.stringToTerraform(this._timezone),
      week_start: cdktf.stringToTerraform(this._weekStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      home_dashboard_uid: {
        value: cdktf.stringToHclTerraform(this._homeDashboardUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_start: {
        value: cdktf.stringToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
