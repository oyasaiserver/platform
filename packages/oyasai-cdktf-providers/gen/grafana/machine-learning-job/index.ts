// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * An object representing the custom labels added on the forecast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#custom_labels MachineLearningJob#custom_labels}
  */
  readonly customLabels?: { [key: string]: string };
  /**
  * The type of datasource being queried. Currently allowed values are prometheus, grafana-prometheus-datasource, grafana-amazonprometheus-datasource, loki, grafana-loki-datasource, graphite, grafana-graphite-datasource, grafana-datadog-datasource, postgres, grafana-postgresql-datasource, doitintl-bigquery-datasource, grafana-bigquery-datasource, grafana-snowflake-datasource, influxdb, grafana-influxdb-datasource, grafana-splunk-datasource, elasticsearch, grafana-elasticsearch-datasource, and grafana-mongodb-datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#datasource_type MachineLearningJob#datasource_type}
  */
  readonly datasourceType: string;
  /**
  * The uid of the datasource to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#datasource_uid MachineLearningJob#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * A description of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#description MachineLearningJob#description}
  */
  readonly description?: string;
  /**
  * A list of holiday IDs or names to take into account when training the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#holidays MachineLearningJob#holidays}
  */
  readonly holidays?: string[];
  /**
  * The hyperparameters used to fine tune the algorithm. See https://grafana.com/docs/grafana-cloud/alerting-and-irm/machine-learning/forecasts/models/ for the full list of available hyperparameters. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#hyper_params MachineLearningJob#hyper_params}
  */
  readonly hyperParams?: { [key: string]: string };
  /**
  * The data interval in seconds to train the data on. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#interval MachineLearningJob#interval}
  */
  readonly interval?: number;
  /**
  * The metric used to query the job results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#metric MachineLearningJob#metric}
  */
  readonly metric: string;
  /**
  * The name of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#name MachineLearningJob#name}
  */
  readonly name: string;
  /**
  * An object representing the query params to query Grafana with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#query_params MachineLearningJob#query_params}
  */
  readonly queryParams: { [key: string]: string };
  /**
  * The data interval in seconds to train the data on. Defaults to `7776000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#training_window MachineLearningJob#training_window}
  */
  readonly trainingWindow?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job grafana_machine_learning_job}
*/
export class MachineLearningJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_machine_learning_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningJob to import
  * @param importFromId The id of the existing MachineLearningJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_machine_learning_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/machine_learning_job grafana_machine_learning_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningJobConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningJobConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_machine_learning_job',
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
    this._customLabels = config.customLabels;
    this._datasourceType = config.datasourceType;
    this._datasourceUid = config.datasourceUid;
    this._description = config.description;
    this._holidays = config.holidays;
    this._hyperParams = config.hyperParams;
    this._interval = config.interval;
    this._metric = config.metric;
    this._name = config.name;
    this._queryParams = config.queryParams;
    this._trainingWindow = config.trainingWindow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_labels - computed: false, optional: true, required: false
  private _customLabels?: { [key: string]: string }; 
  public get customLabels() {
    return this.getStringMapAttribute('custom_labels');
  }
  public set customLabels(value: { [key: string]: string }) {
    this._customLabels = value;
  }
  public resetCustomLabels() {
    this._customLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels;
  }

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

  // holidays - computed: false, optional: true, required: false
  private _holidays?: string[]; 
  public get holidays() {
    return this.getListAttribute('holidays');
  }
  public set holidays(value: string[]) {
    this._holidays = value;
  }
  public resetHolidays() {
    this._holidays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holidaysInput() {
    return this._holidays;
  }

  // hyper_params - computed: false, optional: true, required: false
  private _hyperParams?: { [key: string]: string }; 
  public get hyperParams() {
    return this.getStringMapAttribute('hyper_params');
  }
  public set hyperParams(value: { [key: string]: string }) {
    this._hyperParams = value;
  }
  public resetHyperParams() {
    this._hyperParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParamsInput() {
    return this._hyperParams;
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

  // training_window - computed: false, optional: true, required: false
  private _trainingWindow?: number; 
  public get trainingWindow() {
    return this.getNumberAttribute('training_window');
  }
  public set trainingWindow(value: number) {
    this._trainingWindow = value;
  }
  public resetTrainingWindow() {
    this._trainingWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingWindowInput() {
    return this._trainingWindow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._customLabels),
      datasource_type: cdktf.stringToTerraform(this._datasourceType),
      datasource_uid: cdktf.stringToTerraform(this._datasourceUid),
      description: cdktf.stringToTerraform(this._description),
      holidays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._holidays),
      hyper_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._hyperParams),
      interval: cdktf.numberToTerraform(this._interval),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      query_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._queryParams),
      training_window: cdktf.numberToTerraform(this._trainingWindow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      holidays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._holidays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hyper_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._hyperParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      training_window: {
        value: cdktf.numberToHclTerraform(this._trainingWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
