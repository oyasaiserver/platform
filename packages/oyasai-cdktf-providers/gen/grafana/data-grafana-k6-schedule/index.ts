// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaK6ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the load test to retrieve the schedule for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_schedule#load_test_id DataGrafanaK6Schedule#load_test_id}
  */
  readonly loadTestId: string;
}
export interface DataGrafanaK6ScheduleCron {
}

export function dataGrafanaK6ScheduleCronToTerraform(struct?: DataGrafanaK6ScheduleCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaK6ScheduleCronToHclTerraform(struct?: DataGrafanaK6ScheduleCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaK6ScheduleCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGrafanaK6ScheduleCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaK6ScheduleCron | cdktf.IResolvable | undefined) {
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

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}
export interface DataGrafanaK6ScheduleRecurrenceRule {
}

export function dataGrafanaK6ScheduleRecurrenceRuleToTerraform(struct?: DataGrafanaK6ScheduleRecurrenceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaK6ScheduleRecurrenceRuleToHclTerraform(struct?: DataGrafanaK6ScheduleRecurrenceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaK6ScheduleRecurrenceRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGrafanaK6ScheduleRecurrenceRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaK6ScheduleRecurrenceRule | cdktf.IResolvable | undefined) {
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

  // byday - computed: true, optional: false, required: false
  public get byday() {
    return this.getListAttribute('byday');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // until - computed: true, optional: false, required: false
  public get until() {
    return this.getStringAttribute('until');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_schedule grafana_k6_schedule}
*/
export class DataGrafanaK6Schedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_k6_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaK6Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaK6Schedule to import
  * @param importFromId The id of the existing DataGrafanaK6Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaK6Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_k6_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_schedule grafana_k6_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaK6ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaK6ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_k6_schedule',
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
    this._loadTestId = config.loadTestId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deactivated - computed: true, optional: false, required: false
  public get deactivated() {
    return this.getBooleanAttribute('deactivated');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_test_id - computed: false, optional: false, required: true
  private _loadTestId?: string; 
  public get loadTestId() {
    return this.getStringAttribute('load_test_id');
  }
  public set loadTestId(value: string) {
    this._loadTestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTestIdInput() {
    return this._loadTestId;
  }

  // next_run - computed: true, optional: false, required: false
  public get nextRun() {
    return this.getStringAttribute('next_run');
  }

  // starts - computed: true, optional: false, required: false
  public get starts() {
    return this.getStringAttribute('starts');
  }

  // cron - computed: false, optional: false, required: false
  private _cron = new DataGrafanaK6ScheduleCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }

  // recurrence_rule - computed: false, optional: false, required: false
  private _recurrenceRule = new DataGrafanaK6ScheduleRecurrenceRuleOutputReference(this, "recurrence_rule");
  public get recurrenceRule() {
    return this._recurrenceRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      load_test_id: cdktf.stringToTerraform(this._loadTestId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      load_test_id: {
        value: cdktf.stringToHclTerraform(this._loadTestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
