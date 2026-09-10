// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/fleet_management_collectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaFleetManagementCollectorsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataGrafanaFleetManagementCollectorsCollectors {
}

export function dataGrafanaFleetManagementCollectorsCollectorsToTerraform(struct?: DataGrafanaFleetManagementCollectorsCollectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaFleetManagementCollectorsCollectorsToHclTerraform(struct?: DataGrafanaFleetManagementCollectorsCollectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaFleetManagementCollectorsCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGrafanaFleetManagementCollectorsCollectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaFleetManagementCollectorsCollectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collector_type - computed: true, optional: false, required: false
  public get collectorType() {
    return this.getStringAttribute('collector_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_attributes - computed: true, optional: false, required: false
  private _localAttributes = new cdktf.StringMap(this, "local_attributes");
  public get localAttributes() {
    return this._localAttributes;
  }

  // remote_attributes - computed: true, optional: false, required: false
  private _remoteAttributes = new cdktf.StringMap(this, "remote_attributes");
  public get remoteAttributes() {
    return this._remoteAttributes;
  }
}

export class DataGrafanaFleetManagementCollectorsCollectorsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGrafanaFleetManagementCollectorsCollectorsOutputReference {
    return new DataGrafanaFleetManagementCollectorsCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/fleet_management_collectors grafana_fleet_management_collectors}
*/
export class DataGrafanaFleetManagementCollectors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_fleet_management_collectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaFleetManagementCollectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaFleetManagementCollectors to import
  * @param importFromId The id of the existing DataGrafanaFleetManagementCollectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/fleet_management_collectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaFleetManagementCollectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_fleet_management_collectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/fleet_management_collectors grafana_fleet_management_collectors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaFleetManagementCollectorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaFleetManagementCollectorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_fleet_management_collectors',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collectors - computed: true, optional: false, required: false
  private _collectors = new DataGrafanaFleetManagementCollectorsCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
