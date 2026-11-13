// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the role is archived. Archived roles cannot be assigned on new incidents, but remain on historical ones. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role#archived IncidentRole#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * A description of what the role is responsible for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role#description IncidentRole#description}
  */
  readonly description?: string;
  /**
  * Whether assigning this role is recorded as an important activity on the incident. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role#important IncidentRole#important}
  */
  readonly important?: boolean | cdktf.IResolvable;
  /**
  * Whether this role must be assigned on every incident. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role#mandatory IncidentRole#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * The name of the role, for example `Commander`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role#name IncidentRole#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role grafana_incident_role}
*/
export class IncidentRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_incident_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentRole to import
  * @param importFromId The id of the existing IncidentRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_incident_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/incident_role grafana_incident_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentRoleConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_incident_role',
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
    this._description = config.description;
    this._important = config.important;
    this._mandatory = config.mandatory;
    this._name = config.name;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // important - computed: true, optional: true, required: false
  private _important?: boolean | cdktf.IResolvable; 
  public get important() {
    return this.getBooleanAttribute('important');
  }
  public set important(value: boolean | cdktf.IResolvable) {
    this._important = value;
  }
  public resetImportant() {
    this._important = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importantInput() {
    return this._important;
  }

  // mandatory - computed: true, optional: true, required: false
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      description: cdktf.stringToTerraform(this._description),
      important: cdktf.booleanToTerraform(this._important),
      mandatory: cdktf.booleanToTerraform(this._mandatory),
      name: cdktf.stringToTerraform(this._name),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      important: {
        value: cdktf.booleanToHclTerraform(this._important),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mandatory: {
        value: cdktf.booleanToHclTerraform(this._mandatory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
