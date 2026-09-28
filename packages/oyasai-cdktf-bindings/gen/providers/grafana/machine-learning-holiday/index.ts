// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningHolidayConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the holiday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#description MachineLearningHoliday#description}
  */
  readonly description?: string;
  /**
  * The timezone to use for events in the iCal file pointed to by ical_url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#ical_timezone MachineLearningHoliday#ical_timezone}
  */
  readonly icalTimezone?: string;
  /**
  * A URL to an iCal file containing all occurrences of the holiday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#ical_url MachineLearningHoliday#ical_url}
  */
  readonly icalUrl?: string;
  /**
  * The name of the holiday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#name MachineLearningHoliday#name}
  */
  readonly name: string;
  /**
  * custom_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#custom_periods MachineLearningHoliday#custom_periods}
  */
  readonly customPeriods?: MachineLearningHolidayCustomPeriods[] | cdktf.IResolvable;
}
export interface MachineLearningHolidayCustomPeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#end_time MachineLearningHoliday#end_time}
  */
  readonly endTime: string;
  /**
  * The name of the custom period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#name MachineLearningHoliday#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#start_time MachineLearningHoliday#start_time}
  */
  readonly startTime: string;
}

export function machineLearningHolidayCustomPeriodsToTerraform(struct?: MachineLearningHolidayCustomPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function machineLearningHolidayCustomPeriodsToHclTerraform(struct?: MachineLearningHolidayCustomPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningHolidayCustomPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineLearningHolidayCustomPeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningHolidayCustomPeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._name = value.name;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class MachineLearningHolidayCustomPeriodsList extends cdktf.ComplexList {
  public internalValue? : MachineLearningHolidayCustomPeriods[] | cdktf.IResolvable

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
  public get(index: number): MachineLearningHolidayCustomPeriodsOutputReference {
    return new MachineLearningHolidayCustomPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday grafana_machine_learning_holiday}
*/
export class MachineLearningHoliday extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_machine_learning_holiday";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningHoliday resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningHoliday to import
  * @param importFromId The id of the existing MachineLearningHoliday that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningHoliday to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_machine_learning_holiday", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/machine_learning_holiday grafana_machine_learning_holiday} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningHolidayConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningHolidayConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_machine_learning_holiday',
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
    this._description = config.description;
    this._icalTimezone = config.icalTimezone;
    this._icalUrl = config.icalUrl;
    this._name = config.name;
    this._customPeriods.internalValue = config.customPeriods;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ical_timezone - computed: false, optional: true, required: false
  private _icalTimezone?: string; 
  public get icalTimezone() {
    return this.getStringAttribute('ical_timezone');
  }
  public set icalTimezone(value: string) {
    this._icalTimezone = value;
  }
  public resetIcalTimezone() {
    this._icalTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icalTimezoneInput() {
    return this._icalTimezone;
  }

  // ical_url - computed: false, optional: true, required: false
  private _icalUrl?: string; 
  public get icalUrl() {
    return this.getStringAttribute('ical_url');
  }
  public set icalUrl(value: string) {
    this._icalUrl = value;
  }
  public resetIcalUrl() {
    this._icalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icalUrlInput() {
    return this._icalUrl;
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

  // custom_periods - computed: false, optional: true, required: false
  private _customPeriods = new MachineLearningHolidayCustomPeriodsList(this, "custom_periods", false);
  public get customPeriods() {
    return this._customPeriods;
  }
  public putCustomPeriods(value: MachineLearningHolidayCustomPeriods[] | cdktf.IResolvable) {
    this._customPeriods.internalValue = value;
  }
  public resetCustomPeriods() {
    this._customPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPeriodsInput() {
    return this._customPeriods.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ical_timezone: cdktf.stringToTerraform(this._icalTimezone),
      ical_url: cdktf.stringToTerraform(this._icalUrl),
      name: cdktf.stringToTerraform(this._name),
      custom_periods: cdktf.listMapper(machineLearningHolidayCustomPeriodsToTerraform, true)(this._customPeriods.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ical_timezone: {
        value: cdktf.stringToHclTerraform(this._icalTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ical_url: {
        value: cdktf.stringToHclTerraform(this._icalUrl),
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
      custom_periods: {
        value: cdktf.listMapperHcl(machineLearningHolidayCustomPeriodsToHclTerraform, true)(this._customPeriods.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningHolidayCustomPeriodsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
