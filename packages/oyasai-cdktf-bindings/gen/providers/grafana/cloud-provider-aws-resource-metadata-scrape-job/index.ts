// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAwsResourceMetadataScrapeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID assigned by the Grafana Cloud Provider API to an AWS Account resource that should be associated with this Resource Metadata Scrape Job. This can be provided by the `resource_id` attribute of the `grafana_cloud_provider_aws_account` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#aws_account_resource_id CloudProviderAwsResourceMetadataScrapeJob#aws_account_resource_id}
  */
  readonly awsAccountResourceId: string;
  /**
  * Whether the AWS Resource Metadata Scrape Job is enabled or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#enabled CloudProviderAwsResourceMetadataScrapeJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the AWS Resource Metadata Scrape Job. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#name CloudProviderAwsResourceMetadataScrapeJob#name}
  */
  readonly name: string;
  /**
  * A subset of the regions that are configured in the associated AWS Account resource to apply to this scrape job. If not set or empty, all of the Account resource's regions are scraped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#regions_subset_override CloudProviderAwsResourceMetadataScrapeJob#regions_subset_override}
  */
  readonly regionsSubsetOverride?: string[];
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#stack_id CloudProviderAwsResourceMetadataScrapeJob#stack_id}
  */
  readonly stackId: string;
  /**
  * A set of static labels to add to all metrics exported by this scrape job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#static_labels CloudProviderAwsResourceMetadataScrapeJob#static_labels}
  */
  readonly staticLabels?: { [key: string]: string };
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#service CloudProviderAwsResourceMetadataScrapeJob#service}
  */
  readonly service?: CloudProviderAwsResourceMetadataScrapeJobService[] | cdktf.IResolvable;
}
export interface CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter {
  /**
  * The key of the tag filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#key CloudProviderAwsResourceMetadataScrapeJob#key}
  */
  readonly key: string;
  /**
  * The value of the tag filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#value CloudProviderAwsResourceMetadataScrapeJob#value}
  */
  readonly value: string;
}

