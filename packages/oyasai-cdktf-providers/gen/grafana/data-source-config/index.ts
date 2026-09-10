// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSourceConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom HTTP headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#http_headers DataSourceConfigA#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#id DataSourceConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Serialized JSON string containing the json data. This attribute can be used to pass configuration options to the data source. To figure out what options a datasource has available, see its docs or inspect the network data when saving it from the Grafana UI. Note that keys in this map are usually camelCased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#json_data_encoded DataSourceConfigA#json_data_encoded}
  */
  readonly jsonDataEncoded?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#org_id DataSourceConfigA#org_id}
  */
  readonly orgId?: string;
  /**
  * Serialized JSON string containing the secure json data. This attribute can be used to pass secure configuration options to the data source. To figure out what options a datasource has available, see its docs or inspect the network data when saving it from the Grafana UI. Note that keys in this map are usually camelCased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#secure_json_data_encoded DataSourceConfigA#secure_json_data_encoded}
  */
  readonly secureJsonDataEncoded?: string;
  /**
  * Unique identifier. If unset, this will be automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#uid DataSourceConfigA#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config grafana_data_source_config}
*/
export class DataSourceConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_data_source_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSourceConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSourceConfigA to import
  * @param importFromId The id of the existing DataSourceConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSourceConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_data_source_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config grafana_data_source_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSourceConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSourceConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_data_source_config',
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
    this._httpHeaders = config.httpHeaders;
    this._id = config.id;
    this._jsonDataEncoded = config.jsonDataEncoded;
    this._orgId = config.orgId;
    this._secureJsonDataEncoded = config.secureJsonDataEncoded;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
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

  // json_data_encoded - computed: false, optional: true, required: false
  private _jsonDataEncoded?: string; 
  public get jsonDataEncoded() {
    return this.getStringAttribute('json_data_encoded');
  }
  public set jsonDataEncoded(value: string) {
    this._jsonDataEncoded = value;
  }
  public resetJsonDataEncoded() {
    this._jsonDataEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonDataEncodedInput() {
    return this._jsonDataEncoded;
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

  // secure_json_data_encoded - computed: false, optional: true, required: false
  private _secureJsonDataEncoded?: string; 
  public get secureJsonDataEncoded() {
    return this.getStringAttribute('secure_json_data_encoded');
  }
  public set secureJsonDataEncoded(value: string) {
    this._secureJsonDataEncoded = value;
  }
  public resetSecureJsonDataEncoded() {
    this._secureJsonDataEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureJsonDataEncodedInput() {
    return this._secureJsonDataEncoded;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      id: cdktf.stringToTerraform(this._id),
      json_data_encoded: cdktf.stringToTerraform(this._jsonDataEncoded),
      org_id: cdktf.stringToTerraform(this._orgId),
      secure_json_data_encoded: cdktf.stringToTerraform(this._secureJsonDataEncoded),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._httpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_data_encoded: {
        value: cdktf.stringToHclTerraform(this._jsonDataEncoded),
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
      secure_json_data_encoded: {
        value: cdktf.stringToHclTerraform(this._secureJsonDataEncoded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
