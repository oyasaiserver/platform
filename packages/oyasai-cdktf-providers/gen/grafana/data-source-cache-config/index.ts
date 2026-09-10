// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSourceCacheConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * UID of the data source to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#datasource_uid DataSourceCacheConfig#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * Whether caching is enabled for this data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#enabled DataSourceCacheConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#id DataSourceCacheConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#org_id DataSourceCacheConfig#org_id}
  */
  readonly orgId?: string;
  /**
  * TTL for query caching, in milliseconds. Ignored if use_default_ttl is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#ttl_queries_ms DataSourceCacheConfig#ttl_queries_ms}
  */
  readonly ttlQueriesMs?: number;
  /**
  * TTL for resource caching, in milliseconds. Ignored if use_default_ttl is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#ttl_resources_ms DataSourceCacheConfig#ttl_resources_ms}
  */
  readonly ttlResourcesMs?: number;
  /**
  * If true, use Grafana's default TTLs instead of custom values. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#use_default_ttl DataSourceCacheConfig#use_default_ttl}
  */
  readonly useDefaultTtl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config grafana_data_source_cache_config}
*/
export class DataSourceCacheConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_data_source_cache_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSourceCacheConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSourceCacheConfig to import
  * @param importFromId The id of the existing DataSourceCacheConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSourceCacheConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_data_source_cache_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_cache_config grafana_data_source_cache_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSourceCacheConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataSourceCacheConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_data_source_cache_config',
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
    this._datasourceUid = config.datasourceUid;
    this._enabled = config.enabled;
    this._id = config.id;
    this._orgId = config.orgId;
    this._ttlQueriesMs = config.ttlQueriesMs;
    this._ttlResourcesMs = config.ttlResourcesMs;
    this._useDefaultTtl = config.useDefaultTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasource_uid - computed: false, optional: false, required: true
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ttl_queries_ms - computed: false, optional: true, required: false
  private _ttlQueriesMs?: number; 
  public get ttlQueriesMs() {
    return this.getNumberAttribute('ttl_queries_ms');
  }
  public set ttlQueriesMs(value: number) {
    this._ttlQueriesMs = value;
  }
  public resetTtlQueriesMs() {
    this._ttlQueriesMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlQueriesMsInput() {
    return this._ttlQueriesMs;
  }

  // ttl_resources_ms - computed: false, optional: true, required: false
  private _ttlResourcesMs?: number; 
  public get ttlResourcesMs() {
    return this.getNumberAttribute('ttl_resources_ms');
  }
  public set ttlResourcesMs(value: number) {
    this._ttlResourcesMs = value;
  }
  public resetTtlResourcesMs() {
    this._ttlResourcesMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlResourcesMsInput() {
    return this._ttlResourcesMs;
  }

  // use_default_ttl - computed: false, optional: true, required: false
  private _useDefaultTtl?: boolean | cdktf.IResolvable; 
  public get useDefaultTtl() {
    return this.getBooleanAttribute('use_default_ttl');
  }
  public set useDefaultTtl(value: boolean | cdktf.IResolvable) {
    this._useDefaultTtl = value;
  }
  public resetUseDefaultTtl() {
    this._useDefaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultTtlInput() {
    return this._useDefaultTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datasource_uid: cdktf.stringToTerraform(this._datasourceUid),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      ttl_queries_ms: cdktf.numberToTerraform(this._ttlQueriesMs),
      ttl_resources_ms: cdktf.numberToTerraform(this._ttlResourcesMs),
      use_default_ttl: cdktf.booleanToTerraform(this._useDefaultTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource_uid: {
        value: cdktf.stringToHclTerraform(this._datasourceUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ttl_queries_ms: {
        value: cdktf.numberToHclTerraform(this._ttlQueriesMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_resources_ms: {
        value: cdktf.numberToHclTerraform(this._ttlResourcesMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_default_ttl: {
        value: cdktf.booleanToHclTerraform(this._useDefaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