export function cloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterToTerraform(struct?: CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform(struct?: CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
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

export class CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined) {
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

export class CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterOutputReference {
    return new CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAwsResourceMetadataScrapeJobService {
  /**
  * The name of the service to scrape. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/monitor-cloud-provider/aws/cloudwatch-metrics/services/ for supported services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#name CloudProviderAwsResourceMetadataScrapeJob#name}
  */
  readonly name: string;
  /**
  * The interval in seconds to scrape the service. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/monitor-cloud-provider/aws/cloudwatch-metrics/services/ for supported scrape intervals. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#scrape_interval_seconds CloudProviderAwsResourceMetadataScrapeJob#scrape_interval_seconds}
  */
  readonly scrapeIntervalSeconds?: number;
  /**
  * resource_discovery_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#resource_discovery_tag_filter CloudProviderAwsResourceMetadataScrapeJob#resource_discovery_tag_filter}
  */
  readonly resourceDiscoveryTagFilter?: CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable;
}

export function cloudProviderAwsResourceMetadataScrapeJobServiceToTerraform(struct?: CloudProviderAwsResourceMetadataScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scrape_interval_seconds: cdktf.numberToTerraform(struct!.scrapeIntervalSeconds),
    resource_discovery_tag_filter: cdktf.listMapper(cloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterToTerraform, true)(struct!.resourceDiscoveryTagFilter),
  }
}


export function cloudProviderAwsResourceMetadataScrapeJobServiceToHclTerraform(struct?: CloudProviderAwsResourceMetadataScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scrapeIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_discovery_tag_filter: {
      value: cdktf.listMapperHcl(cloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform, true)(struct!.resourceDiscoveryTagFilter),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAwsResourceMetadataScrapeJobServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsResourceMetadataScrapeJobService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scrapeIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeIntervalSeconds = this._scrapeIntervalSeconds;
    }
    if (this._resourceDiscoveryTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDiscoveryTagFilter = this._resourceDiscoveryTagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAwsResourceMetadataScrapeJobService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scrapeIntervalSeconds = undefined;
      this._resourceDiscoveryTagFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._scrapeIntervalSeconds = value.scrapeIntervalSeconds;
      this._resourceDiscoveryTagFilter.internalValue = value.resourceDiscoveryTagFilter;
    }
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

  // scrape_interval_seconds - computed: true, optional: true, required: false
  private _scrapeIntervalSeconds?: number; 
  public get scrapeIntervalSeconds() {
    return this.getNumberAttribute('scrape_interval_seconds');
  }
  public set scrapeIntervalSeconds(value: number) {
    this._scrapeIntervalSeconds = value;
  }
  public resetScrapeIntervalSeconds() {
    this._scrapeIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalSecondsInput() {
    return this._scrapeIntervalSeconds;
  }

  // resource_discovery_tag_filter - computed: false, optional: true, required: false
  private _resourceDiscoveryTagFilter = new CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilterList(this, "resource_discovery_tag_filter", false);
  public get resourceDiscoveryTagFilter() {
    return this._resourceDiscoveryTagFilter;
  }
  public putResourceDiscoveryTagFilter(value: CloudProviderAwsResourceMetadataScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable) {
    this._resourceDiscoveryTagFilter.internalValue = value;
  }
  public resetResourceDiscoveryTagFilter() {
    this._resourceDiscoveryTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDiscoveryTagFilterInput() {
    return this._resourceDiscoveryTagFilter.internalValue;
  }
}

export class CloudProviderAwsResourceMetadataScrapeJobServiceList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsResourceMetadataScrapeJobService[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsResourceMetadataScrapeJobServiceOutputReference {
    return new CloudProviderAwsResourceMetadataScrapeJobServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job grafana_cloud_provider_aws_resource_metadata_scrape_job}
*/
export class CloudProviderAwsResourceMetadataScrapeJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_aws_resource_metadata_scrape_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProviderAwsResourceMetadataScrapeJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProviderAwsResourceMetadataScrapeJob to import
  * @param importFromId The id of the existing CloudProviderAwsResourceMetadataScrapeJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProviderAwsResourceMetadataScrapeJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_aws_resource_metadata_scrape_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_resource_metadata_scrape_job grafana_cloud_provider_aws_resource_metadata_scrape_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderAwsResourceMetadataScrapeJobConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderAwsResourceMetadataScrapeJobConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_provider_aws_resource_metadata_scrape_job',
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
    this._awsAccountResourceId = config.awsAccountResourceId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._regionsSubsetOverride = config.regionsSubsetOverride;
    this._stackId = config.stackId;
    this._staticLabels = config.staticLabels;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_resource_id - computed: false, optional: false, required: true
  private _awsAccountResourceId?: string; 
  public get awsAccountResourceId() {
    return this.getStringAttribute('aws_account_resource_id');
  }
  public set awsAccountResourceId(value: string) {
    this._awsAccountResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountResourceIdInput() {
    return this._awsAccountResourceId;
  }

  // disabled_reason - computed: true, optional: false, required: false
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
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

  // regions_subset_override - computed: true, optional: true, required: false
  private _regionsSubsetOverride?: string[]; 
  public get regionsSubsetOverride() {
    return cdktf.Fn.tolist(this.getListAttribute('regions_subset_override'));
  }
  public set regionsSubsetOverride(value: string[]) {
    this._regionsSubsetOverride = value;
  }
  public resetRegionsSubsetOverride() {
    this._regionsSubsetOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsSubsetOverrideInput() {
    return this._regionsSubsetOverride;
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

  // static_labels - computed: true, optional: true, required: false
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

  // service - computed: false, optional: true, required: false
  private _service = new CloudProviderAwsResourceMetadataScrapeJobServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: CloudProviderAwsResourceMetadataScrapeJobService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_resource_id: cdktf.stringToTerraform(this._awsAccountResourceId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      regions_subset_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionsSubsetOverride),
      stack_id: cdktf.stringToTerraform(this._stackId),
      static_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._staticLabels),
      service: cdktf.listMapper(cloudProviderAwsResourceMetadataScrapeJobServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_resource_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountResourceId),
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
      regions_subset_override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionsSubsetOverride),
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
      service: {
        value: cdktf.listMapperHcl(cloudProviderAwsResourceMetadataScrapeJobServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProviderAwsResourceMetadataScrapeJobServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
