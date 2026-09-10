// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_access_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudAccessPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, only access policies with the specified name will be returned. This is faster than filtering in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_access_policies#name_filter DataGrafanaCloudAccessPolicies#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * If set, only access policies in the specified region will be returned. Otherwise, fetches from all available regions (more resource intensive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_access_policies#region_filter DataGrafanaCloudAccessPolicies#region_filter}
  */
  readonly regionFilter?: string;
}
export interface DataGrafanaCloudAccessPoliciesAccessPolicies {
}

export function dataGrafanaCloudAccessPoliciesAccessPoliciesToTerraform(struct?: DataGrafanaCloudAccessPoliciesAccessPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudAccessPoliciesAccessPoliciesToHclTerraform(struct?: DataGrafanaCloudAccessPoliciesAccessPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudAccessPoliciesAccessPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudAccessPoliciesAccessPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataGrafanaCloudAccessPoliciesAccessPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference {
    return new DataGrafanaCloudAccessPoliciesAccessPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_access_policies grafana_cloud_access_policies}
*/
export class DataGrafanaCloudAccessPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_access_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudAccessPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudAccessPolicies to import
  * @param importFromId The id of the existing DataGrafanaCloudAccessPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_access_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudAccessPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_access_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_access_policies grafana_cloud_access_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudAccessPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudAccessPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_access_policies',
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
    this._nameFilter = config.nameFilter;
    this._regionFilter = config.regionFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: false, required: false
  private _accessPolicies = new DataGrafanaCloudAccessPoliciesAccessPoliciesList(this, "access_policies", true);
  public get accessPolicies() {
    return this._accessPolicies;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // region_filter - computed: false, optional: true, required: false
  private _regionFilter?: string; 
  public get regionFilter() {
    return this.getStringAttribute('region_filter');
  }
  public set regionFilter(value: string) {
    this._regionFilter = value;
  }
  public resetRegionFilter() {
    this._regionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionFilterInput() {
    return this._regionFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      region_filter: cdktf.stringToTerraform(this._regionFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name_filter: {
        value: cdktf.stringToHclTerraform(this._nameFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_filter: {
        value: cdktf.stringToHclTerraform(this._regionFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
