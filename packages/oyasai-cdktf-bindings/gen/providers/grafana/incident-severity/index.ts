// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentSeverityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the severity is archived. Archived severities cannot be assigned to new incidents, but remain on historical ones. The Pending severity cannot be archived. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#archived IncidentSeverity#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * The color of the severity in dark mode, as a CSS color such as `#FF5286` or `rgb(255, 82, 134)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#dark_color IncidentSeverity#dark_color}
  */
  readonly darkColor?: string;
  /**
  * A description of when the severity applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#description IncidentSeverity#description}
  */
  readonly description?: string;
  /**
  * The name of the icon shown for the severity in the UI and in Slack. One of `angle-double-down`, `angle-double-up`, `bolt`, `bug`, `exclamation`, `exclamation-triangle`, `fire`, `question-circle` or `shield`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#icon IncidentSeverity#icon}
  */
  readonly icon?: string;
  /**
  * The display label of the severity, for example `Critical`. Incidents reference the severity by this label. It must be unique within the organization, including archived severities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#label IncidentSeverity#label}
  */
  readonly label: string;
  /**
  * The level of the severity, from `1` to `5`; lower is more severe. It must be unique within the organization, including archived severities. Level `-1` belongs to the system-managed Pending severity, which can be imported but not created. Changing it forces a new severity to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#level IncidentSeverity#level}
  */
  readonly level: number;
  /**
  * The color of the severity in light mode, as a CSS color such as `#FF5286` or `rgb(255, 82, 134)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#light_color IncidentSeverity#light_color}
  */
  readonly lightColor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity grafana_incident_severity}
*/
export class IncidentSeverity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_incident_severity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentSeverity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentSeverity to import
  * @param importFromId The id of the existing IncidentSeverity that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentSeverity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_incident_severity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_severity grafana_incident_severity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentSeverityConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentSeverityConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_incident_severity',
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
    this._archived = config.archived;
    this._darkColor = config.darkColor;
    this._description = config.description;
    this._icon = config.icon;
    this._label = config.label;
    this._level = config.level;
    this._lightColor = config.lightColor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: true, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // dark_color - computed: false, optional: true, required: false
  private _darkColor?: string; 
  public get darkColor() {
    return this.getStringAttribute('dark_color');
  }
  public set darkColor(value: string) {
    this._darkColor = value;
  }
  public resetDarkColor() {
    this._darkColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkColorInput() {
    return this._darkColor;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // level - computed: false, optional: false, required: true
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // light_color - computed: false, optional: true, required: false
  private _lightColor?: string; 
  public get lightColor() {
    return this.getStringAttribute('light_color');
  }
  public set lightColor(value: string) {
    this._lightColor = value;
  }
  public resetLightColor() {
    this._lightColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightColorInput() {
    return this._lightColor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      dark_color: cdktf.stringToTerraform(this._darkColor),
      description: cdktf.stringToTerraform(this._description),
      icon: cdktf.stringToTerraform(this._icon),
      label: cdktf.stringToTerraform(this._label),
      level: cdktf.numberToTerraform(this._level),
      light_color: cdktf.stringToTerraform(this._lightColor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dark_color: {
        value: cdktf.stringToHclTerraform(this._darkColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.numberToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      light_color: {
        value: cdktf.stringToHclTerraform(this._lightColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
