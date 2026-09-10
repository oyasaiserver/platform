// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The method by which Grafana will access the data source: `proxy` or `direct`. Defaults to `proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#access_mode DataSource#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Whether to enable basic auth for the data source. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#basic_auth_enabled DataSource#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Basic auth username. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#basic_auth_username DataSource#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * (Required by some data source types) The name of the database to use on the selected data source server. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#database_name DataSource#database_name}
  */
  readonly databaseName?: string;
  /**
  * Custom HTTP headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#http_headers DataSource#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#id DataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to set the data source as default. This should only be `true` to a single data source. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#is_default DataSource#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Serialized JSON string containing the json data. This attribute can be used to pass configuration options to the data source. To figure out what options a datasource has available, see its docs or inspect the network data when saving it from the Grafana UI. Note that keys in this map are usually camelCased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#json_data_encoded DataSource#json_data_encoded}
  */
  readonly jsonDataEncoded?: string;
  /**
  * A unique name for the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#name DataSource#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#org_id DataSource#org_id}
  */
  readonly orgId?: string;
  /**
  * (Can only be used with data sources in Grafana Cloud) The ID of the Private Data source Connect network to use with this data source. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#private_data_source_connect_network_id DataSource#private_data_source_connect_network_id}
  */
  readonly privateDataSourceConnectNetworkId?: string;
  /**
  * Serialized JSON string containing the secure json data. This attribute can be used to pass secure configuration options to the data source. To figure out what options a datasource has available, see its docs or inspect the network data when saving it from the Grafana UI. Note that keys in this map are usually camelCased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#secure_json_data_encoded DataSource#secure_json_data_encoded}
  */
  readonly secureJsonDataEncoded?: string;
  /**
  * The data source type. Must be one of the supported data source keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#type DataSource#type}
  */
  readonly type: string;
  /**
  * Unique identifier. If unset, this will be automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#uid DataSource#uid}
  */
  readonly uid?: string;
  /**
  * The URL for the data source. The type of URL required varies depending on the chosen data source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#url DataSource#url}
  */
  readonly url?: string;
  /**
  * (Required by some data source types) The username to use to authenticate to the data source. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#username DataSource#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source grafana_data_source}
*/
export class DataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSource to import
  * @param importFromId The id of the existing DataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source grafana_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_data_source',
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
    this._accessMode = config.accessMode;
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._basicAuthUsername = config.basicAuthUsername;
    this._databaseName = config.databaseName;
    this._httpHeaders = config.httpHeaders;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._jsonDataEncoded = config.jsonDataEncoded;
    this._name = config.name;
    this._orgId = config.orgId;
    this._privateDataSourceConnectNetworkId = config.privateDataSourceConnectNetworkId;
    this._secureJsonDataEncoded = config.secureJsonDataEncoded;
    this._type = config.type;
    this._uid = config.uid;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // basic_auth_enabled - computed: false, optional: true, required: false
  private _basicAuthEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }
  public set basicAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthEnabled = value;
  }
  public resetBasicAuthEnabled() {
    this._basicAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthEnabledInput() {
    return this._basicAuthEnabled;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // private_data_source_connect_network_id - computed: false, optional: true, required: false
  private _privateDataSourceConnectNetworkId?: string; 
  public get privateDataSourceConnectNetworkId() {
    return this.getStringAttribute('private_data_source_connect_network_id');
  }
  public set privateDataSourceConnectNetworkId(value: string) {
    this._privateDataSourceConnectNetworkId = value;
  }
  public resetPrivateDataSourceConnectNetworkId() {
    this._privateDataSourceConnectNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDataSourceConnectNetworkIdInput() {
    return this._privateDataSourceConnectNetworkId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      database_name: cdktf.stringToTerraform(this._databaseName),
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      json_data_encoded: cdktf.stringToTerraform(this._jsonDataEncoded),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      private_data_source_connect_network_id: cdktf.stringToTerraform(this._privateDataSourceConnectNetworkId),
      secure_json_data_encoded: cdktf.stringToTerraform(this._secureJsonDataEncoded),
      type: cdktf.stringToTerraform(this._type),
      uid: cdktf.stringToTerraform(this._uid),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_data_encoded: {
        value: cdktf.stringToHclTerraform(this._jsonDataEncoded),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_data_source_connect_network_id: {
        value: cdktf.stringToHclTerraform(this._privateDataSourceConnectNetworkId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
