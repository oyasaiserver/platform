// https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/bytes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BytesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/bytes#keepers Bytes#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * The number of bytes requested. The minimum value for length is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/bytes#length Bytes#length}
  */
  readonly length: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/bytes random_bytes}
*/
export class Bytes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_bytes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bytes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bytes to import
  * @param importFromId The id of the existing Bytes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/bytes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bytes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "random_bytes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/bytes random_bytes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BytesConfig
  */
  public constructor(scope: Construct, id: string, config: BytesConfig) {
    super(scope, id, {
      terraformResourceType: 'random_bytes',
      terraformGeneratorMetadata: {
        providerName: 'random',
        providerVersion: '3.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keepers = config.keepers;
    this._length = config.length;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64 - computed: true, optional: false, required: false
  public get base64() {
    return this.getStringAttribute('base64');
  }

  // hex - computed: true, optional: false, required: false
  public get hex() {
    return this.getStringAttribute('hex');
  }

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      length: cdktf.numberToTerraform(this._length),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
