// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAzureCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client ID of the Azure Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#client_id CloudProviderAzureCredential#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of the Azure Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#client_secret CloudProviderAzureCredential#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Whether the Azure Credential is enabled or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#enabled CloudProviderAzureCredential#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Azure Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#name CloudProviderAzureCredential#name}
  */
  readonly name: string;
  /**
  * The list of resource tags to add to metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#resource_tags_to_add_to_metrics CloudProviderAzureCredential#resource_tags_to_add_to_metrics}
  */
  readonly resourceTagsToAddToMetrics?: string[];
  /**
  * The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#stack_id CloudProviderAzureCredential#stack_id}
  */
  readonly stackId: string;
  /**
  * A set of static labels to add to all metrics exported using this credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#static_labels CloudProviderAzureCredential#static_labels}
  */
  readonly staticLabels?: { [key: string]: string };
  /**
  * The tenant ID of the Azure Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#tenant_id CloudProviderAzureCredential#tenant_id}
  */
  readonly tenantId: string;
  /**
  * auto_discovery_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#auto_discovery_configuration CloudProviderAzureCredential#auto_discovery_configuration}
  */
  readonly autoDiscoveryConfiguration?: CloudProviderAzureCredentialAutoDiscoveryConfiguration[] | cdktf.IResolvable;
  /**
  * resource_discovery_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#resource_discovery_tag_filter CloudProviderAzureCredential#resource_discovery_tag_filter}
  */
  readonly resourceDiscoveryTagFilter?: CloudProviderAzureCredentialResourceDiscoveryTagFilter[] | cdktf.IResolvable;
}
export interface CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#aggregations CloudProviderAzureCredential#aggregations}
  */
  readonly aggregations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#dimensions CloudProviderAzureCredential#dimensions}
  */
  readonly dimensions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#name CloudProviderAzureCredential#name}
  */
  readonly name: string;
}

export function cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationToTerraform(struct?: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregations),
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationToHclTerraform(struct?: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregations = undefined;
      this._dimensions = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregations = value.aggregations;
      this._dimensions = value.dimensions;
      this._name = value.name;
    }
  }

  // aggregations - computed: false, optional: false, required: true
  private _aggregations?: string[]; 
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }
  public set aggregations(value: string[]) {
    this._aggregations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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
}

export class CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationOutputReference {
    return new CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#metric_configuration CloudProviderAzureCredential#metric_configuration}
  */
  readonly metricConfiguration: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#resource_type_name CloudProviderAzureCredential#resource_type_name}
  */
  readonly resourceTypeName: string;
}

export function cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsToTerraform(struct?: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_configuration: cdktf.listMapper(cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationToTerraform, false)(struct!.metricConfiguration),
    resource_type_name: cdktf.stringToTerraform(struct!.resourceTypeName),
  }
}


