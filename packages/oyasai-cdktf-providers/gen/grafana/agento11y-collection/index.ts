// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Agento11YCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the collection. Remove this attribute to clear the stored description; an empty string is not accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_collection#description Agento11YCollection#description}
  */
  readonly description?: string;
  /**
  * Display name of the collection. Names are not unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_collection#name Agento11YCollection#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_collection grafana_agento11y_collection}
*/
export class Agento11YCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_agento11y_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agento11YCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agento11YCollection to import
  * @param importFromId The id of the existing Agento11YCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agento11YCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_agento11y_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_collection grafana_agento11y_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Agento11YCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: Agento11YCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_agento11y_collection',
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
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
