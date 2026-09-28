// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAwsCloudwatchScrapeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID assigned by the Grafana Cloud Provider API to an AWS Account resource that should be associated with this CloudWatch Scrape Job. This can be provided by the `resource_id` attribute of the `grafana_cloud_provider_aws_account` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#aws_account_resource_id CloudProviderAwsCloudwatchScrapeJob#aws_account_resource_id}
  */
  readonly awsAccountResourceId: string;
  /**
  * Whether the AWS CloudWatch Scrape Job is enabled or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#enabled CloudProviderAwsCloudwatchScrapeJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, AWS resource tags are exported as Prometheus labels to metrics formatted as `aws_<service_name>_info`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#export_tags CloudProviderAwsCloudwatchScrapeJob#export_tags}
  */
  readonly exportTags?: boolean | cdktf.IResolvable;
  /**
  * The name of the AWS CloudWatch Scrape Job. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}
  */
  readonly name: string;
  /**
  * A subset of the regions that are configured in the associated AWS Account resource to apply to this scrape job. If not set or empty, all of the Account resource's regions are scraped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#regions_subset_override CloudProviderAwsCloudwatchScrapeJob#regions_subset_override}
  */
  readonly regionsSubsetOverride?: string[];
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#stack_id CloudProviderAwsCloudwatchScrapeJob#stack_id}
  */
  readonly stackId: string;
  /**
  * A set of static labels to add to all metrics exported by this scrape job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#static_labels CloudProviderAwsCloudwatchScrapeJob#static_labels}
  */
  readonly staticLabels?: { [key: string]: string };
  /**
  * custom_namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#custom_namespace CloudProviderAwsCloudwatchScrapeJob#custom_namespace}
  */
  readonly customNamespace?: CloudProviderAwsCloudwatchScrapeJobCustomNamespace[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#service CloudProviderAwsCloudwatchScrapeJob#service}
  */
  readonly service?: CloudProviderAwsCloudwatchScrapeJobService[] | cdktf.IResolvable;
}
export interface CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric {
  /**
  * The name of the metric to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}
  */
  readonly name: string;
  /**
  * A set of statistics to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#statistics CloudProviderAwsCloudwatchScrapeJob#statistics}
  */
  readonly statistics: string[];
}

export function cloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    statistics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statistics),
  }
}


export function cloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToHclTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable): any {
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
    statistics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statistics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._statistics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._statistics = value.statistics;
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

  // statistics - computed: false, optional: false, required: true
  private _statistics?: string[]; 
  public get statistics() {
    return cdktf.Fn.tolist(this.getListAttribute('statistics'));
  }
  public set statistics(value: string[]) {
    this._statistics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }
}

export class CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference {
    return new CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAwsCloudwatchScrapeJobCustomNamespace {
  /**
  * The name of the custom namespace to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}
  */
  readonly name: string;
  /**
  * The interval in seconds to scrape the custom namespace. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#scrape_interval_seconds CloudProviderAwsCloudwatchScrapeJob#scrape_interval_seconds}
  */
  readonly scrapeIntervalSeconds?: number;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#metric CloudProviderAwsCloudwatchScrapeJob#metric}
  */
  readonly metric?: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable;
}

export function cloudProviderAwsCloudwatchScrapeJobCustomNamespaceToTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scrape_interval_seconds: cdktf.numberToTerraform(struct!.scrapeIntervalSeconds),
    metric: cdktf.listMapper(cloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToTerraform, true)(struct!.metric),
  }
}


