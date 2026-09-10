// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudProviderAzureCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID given by the Grafana Cloud Provider API to this Azure Credential resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential#resource_id DataGrafanaCloudProviderAzureCredential#resource_id}
  */
  readonly resourceId: string;
  /**
  * The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential#stack_id DataGrafanaCloudProviderAzureCredential#stack_id}
  */
  readonly stackId: string;
  /**
  * auto_discovery_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential#auto_discovery_configuration DataGrafanaCloudProviderAzureCredential#auto_discovery_configuration}
  */
  readonly autoDiscoveryConfiguration?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration[] | cdktf.IResolvable;
  /**
  * resource_discovery_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential#resource_discovery_tag_filter DataGrafanaCloudProviderAzureCredential#resource_discovery_tag_filter}
  */
  readonly resourceDiscoveryTagFilter?: DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[] | cdktf.IResolvable;
}
export interface DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration {
}

export function dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationToTerraform(struct?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationToHclTerraform(struct?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregations - computed: true, optional: false, required: false
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationOutputReference {
    return new DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations {
}

export function dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsToTerraform(struct?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsToHclTerraform(struct?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_configuration - computed: true, optional: false, required: false
  private _metricConfiguration = new DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationList(this, "metric_configuration", false);
  public get metricConfiguration() {
    return this._metricConfiguration;
  }

  // resource_type_name - computed: true, optional: false, required: false
  public get resourceTypeName() {
    return this.getStringAttribute('resource_type_name');
  }
}

export class DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsOutputReference {
    return new DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration {
}

export function dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationToTerraform(struct?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationToHclTerraform(struct?: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // resource_type_configurations - computed: true, optional: false, required: false
  private _resourceTypeConfigurations = new DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsList(this, "resource_type_configurations", false);
  public get resourceTypeConfigurations() {
    return this._resourceTypeConfigurations;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}

export class DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationOutputReference {
    return new DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter {
}

export function dataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterToTerraform(struct?: DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterToHclTerraform(struct?: DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference {
    return new DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential grafana_cloud_provider_azure_credential}
*/
export class DataGrafanaCloudProviderAzureCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_azure_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudProviderAzureCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudProviderAzureCredential to import
  * @param importFromId The id of the existing DataGrafanaCloudProviderAzureCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudProviderAzureCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_azure_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_azure_credential grafana_cloud_provider_azure_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudProviderAzureCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudProviderAzureCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_provider_azure_credential',
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
    this._resourceId = config.resourceId;
    this._stackId = config.stackId;
    this._autoDiscoveryConfiguration.internalValue = config.autoDiscoveryConfiguration;
    this._resourceDiscoveryTagFilter.internalValue = config.resourceDiscoveryTagFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_tags_to_add_to_metrics - computed: true, optional: false, required: false
  public get resourceTagsToAddToMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_tags_to_add_to_metrics'));
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // static_labels - computed: true, optional: false, required: false
  private _staticLabels = new cdktf.StringMap(this, "static_labels");
  public get staticLabels() {
    return this._staticLabels;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // auto_discovery_configuration - computed: false, optional: true, required: false
  private _autoDiscoveryConfiguration = new DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationList(this, "auto_discovery_configuration", false);
  public get autoDiscoveryConfiguration() {
    return this._autoDiscoveryConfiguration;
  }
  public putAutoDiscoveryConfiguration(value: DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfiguration[] | cdktf.IResolvable) {
    this._autoDiscoveryConfiguration.internalValue = value;
  }
  public resetAutoDiscoveryConfiguration() {
    this._autoDiscoveryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryConfigurationInput() {
    return this._autoDiscoveryConfiguration.internalValue;
  }

  // resource_discovery_tag_filter - computed: false, optional: true, required: false
  private _resourceDiscoveryTagFilter = new DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList(this, "resource_discovery_tag_filter", false);
  public get resourceDiscoveryTagFilter() {
    return this._resourceDiscoveryTagFilter;
  }
  public putResourceDiscoveryTagFilter(value: DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilter[] | cdktf.IResolvable) {
    this._resourceDiscoveryTagFilter.internalValue = value;
  }
  public resetResourceDiscoveryTagFilter() {
    this._resourceDiscoveryTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDiscoveryTagFilterInput() {
    return this._resourceDiscoveryTagFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: cdktf.stringToTerraform(this._resourceId),
      stack_id: cdktf.stringToTerraform(this._stackId),
      auto_discovery_configuration: cdktf.listMapper(dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationToTerraform, true)(this._autoDiscoveryConfiguration.internalValue),
      resource_discovery_tag_filter: cdktf.listMapper(dataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterToTerraform, true)(this._resourceDiscoveryTagFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_configuration: {
        value: cdktf.listMapperHcl(dataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationToHclTerraform, true)(this._autoDiscoveryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaCloudProviderAzureCredentialAutoDiscoveryConfigurationList",
      },
      resource_discovery_tag_filter: {
        value: cdktf.listMapperHcl(dataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterToHclTerraform, true)(this._resourceDiscoveryTagFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaCloudProviderAzureCredentialResourceDiscoveryTagFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