export function cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsToHclTerraform(struct?: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_configuration: {
      value: cdktf.listMapperHcl(cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationToHclTerraform, false)(struct!.metricConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationList",
    },
    resource_type_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricConfiguration = this._metricConfiguration?.internalValue;
    }
    if (this._resourceTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeName = this._resourceTypeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricConfiguration.internalValue = undefined;
      this._resourceTypeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricConfiguration.internalValue = value.metricConfiguration;
      this._resourceTypeName = value.resourceTypeName;
    }
  }

  // metric_configuration - computed: false, optional: false, required: true
  private _metricConfiguration = new CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfigurationList(this, "metric_configuration", false);
  public get metricConfiguration() {
    return this._metricConfiguration;
  }
  public putMetricConfiguration(value: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsMetricConfiguration[] | cdktf.IResolvable) {
    this._metricConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricConfigurationInput() {
    return this._metricConfiguration.internalValue;
  }

  // resource_type_name - computed: false, optional: false, required: true
  private _resourceTypeName?: string; 
  public get resourceTypeName() {
    return this.getStringAttribute('resource_type_name');
  }
  public set resourceTypeName(value: string) {
    this._resourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeNameInput() {
    return this._resourceTypeName;
  }
}

export class CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsOutputReference {
    return new CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAzureCredentialAutoDiscoveryConfiguration {
  /**
  * The list of resource type configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#resource_type_configurations CloudProviderAzureCredential#resource_type_configurations}
  */
  readonly resourceTypeConfigurations: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations[] | cdktf.IResolvable;
  /**
  * The subscription ID of the Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#subscription_id CloudProviderAzureCredential#subscription_id}
  */
  readonly subscriptionId: string;
}

export function cloudProviderAzureCredentialAutoDiscoveryConfigurationToTerraform(struct?: CloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type_configurations: cdktf.listMapper(cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsToTerraform, false)(struct!.resourceTypeConfigurations),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function cloudProviderAzureCredentialAutoDiscoveryConfigurationToHclTerraform(struct?: CloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type_configurations: {
      value: cdktf.listMapperHcl(cloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsToHclTerraform, false)(struct!.resourceTypeConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsList",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAzureCredentialAutoDiscoveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypeConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeConfigurations = this._resourceTypeConfigurations?.internalValue;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAzureCredentialAutoDiscoveryConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypeConfigurations.internalValue = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypeConfigurations.internalValue = value.resourceTypeConfigurations;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // resource_type_configurations - computed: false, optional: false, required: true
  private _resourceTypeConfigurations = new CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurationsList(this, "resource_type_configurations", false);
  public get resourceTypeConfigurations() {
    return this._resourceTypeConfigurations;
  }
  public putResourceTypeConfigurations(value: CloudProviderAzureCredentialAutoDiscoveryConfigurationResourceTypeConfigurations[] | cdktf.IResolvable) {
    this._resourceTypeConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeConfigurationsInput() {
    return this._resourceTypeConfigurations.internalValue;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}

export class CloudProviderAzureCredentialAutoDiscoveryConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAzureCredentialAutoDiscoveryConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAzureCredentialAutoDiscoveryConfigurationOutputReference {
    return new CloudProviderAzureCredentialAutoDiscoveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAzureCredentialResourceDiscoveryTagFilter {
  /**
  * The key of the tag filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#key CloudProviderAzureCredential#key}
  */
  readonly key: string;
  /**
  * The value of the tag filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#value CloudProviderAzureCredential#value}
  */
  readonly value: string;
}

export function cloudProviderAzureCredentialResourceDiscoveryTagFilterToTerraform(struct?: CloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudProviderAzureCredentialResourceDiscoveryTagFilterToHclTerraform(struct?: CloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAzureCredentialResourceDiscoveryTagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudProviderAzureCredentialResourceDiscoveryTagFilterList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAzureCredentialResourceDiscoveryTagFilter[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference {
    return new CloudProviderAzureCredentialResourceDiscoveryTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential grafana_cloud_provider_azure_credential}
*/
export class CloudProviderAzureCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_azure_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProviderAzureCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProviderAzureCredential to import
  * @param importFromId The id of the existing CloudProviderAzureCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProviderAzureCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_azure_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_provider_azure_credential grafana_cloud_provider_azure_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderAzureCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderAzureCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_provider_azure_credential',
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
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceTagsToAddToMetrics = config.resourceTagsToAddToMetrics;
    this._stackId = config.stackId;
    this._staticLabels = config.staticLabels;
    this._tenantId = config.tenantId;
    this._autoDiscoveryConfiguration.internalValue = config.autoDiscoveryConfiguration;
    this._resourceDiscoveryTagFilter.internalValue = config.resourceDiscoveryTagFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // enabled - computed: true, optional: true, required: false
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_tags_to_add_to_metrics - computed: false, optional: true, required: false
  private _resourceTagsToAddToMetrics?: string[]; 
  public get resourceTagsToAddToMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_tags_to_add_to_metrics'));
  }
  public set resourceTagsToAddToMetrics(value: string[]) {
    this._resourceTagsToAddToMetrics = value;
  }
  public resetResourceTagsToAddToMetrics() {
    this._resourceTagsToAddToMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsToAddToMetricsInput() {
    return this._resourceTagsToAddToMetrics;
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

  // static_labels - computed: false, optional: true, required: false
  private _staticLabels?: { [key: string]: string }; 
  public get staticLabels() {
    return this.getStringMapAttribute('static_labels');
  }
  public set staticLabels(value: { [key: string]: string }) {
    this._staticLabels = value;
  }
  public resetStaticLabels() {
    this._staticLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLabelsInput() {
    return this._staticLabels;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // auto_discovery_configuration - computed: false, optional: true, required: false
  private _autoDiscoveryConfiguration = new CloudProviderAzureCredentialAutoDiscoveryConfigurationList(this, "auto_discovery_configuration", false);
  public get autoDiscoveryConfiguration() {
    return this._autoDiscoveryConfiguration;
  }
  public putAutoDiscoveryConfiguration(value: CloudProviderAzureCredentialAutoDiscoveryConfiguration[] | cdktf.IResolvable) {
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
  private _resourceDiscoveryTagFilter = new CloudProviderAzureCredentialResourceDiscoveryTagFilterList(this, "resource_discovery_tag_filter", false);
  public get resourceDiscoveryTagFilter() {
    return this._resourceDiscoveryTagFilter;
  }
  public putResourceDiscoveryTagFilter(value: CloudProviderAzureCredentialResourceDiscoveryTagFilter[] | cdktf.IResolvable) {
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      resource_tags_to_add_to_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTagsToAddToMetrics),
      stack_id: cdktf.stringToTerraform(this._stackId),
      static_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._staticLabels),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      auto_discovery_configuration: cdktf.listMapper(cloudProviderAzureCredentialAutoDiscoveryConfigurationToTerraform, true)(this._autoDiscoveryConfiguration.internalValue),
      resource_discovery_tag_filter: cdktf.listMapper(cloudProviderAzureCredentialResourceDiscoveryTagFilterToTerraform, true)(this._resourceDiscoveryTagFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags_to_add_to_metrics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTagsToAddToMetrics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._staticLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_configuration: {
        value: cdktf.listMapperHcl(cloudProviderAzureCredentialAutoDiscoveryConfigurationToHclTerraform, true)(this._autoDiscoveryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProviderAzureCredentialAutoDiscoveryConfigurationList",
      },
      resource_discovery_tag_filter: {
        value: cdktf.listMapperHcl(cloudProviderAzureCredentialResourceDiscoveryTagFilterToHclTerraform, true)(this._resourceDiscoveryTagFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProviderAzureCredentialResourceDiscoveryTagFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
