// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations to add to the alert generated in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#annotations MachineLearningAlert#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The condition for when to consider a point as anomalous.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#anomaly_condition MachineLearningAlert#anomaly_condition}
  */
  readonly anomalyCondition?: string;
  /**
  * How long values must be anomalous before firing an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#for MachineLearningAlert#for}
  */
  readonly for?: string;
  /**
  * The forecast this alert belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#job_id MachineLearningAlert#job_id}
  */
  readonly jobId?: string;
  /**
  * Labels to add to the alert generated in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#labels MachineLearningAlert#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * How the alert should be processed when no data is returned by the underlying series
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#no_data_state MachineLearningAlert#no_data_state}
  */
  readonly noDataState?: string;
  /**
  * The forecast this alert belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#outlier_id MachineLearningAlert#outlier_id}
  */
  readonly outlierId?: string;
  /**
  * The threshold of points over the window that need to be anomalous to alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#threshold MachineLearningAlert#threshold}
  */
  readonly threshold?: string;
  /**
  * The title of the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#title MachineLearningAlert#title}
  */
  readonly title: string;
  /**
  * How much time to average values over
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#window MachineLearningAlert#window}
  */
  readonly window?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert grafana_machine_learning_alert}
*/
export class MachineLearningAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_machine_learning_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningAlert to import
  * @param importFromId The id of the existing MachineLearningAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_machine_learning_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_alert grafana_machine_learning_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_machine_learning_alert',
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
    this._annotations = config.annotations;
    this._anomalyCondition = config.anomalyCondition;
    this._for = config.for;
    this._jobId = config.jobId;
    this._labels = config.labels;
    this._noDataState = config.noDataState;
    this._outlierId = config.outlierId;
    this._threshold = config.threshold;
    this._title = config.title;
    this._window = config.window;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // anomaly_condition - computed: false, optional: true, required: false
  private _anomalyCondition?: string; 
  public get anomalyCondition() {
    return this.getStringAttribute('anomaly_condition');
  }
  public set anomalyCondition(value: string) {
    this._anomalyCondition = value;
  }
  public resetAnomalyCondition() {
    this._anomalyCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyConditionInput() {
    return this._anomalyCondition;
  }

  // for - computed: true, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // no_data_state - computed: false, optional: true, required: false
  private _noDataState?: string; 
  public get noDataState() {
    return this.getStringAttribute('no_data_state');
  }
  public set noDataState(value: string) {
    this._noDataState = value;
  }
  public resetNoDataState() {
    this._noDataState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataStateInput() {
    return this._noDataState;
  }

  // outlier_id - computed: false, optional: true, required: false
  private _outlierId?: string; 
  public get outlierId() {
    return this.getStringAttribute('outlier_id');
  }
  public set outlierId(value: string) {
    this._outlierId = value;
  }
  public resetOutlierId() {
    this._outlierId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierIdInput() {
    return this._outlierId;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // window - computed: true, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      anomaly_condition: cdktf.stringToTerraform(this._anomalyCondition),
      for: cdktf.stringToTerraform(this._for),
      job_id: cdktf.stringToTerraform(this._jobId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      no_data_state: cdktf.stringToTerraform(this._noDataState),
      outlier_id: cdktf.stringToTerraform(this._outlierId),
      threshold: cdktf.stringToTerraform(this._threshold),
      title: cdktf.stringToTerraform(this._title),
      window: cdktf.stringToTerraform(this._window),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      anomaly_condition: {
        value: cdktf.stringToHclTerraform(this._anomalyCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      for: {
        value: cdktf.stringToHclTerraform(this._for),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      no_data_state: {
        value: cdktf.stringToHclTerraform(this._noDataState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outlier_id: {
        value: cdktf.stringToHclTerraform(this._outlierId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.stringToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window: {
        value: cdktf.stringToHclTerraform(this._window),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
