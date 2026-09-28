// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticMonitoringCheckAlertsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alerts for the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#alerts SyntheticMonitoringCheckAlerts#alerts}
  */
  readonly alerts: SyntheticMonitoringCheckAlertsAlerts[] | cdktf.IResolvable;
  /**
  * The ID of the check to manage alerts for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#check_id SyntheticMonitoringCheckAlerts#check_id}
  */
  readonly checkId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#id SyntheticMonitoringCheckAlerts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface SyntheticMonitoringCheckAlertsAlerts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#name SyntheticMonitoringCheckAlerts#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#period SyntheticMonitoringCheckAlerts#period}
  */
  readonly period: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#runbook_url SyntheticMonitoringCheckAlerts#runbook_url}
  */
  readonly runbookUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#threshold SyntheticMonitoringCheckAlerts#threshold}
  */
  readonly threshold: number;
}

export function syntheticMonitoringCheckAlertsAlertsToTerraform(struct?: SyntheticMonitoringCheckAlertsAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
    runbook_url: cdktf.stringToTerraform(struct!.runbookUrl),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function syntheticMonitoringCheckAlertsAlertsToHclTerraform(struct?: SyntheticMonitoringCheckAlertsAlerts | cdktf.IResolvable): any {
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_url: {
      value: cdktf.stringToHclTerraform(struct!.runbookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckAlertsAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckAlertsAlerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._runbookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookUrl = this._runbookUrl;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckAlertsAlerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._period = undefined;
      this._runbookUrl = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._period = value.period;
      this._runbookUrl = value.runbookUrl;
      this._threshold = value.threshold;
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

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // runbook_url - computed: false, optional: false, required: true
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class SyntheticMonitoringCheckAlertsAlertsList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckAlertsAlerts[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckAlertsAlertsOutputReference {
    return new SyntheticMonitoringCheckAlertsAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts grafana_synthetic_monitoring_check_alerts}
*/
export class SyntheticMonitoringCheckAlerts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_synthetic_monitoring_check_alerts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticMonitoringCheckAlerts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticMonitoringCheckAlerts to import
  * @param importFromId The id of the existing SyntheticMonitoringCheckAlerts that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticMonitoringCheckAlerts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_synthetic_monitoring_check_alerts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_check_alerts grafana_synthetic_monitoring_check_alerts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticMonitoringCheckAlertsConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticMonitoringCheckAlertsConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_synthetic_monitoring_check_alerts',
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
    this._alerts.internalValue = config.alerts;
    this._checkId = config.checkId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: false, optional: false, required: true
  private _alerts = new SyntheticMonitoringCheckAlertsAlertsList(this, "alerts", true);
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: SyntheticMonitoringCheckAlertsAlerts[] | cdktf.IResolvable) {
    this._alerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: number; 
  public get checkId() {
    return this.getNumberAttribute('check_id');
  }
  public set checkId(value: number) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts: cdktf.listMapper(syntheticMonitoringCheckAlertsAlertsToTerraform, false)(this._alerts.internalValue),
      check_id: cdktf.numberToTerraform(this._checkId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts: {
        value: cdktf.listMapperHcl(syntheticMonitoringCheckAlertsAlertsToHclTerraform, false)(this._alerts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticMonitoringCheckAlertsAlertsList",
      },
      check_id: {
        value: cdktf.numberToHclTerraform(this._checkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
