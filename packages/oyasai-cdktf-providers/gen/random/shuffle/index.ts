// https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShuffleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of strings to shuffle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle#input Shuffle#input}
  */
  readonly input: string[];
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle#keepers Shuffle#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * The number of results to return. Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle#result_count Shuffle#result_count}
  */
  readonly resultCount?: number;
  /**
  * Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.
  * 
  * **Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle#seed Shuffle#seed}
  */
  readonly seed?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle random_shuffle}
*/
export class Shuffle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_shuffle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Shuffle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Shuffle to import
  * @param importFromId The id of the existing Shuffle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Shuffle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "random_shuffle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/shuffle random_shuffle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShuffleConfig
  */
  public constructor(scope: Construct, id: string, config: ShuffleConfig) {
    super(scope, id, {
      terraformResourceType: 'random_shuffle',
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
    this._input = config.input;
    this._keepers = config.keepers;
    this._resultCount = config.resultCount;
    this._seed = config.seed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: false, optional: false, required: true
  private _input?: string[]; 
  public get input() {
    return this.getListAttribute('input');
  }
  public set input(value: string[]) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getListAttribute('result');
  }

  // result_count - computed: false, optional: true, required: false
  private _resultCount?: number; 
  public get resultCount() {
    return this.getNumberAttribute('result_count');
  }
  public set resultCount(value: number) {
    this._resultCount = value;
  }
  public resetResultCount() {
    this._resultCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCountInput() {
    return this._resultCount;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input: cdktf.listMapper(cdktf.stringToTerraform, false)(this._input),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      result_count: cdktf.numberToTerraform(this._resultCount),
      seed: cdktf.stringToTerraform(this._seed),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      input: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._input),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      result_count: {
        value: cdktf.numberToHclTerraform(this._resultCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seed: {
        value: cdktf.stringToHclTerraform(this._seed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
