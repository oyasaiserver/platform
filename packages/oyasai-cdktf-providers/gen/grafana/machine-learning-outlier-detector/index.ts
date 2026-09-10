// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningOutlierDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of datasource being queried. Currently allowed values are prometheus, grafana-prometheus-datasource, grafana-amazonprometheus-datasource, loki, grafana-loki-datasource, graphite, grafana-graphite-datasource, grafana-datadog-datasource, postgres, grafana-postgresql-datasource, doitintl-bigquery-datasource, grafana-bigquery-datasource, grafana-snowflake-datasource, influxdb, grafana-influxdb-datasource, grafana-splunk-datasource, elasticsearch, grafana-elasticsearch-datasource, and grafana-mongodb-datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#datasource_type MachineLearningOutlierDetector#datasource_type}
  */
  readonly datasourceType: string;
  /**
  * The uid of the datasource to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#datasource_uid MachineLearningOutlierDetector#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * A description of the outlier detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#description MachineLearningOutlierDetector#description}
  */
  readonly description?: string;
  /**
  * The data interval in seconds to monitor. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#interval MachineLearningOutlierDetector#interval}
  */
  readonly interval?: number;
  /**
  * The metric used to query the outlier detector results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#metric MachineLearningOutlierDetector#metric}
  */
  readonly metric: string;
  /**
  * The name of the outlier detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#name MachineLearningOutlierDetector#name}
  */
  readonly name: string;
  /**
  * An object representing the query params to query Grafana with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#query_params MachineLearningOutlierDetector#query_params}
  */
  readonly queryParams: { [key: string]: string };
  /**
  * algorithm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#algorithm MachineLearningOutlierDetector#algorithm}
  */
  readonly algorithm: MachineLearningOutlierDetectorAlgorithm;
}
export interface MachineLearningOutlierDetectorAlgorithmConfig {
  /**
  * Specify the epsilon parameter (positive float)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#epsilon MachineLearningOutlierDetector#epsilon}
  */
  readonly epsilon: number;
}

export function machineLearningOutlierDetectorAlgorithmConfigToTerraform(struct?: MachineLearningOutlierDetectorAlgorithmConfigOutputReference | MachineLearningOutlierDetectorAlgorithmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epsilon: cdktf.numberToTerraform(struct!.epsilon),
  }
}


export function machineLearningOutlierDetectorAlgorithmConfigToHclTerraform(struct?: MachineLearningOutlierDetectorAlgorithmConfigOutputReference | MachineLearningOutlierDetectorAlgorithmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epsilon: {
      value: cdktf.numberToHclTerraform(struct!.epsilon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningOutlierDetectorAlgorithmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningOutlierDetectorAlgorithmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epsilon !== undefined) {
      hasAnyValues = true;
      internalValueResult.epsilon = this._epsilon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningOutlierDetectorAlgorithmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epsilon = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epsilon = value.epsilon;
    }
  }

  // epsilon - computed: false, optional: false, required: true
  private _epsilon?: number; 
  public get epsilon() {
    return this.getNumberAttribute('epsilon');
  }
  public set epsilon(value: number) {
    this._epsilon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epsilonInput() {
    return this._epsilon;
  }
}
export interface MachineLearningOutlierDetectorAlgorithm {
  /**
  * The name of the algorithm to use ('mad' or 'dbscan').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#name MachineLearningOutlierDetector#name}
  */
  readonly name: string;
  /**
  * Specify the sensitivity of the detector (in range [0,1]).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#sensitivity MachineLearningOutlierDetector#sensitivity}
  */
  readonly sensitivity: number;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#config MachineLearningOutlierDetector#config}
  */
  readonly config?: MachineLearningOutlierDetectorAlgorithmConfig;
}

export function machineLearningOutlierDetectorAlgorithmToTerraform(struct?: MachineLearningOutlierDetectorAlgorithmOutputReference | MachineLearningOutlierDetectorAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sensitivity: cdktf.numberToTerraform(struct!.sensitivity),
    config: machineLearningOutlierDetectorAlgorithmConfigToTerraform(struct!.config),
  }
}


export function machineLearningOutlierDetectorAlgorithmToHclTerraform(struct?: MachineLearningOutlierDetectorAlgorithmOutputReference | MachineLearningOutlierDetectorAlgorithm): any {
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
    sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: machineLearningOutlierDetectorAlgorithmConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "set",
      storageClassType: "MachineLearningOutlierDetectorAlgorithmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningOutlierDetectorAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningOutlierDetectorAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningOutlierDetectorAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sensitivity = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sensitivity = value.sensitivity;
      this._config.internalValue = value.config;
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

  // sensitivity - computed: false, optional: false, required: true
  private _sensitivity?: number; 
  public get sensitivity() {
    return this.getNumberAttribute('sensitivity');
  }
  public set sensitivity(value: number) {
    this._sensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // config - computed: false, optional: true, required: false
  private _config = new MachineLearningOutlierDetectorAlgorithmConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MachineLearningOutlierDetectorAlgorithmConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector grafana_machine_learning_outlier_detector}
*/
export class MachineLearningOutlierDetector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_machine_learning_outlier_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningOutlierDetector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningOutlierDetector to import
  * @param importFromId The id of the existing MachineLearningOutlierDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningOutlierDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_machine_learning_outlier_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_outlier_detector grafana_machine_learning_outlier_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningOutlierDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningOutlierDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_machine_learning_outlier_detector',
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
    this._datasourceType = config.datasourceType;
    this._datasourceUid = config.datasourceUid;
    this._description = config.description;
    this._interval = config.interval;
    this._metric = config.metric;
    this._name = config.name;
    this._queryParams = config.queryParams;
    this._algorithm.internalValue = config.algorithm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasource_type - computed: false, optional: false, required: true
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // query_params - computed: false, optional: false, required: true
  private _queryParams?: { [key: string]: string }; 
  public get queryParams() {
    return this.getStringMapAttribute('query_params');
  }
  public set queryParams(value: { [key: string]: string }) {
    this._queryParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm = new MachineLearningOutlierDetectorAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: MachineLearningOutlierDetectorAlgorithm) {
    this._algorithm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datasource_type: cdktf.stringToTerraform(this._datasourceType),
      datasource_uid: cdktf.stringToTerraform(this._datasourceUid),
      description: cdktf.stringToTerraform(this._description),
      interval: cdktf.numberToTerraform(this._interval),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      query_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._queryParams),
      algorithm: machineLearningOutlierDetectorAlgorithmToTerraform(this._algorithm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource_type: {
        value: cdktf.stringToHclTerraform(this._datasourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasource_uid: {
        value: cdktf.stringToHclTerraform(this._datasourceUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      query_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._queryParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      algorithm: {
        value: machineLearningOutlierDetectorAlgorithmToHclTerraform(this._algorithm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineLearningOutlierDetectorAlgorithmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
