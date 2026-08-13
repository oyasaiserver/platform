// https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of random bytes to produce. The minimum value is 1, which produces eight bits of randomness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id#byte_length Id#byte_length}
  */
  readonly byteLength: number;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id#keepers Id#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * Arbitrary string to prefix the output value with. This string is supplied as-is, meaning it is not guaranteed to be URL-safe or base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id#prefix Id#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id random_id}
*/
export class Id extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Id resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Id to import
  * @param importFromId The id of the existing Id that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Id to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "random_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/id random_id} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdConfig
  */
  public constructor(scope: Construct, id: string, config: IdConfig) {
    super(scope, id, {
      terraformResourceType: 'random_id',
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
    this._byteLength = config.byteLength;
    this._keepers = config.keepers;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // b64_std - computed: true, optional: false, required: false
  public get b64Std() {
    return this.getStringAttribute('b64_std');
  }

  // b64_url - computed: true, optional: false, required: false
  public get b64Url() {
    return this.getStringAttribute('b64_url');
  }

  // byte_length - computed: false, optional: false, required: true
  private _byteLength?: number; 
  public get byteLength() {
    return this.getNumberAttribute('byte_length');
  }
  public set byteLength(value: number) {
    this._byteLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byteLengthInput() {
    return this._byteLength;
  }

  // dec - computed: true, optional: false, required: false
  public get dec() {
    return this.getStringAttribute('dec');
  }

  // hex - computed: true, optional: false, required: false
  public get hex() {
    return this.getStringAttribute('hex');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byte_length: cdktf.numberToTerraform(this._byteLength),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      prefix: cdktf.stringToTerraform(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byte_length: {
        value: cdktf.numberToHclTerraform(this._byteLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
