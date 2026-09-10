// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#stack_id DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#stack_id}
  */
  readonly stackId: string;
  /**
  * scrape_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#scrape_job DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#scrape_job}
  */
  readonly scrapeJob?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[] | cdktf.IResolvable;
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric {
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric | cdktf.IResolvable | undefined) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#metric}
  */
  readonly metric?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable;
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricToTerraform, true)(struct!.metric),
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace | cdktf.IResolvable | undefined) {
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
  private _metric = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceMetric[] | cdktf.IResolvable) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric {
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric | cdktf.IResolvable | undefined) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter {
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter | cdktf.IResolvable | undefined) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#metric DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#metric}
  */
  readonly metric?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[] | cdktf.IResolvable;
  /**
  * resource_discovery_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#resource_discovery_tag_filter DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#resource_discovery_tag_filter}
  */
  readonly resourceDiscoveryTagFilter?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable;
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricToTerraform, true)(struct!.metric),
    resource_discovery_tag_filter: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterToTerraform, true)(struct!.resourceDiscoveryTagFilter),
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList",
    },
    resource_discovery_tag_filter: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterToHclTerraform, true)(struct!.resourceDiscoveryTagFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService | cdktf.IResolvable | undefined) {
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
  private _metric = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceMetric[] | cdktf.IResolvable) {
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
  private _resourceDiscoveryTagFilter = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilterList(this, "resource_discovery_tag_filter", false);
  public get resourceDiscoveryTagFilter() {
    return this._resourceDiscoveryTagFilter;
  }
  public putResourceDiscoveryTagFilter(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceResourceDiscoveryTagFilter[] | cdktf.IResolvable) {
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

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob {
  /**
  * custom_namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#custom_namespace DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#custom_namespace}
  */
  readonly customNamespace?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#service DataGrafanaCloudProviderAwsCloudwatchScrapeJobs#service}
  */
  readonly service?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[] | cdktf.IResolvable;
}

export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobToTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_namespace: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceToTerraform, true)(struct!.customNamespace),
    service: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceToTerraform, true)(struct!.service),
  }
}


export function dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobToHclTerraform(struct?: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_namespace: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceToHclTerraform, true)(struct!.customNamespace),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList",
    },
    service: {
      value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNamespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNamespace = this._customNamespace?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNamespace.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNamespace.internalValue = value.customNamespace;
      this._service.internalValue = value.service;
    }
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // static_labels - computed: true, optional: false, required: false
  private _staticLabels = new cdktf.StringMap(this, "static_labels");
  public get staticLabels() {
    return this._staticLabels;
  }

  // custom_namespace - computed: false, optional: true, required: false
  private _customNamespace = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespaceList(this, "custom_namespace", false);
  public get customNamespace() {
    return this._customNamespace;
  }
  public putCustomNamespace(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobCustomNamespace[] | cdktf.IResolvable) {
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
  private _service = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList extends cdktf.ComplexList {
  public internalValue? : DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[] | cdktf.IResolvable

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
  public get(index: number): DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference {
    return new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs grafana_cloud_provider_aws_cloudwatch_scrape_jobs}
*/
export class DataGrafanaCloudProviderAwsCloudwatchScrapeJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_aws_cloudwatch_scrape_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudProviderAwsCloudwatchScrapeJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudProviderAwsCloudwatchScrapeJobs to import
  * @param importFromId The id of the existing DataGrafanaCloudProviderAwsCloudwatchScrapeJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudProviderAwsCloudwatchScrapeJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_aws_cloudwatch_scrape_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_provider_aws_cloudwatch_scrape_jobs grafana_cloud_provider_aws_cloudwatch_scrape_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_provider_aws_cloudwatch_scrape_jobs',
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
    this._stackId = config.stackId;
    this._scrapeJob.internalValue = config.scrapeJob;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scrape_job - computed: false, optional: true, required: false
  private _scrapeJob = new DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList(this, "scrape_job", false);
  public get scrapeJob() {
    return this._scrapeJob;
  }
  public putScrapeJob(value: DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJob[] | cdktf.IResolvable) {
    this._scrapeJob.internalValue = value;
  }
  public resetScrapeJob() {
    this._scrapeJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeJobInput() {
    return this._scrapeJob.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      stack_id: cdktf.stringToTerraform(this._stackId),
      scrape_job: cdktf.listMapper(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobToTerraform, true)(this._scrapeJob.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_job: {
        value: cdktf.listMapperHcl(dataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobToHclTerraform, true)(this._scrapeJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGrafanaCloudProviderAwsCloudwatchScrapeJobsScrapeJobList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
