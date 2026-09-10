// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the AWS CloudWatch Scrape Job. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#name DataGrafanaCloudProviderAwsCloudwatchScrapeJob#name}
  */
  readonly name: string;
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#stack_id DataGrafanaCloudProviderAwsCloudwatchScrapeJob#stack_id}
  */
  readonly stackId: string;
  /**
  * custom_namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#custom_namespace DataGrafanaCloudProviderAwsCloudwatchScrapeJob#custom_namespace}
  */
  readonly customNamespace?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#service DataGrafanaCloudProviderAwsCloudwatchScrapeJob#service}
  */
  readonly service?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[] | cdktf.IResolvable;
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric {
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // statistics - computed: true, optional: false, required: false
  public get statistics() {
    return cdktf.Fn.tolist(this.getListAttribute('statistics'));
  }
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJob#metric}
  */
  readonly metric?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable;
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToTerraform, true)(struct!.metric),
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scrape_interval_seconds - computed: true, optional: false, required: false
  public get scrapeIntervalSeconds() {
    return this.getNumberAttribute('scrape_interval_seconds');
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric {
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // statistics - computed: true, optional: false, required: false
  public get statistics() {
    return cdktf.Fn.tolist(this.getListAttribute('statistics'));
  }
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter {
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobService {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJob#metric}
  */
  readonly metric?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[] | cdktf.IResolvable;
  /**
  * resource_discovery_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#resource_discovery_tag_filter DataGrafanaCloudProviderAwsCloudwatchScrapeJob#resource_discovery_tag_filter}
  */
  readonly resourceDiscoveryTagFilter?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable;
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricToTerraform, true)(struct!.metric),
    resource_discovery_tag_filter: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToTerraform, true)(struct!.resourceDiscoveryTagFilter),
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList",
    },
    resource_discovery_tag_filter: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform, true)(struct!.resourceDiscoveryTagFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._metric.internalValue = value.metric;
      this._resourceDiscoveryTagFilter.internalValue = value.resourceDiscoveryTagFilter;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scrape_interval_seconds - computed: true, optional: false, required: false
  public get scrapeIntervalSeconds() {
    return this.getNumberAttribute('scrape_interval_seconds');
  }

  // tags_to_add_to_metrics - computed: true, optional: false, required: false
  public get tagsToAddToMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_to_add_to_metrics'));
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceMetric[] | cdktf.IResolvable) {
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
  private _resourceDiscoveryTagFilter = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilterList(this, "resource_discovery_tag_filter", false);
  public get resourceDiscoveryTagFilter() {
    return this._resourceDiscoveryTagFilter;
  }
  public putResourceDiscoveryTagFilter(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job grafana_cloud_provider_aws_cloudwatch_scrape_job}
*/
export class DataGrafanaCloudProviderAwsCloudwatchScrapeJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_aws_cloudwatch_scrape_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudProviderAwsCloudwatchScrapeJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudProviderAwsCloudwatchScrapeJob to import
  * @param importFromId The id of the existing DataGrafanaCloudProviderAwsCloudwatchScrapeJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudProviderAwsCloudwatchScrapeJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_aws_cloudwatch_scrape_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_job grafana_cloud_provider_aws_cloudwatch_scrape_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudProviderAwsCloudwatchScrapeJobConfig) {
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
    this._name = config.name;
    this._stackId = config.stackId;
    this._customNamespace.internalValue = config.customNamespace;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_resource_id - computed: true, optional: false, required: false
  public get awsAccountResourceId() {
    return this.getStringAttribute('aws_account_resource_id');
  }

  // disabled_reason - computed: true, optional: false, required: false
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // export_tags - computed: true, optional: false, required: false
  public get exportTags() {
    return this.getBooleanAttribute('export_tags');
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

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // regions_subset_override_used - computed: true, optional: false, required: false
  public get regionsSubsetOverrideUsed() {
    return this.getBooleanAttribute('regions_subset_override_used');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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

  // custom_namespace - computed: false, optional: true, required: false
  private _customNamespace = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList(this, "custom_namespace", false);
  public get customNamespace() {
    return this._customNamespace;
  }
  public putCustomNamespace(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespace[] | cdktf.IResolvable) {
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
  private _service = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobService[] | cdktf.IResolvable) {
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
      name: cdktf.stringToTerraform(this._name),
      stack_id: cdktf.stringToTerraform(this._stackId),
      custom_namespace: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceToTerraform, true)(this._customNamespace.internalValue),
      service: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      custom_namespace: {
        value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceToHclTerraform, true)(this._customNamespace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobCustomNamespaceList",
      },
      service: {
        value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