export function cloudProviderAwsCloudwatchScrapeJobCustomNamespaceToHclTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable): any {
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
    metric: {
      value: cdktf.listMapperHcl(cloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable | undefined {
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
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scrapeIntervalSeconds = undefined;
      this._metric.internalValue = undefined;
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
      this._metric.internalValue = value.metric;
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

  // metric - computed: false, optional: true, required: false
  private _metric = new CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsCloudwatchScrapeJobCustomNamespace[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference {
    return new CloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAwsCloudwatchScrapeJobServiceMetric {
  /**
  * The name of the metric to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}
  */
  readonly name: string;
  /**
  * A set of statistics to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#statistics CloudProviderAwsCloudwatchScrapeJob#statistics}
  */
  readonly statistics: string[];
}

export function cloudProviderAwsCloudwatchScrapeJobServiceMetricToTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    statistics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statistics),
  }
}


export function cloudProviderAwsCloudwatchScrapeJobServiceMetricToHclTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable): any {
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
    statistics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statistics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._statistics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._statistics = value.statistics;
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

  // statistics - computed: false, optional: false, required: true
  private _statistics?: string[]; 
  public get statistics() {
    return cdktf.Fn.tolist(this.getListAttribute('statistics'));
  }
  public set statistics(value: string[]) {
    this._statistics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }
}

export class CloudProviderAwsCloudwatchScrapeJobServiceMetricList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsCloudwatchScrapeJobServiceMetric[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference {
    return new CloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter {
  /**
  * The key of the tag filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#key CloudProviderAwsCloudwatchScrapeJob#key}
  */
  readonly key: string;
  /**
  * The value of the tag filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#value CloudProviderAwsCloudwatchScrapeJob#value}
  */
  readonly value: string;
}

export function cloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
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

export class CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined) {
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

export class CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference {
    return new CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAwsCloudwatchScrapeJobService {
  /**
  * The name of the service to scrape. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/monitor-cloud-provider/aws/cloudwatch-metrics/services/ for supported services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#name CloudProviderAwsCloudwatchScrapeJob#name}
  */
  readonly name: string;
  /**
  * The interval in seconds to scrape the service. See https://grafana.com/docs/grafana-cloud/monitor-infrastructure/monitor-cloud-provider/aws/cloudwatch-metrics/services/ for supported scrape intervals. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#scrape_interval_seconds CloudProviderAwsCloudwatchScrapeJob#scrape_interval_seconds}
  */
  readonly scrapeIntervalSeconds?: number;
  /**
  * A set of tags to add to all metrics exported by this scrape job, for use in PromQL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#tags_to_add_to_metrics CloudProviderAwsCloudwatchScrapeJob#tags_to_add_to_metrics}
  */
  readonly tagsToAddToMetrics?: string[];
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#metric CloudProviderAwsCloudwatchScrapeJob#metric}
  */
  readonly metric?: CloudProviderAwsCloudwatchScrapeJobServiceMetric[] | cdktf.IResolvable;
  /**
  * resource_discovery_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#resource_discovery_tag_filter CloudProviderAwsCloudwatchScrapeJob#resource_discovery_tag_filter}
  */
  readonly resourceDiscoveryTagFilter?: CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable;
}

export function cloudProviderAwsCloudwatchScrapeJobServiceToTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scrape_interval_seconds: cdktf.numberToTerraform(struct!.scrapeIntervalSeconds),
    tags_to_add_to_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagsToAddToMetrics),
    metric: cdktf.listMapper(cloudProviderAwsCloudwatchScrapeJobServiceMetricToTerraform, true)(struct!.metric),
    resource_discovery_tag_filter: cdktf.listMapper(cloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToTerraform, true)(struct!.resourceDiscoveryTagFilter),
  }
}


export function cloudProviderAwsCloudwatchScrapeJobServiceToHclTerraform(struct?: CloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable): any {
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
    tags_to_add_to_metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagsToAddToMetrics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    metric: {
      value: cdktf.listMapperHcl(cloudProviderAwsCloudwatchScrapeJobServiceMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProviderAwsCloudwatchScrapeJobServiceMetricList",
    },
    resource_discovery_tag_filter: {
      value: cdktf.listMapperHcl(cloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform, true)(struct!.resourceDiscoveryTagFilter),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProviderAwsCloudwatchScrapeJobServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable | undefined {
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
    if (this._tagsToAddToMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsToAddToMetrics = this._tagsToAddToMetrics;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._resourceDiscoveryTagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDiscoveryTagFilter = this._resourceDiscoveryTagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scrapeIntervalSeconds = undefined;
      this._tagsToAddToMetrics = undefined;
      this._metric.internalValue = undefined;
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
      this._tagsToAddToMetrics = value.tagsToAddToMetrics;
      this._metric.internalValue = value.metric;
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

  // tags_to_add_to_metrics - computed: true, optional: true, required: false
  private _tagsToAddToMetrics?: string[]; 
  public get tagsToAddToMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_to_add_to_metrics'));
  }
  public set tagsToAddToMetrics(value: string[]) {
    this._tagsToAddToMetrics = value;
  }
  public resetTagsToAddToMetrics() {
    this._tagsToAddToMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToAddToMetricsInput() {
    return this._tagsToAddToMetrics;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new CloudProviderAwsCloudwatchScrapeJobServiceMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CloudProviderAwsCloudwatchScrapeJobServiceMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // resource_discovery_tag_filter - computed: false, optional: true, required: false
  private _resourceDiscoveryTagFilter = new CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList(this, "resource_discovery_tag_filter", false);
  public get resourceDiscoveryTagFilter() {
    return this._resourceDiscoveryTagFilter;
  }
  public putResourceDiscoveryTagFilter(value: CloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable) {
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

export class CloudProviderAwsCloudwatchScrapeJobServiceList extends cdktf.ComplexList {
  public internalValue? : CloudProviderAwsCloudwatchScrapeJobService[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderAwsCloudwatchScrapeJobServiceOutputReference {
    return new CloudProviderAwsCloudwatchScrapeJobServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job grafana_cloud_provider_aws_cloudwatch_scrape_job}
*/
export class CloudProviderAwsCloudwatchScrapeJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_aws_cloudwatch_scrape_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProviderAwsCloudwatchScrapeJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProviderAwsCloudwatchScrapeJob to import
  * @param importFromId The id of the existing CloudProviderAwsCloudwatchScrapeJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProviderAwsCloudwatchScrapeJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_aws_cloudwatch_scrape_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_cloudwatch_scrape_job grafana_cloud_provider_aws_cloudwatch_scrape_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderAwsCloudwatchScrapeJobConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderAwsCloudwatchScrapeJobConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_provider_aws_cloudwatch_scrape_job',
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
    this._exportTags = config.exportTags;
    this._name = config.name;
    this._regionsSubsetOverride = config.regionsSubsetOverride;
    this._stackId = config.stackId;
    this._staticLabels = config.staticLabels;
    this._customNamespace.internalValue = config.customNamespace;
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

  // export_tags - computed: true, optional: true, required: false
  private _exportTags?: boolean | cdktf.IResolvable; 
  public get exportTags() {
    return this.getBooleanAttribute('export_tags');
  }
  public set exportTags(value: boolean | cdktf.IResolvable) {
    this._exportTags = value;
  }
  public resetExportTags() {
    this._exportTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTagsInput() {
    return this._exportTags;
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

  // custom_namespace - computed: false, optional: true, required: false
  private _customNamespace = new CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList(this, "custom_namespace", false);
  public get customNamespace() {
    return this._customNamespace;
  }
  public putCustomNamespace(value: CloudProviderAwsCloudwatchScrapeJobCustomNamespace[] | cdktf.IResolvable) {
    this._customNamespace.internalValue = value;
  }
  public resetCustomNamespace() {
    this._customNamespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNamespaceInput() {
    return this._customNamespace.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new CloudProviderAwsCloudwatchScrapeJobServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: CloudProviderAwsCloudwatchScrapeJobService[] | cdktf.IResolvable) {
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
      export_tags: cdktf.booleanToTerraform(this._exportTags),
      name: cdktf.stringToTerraform(this._name),
      regions_subset_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionsSubsetOverride),
      stack_id: cdktf.stringToTerraform(this._stackId),
      static_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._staticLabels),
      custom_namespace: cdktf.listMapper(cloudProviderAwsCloudwatchScrapeJobCustomNamespaceToTerraform, true)(this._customNamespace.internalValue),
      service: cdktf.listMapper(cloudProviderAwsCloudwatchScrapeJobServiceToTerraform, true)(this._service.internalValue),
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
      export_tags: {
        value: cdktf.booleanToHclTerraform(this._exportTags),
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
      custom_namespace: {
        value: cdktf.listMapperHcl(cloudProviderAwsCloudwatchScrapeJobCustomNamespaceToHclTerraform, true)(this._customNamespace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProviderAwsCloudwatchScrapeJobCustomNamespaceList",
      },
      service: {
        value: cdktf.listMapperHcl(cloudProviderAwsCloudwatchScrapeJobServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProviderAwsCloudwatchScrapeJobServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
