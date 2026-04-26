// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function observatoryScheduledTestScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestScheduleOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // frequency - computed: true, optional: false, required: false
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export function observatoryScheduledTestTestDesktopReportErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestTestDesktopReportErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestTestDesktopReportErrorOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // code - computed: true, optional: false, required: false
    get code() {
        return this.getStringAttribute('code');
    }
    // detail - computed: true, optional: false, required: false
    get detail() {
        return this.getStringAttribute('detail');
    }
    // final_displayed_url - computed: true, optional: false, required: false
    get finalDisplayedUrl() {
        return this.getStringAttribute('final_displayed_url');
    }
}
export function observatoryScheduledTestTestDesktopReportToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestTestDesktopReportToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestTestDesktopReportOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // cls - computed: true, optional: false, required: false
    get cls() {
        return this.getNumberAttribute('cls');
    }
    // device_type - computed: true, optional: false, required: false
    get deviceType() {
        return this.getStringAttribute('device_type');
    }
    // error - computed: true, optional: false, required: false
    _error = new ObservatoryScheduledTestTestDesktopReportErrorOutputReference(this, "error");
    get error() {
        return this._error;
    }
    // fcp - computed: true, optional: false, required: false
    get fcp() {
        return this.getNumberAttribute('fcp');
    }
    // json_report_url - computed: true, optional: false, required: false
    get jsonReportUrl() {
        return this.getStringAttribute('json_report_url');
    }
    // lcp - computed: true, optional: false, required: false
    get lcp() {
        return this.getNumberAttribute('lcp');
    }
    // performance_score - computed: true, optional: false, required: false
    get performanceScore() {
        return this.getNumberAttribute('performance_score');
    }
    // si - computed: true, optional: false, required: false
    get si() {
        return this.getNumberAttribute('si');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // tbt - computed: true, optional: false, required: false
    get tbt() {
        return this.getNumberAttribute('tbt');
    }
    // ttfb - computed: true, optional: false, required: false
    get ttfb() {
        return this.getNumberAttribute('ttfb');
    }
    // tti - computed: true, optional: false, required: false
    get tti() {
        return this.getNumberAttribute('tti');
    }
}
export function observatoryScheduledTestTestMobileReportErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestTestMobileReportErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestTestMobileReportErrorOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // code - computed: true, optional: false, required: false
    get code() {
        return this.getStringAttribute('code');
    }
    // detail - computed: true, optional: false, required: false
    get detail() {
        return this.getStringAttribute('detail');
    }
    // final_displayed_url - computed: true, optional: false, required: false
    get finalDisplayedUrl() {
        return this.getStringAttribute('final_displayed_url');
    }
}
export function observatoryScheduledTestTestMobileReportToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestTestMobileReportToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestTestMobileReportOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // cls - computed: true, optional: false, required: false
    get cls() {
        return this.getNumberAttribute('cls');
    }
    // device_type - computed: true, optional: false, required: false
    get deviceType() {
        return this.getStringAttribute('device_type');
    }
    // error - computed: true, optional: false, required: false
    _error = new ObservatoryScheduledTestTestMobileReportErrorOutputReference(this, "error");
    get error() {
        return this._error;
    }
    // fcp - computed: true, optional: false, required: false
    get fcp() {
        return this.getNumberAttribute('fcp');
    }
    // json_report_url - computed: true, optional: false, required: false
    get jsonReportUrl() {
        return this.getStringAttribute('json_report_url');
    }
    // lcp - computed: true, optional: false, required: false
    get lcp() {
        return this.getNumberAttribute('lcp');
    }
    // performance_score - computed: true, optional: false, required: false
    get performanceScore() {
        return this.getNumberAttribute('performance_score');
    }
    // si - computed: true, optional: false, required: false
    get si() {
        return this.getNumberAttribute('si');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // tbt - computed: true, optional: false, required: false
    get tbt() {
        return this.getNumberAttribute('tbt');
    }
    // ttfb - computed: true, optional: false, required: false
    get ttfb() {
        return this.getNumberAttribute('ttfb');
    }
    // tti - computed: true, optional: false, required: false
    get tti() {
        return this.getNumberAttribute('tti');
    }
}
export function observatoryScheduledTestTestRegionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestTestRegionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestTestRegionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // label - computed: true, optional: false, required: false
    get label() {
        return this.getStringAttribute('label');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export function observatoryScheduledTestTestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function observatoryScheduledTestTestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ObservatoryScheduledTestTestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // date - computed: true, optional: false, required: false
    get date() {
        return this.getStringAttribute('date');
    }
    // desktop_report - computed: true, optional: false, required: false
    _desktopReport = new ObservatoryScheduledTestTestDesktopReportOutputReference(this, "desktop_report");
    get desktopReport() {
        return this._desktopReport;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // mobile_report - computed: true, optional: false, required: false
    _mobileReport = new ObservatoryScheduledTestTestMobileReportOutputReference(this, "mobile_report");
    get mobileReport() {
        return this._mobileReport;
    }
    // region - computed: true, optional: false, required: false
    _region = new ObservatoryScheduledTestTestRegionOutputReference(this, "region");
    get region() {
        return this._region;
    }
    // schedule_frequency - computed: true, optional: false, required: false
    get scheduleFrequency() {
        return this.getStringAttribute('schedule_frequency');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
export class ObservatoryScheduledTest extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_observatory_scheduled_test";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ObservatoryScheduledTest to import
    * @param importFromId The id of the existing ObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ObservatoryScheduledTest to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_observatory_scheduled_test", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ObservatoryScheduledTestConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_observatory_scheduled_test',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._frequency = config.frequency;
        this._region = config.region;
        this._url = config.url;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // frequency - computed: true, optional: true, required: false
    _frequency;
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    set frequency(value) {
        this._frequency = value;
    }
    resetFrequency() {
        this._frequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frequencyInput() {
        return this._frequency;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // region - computed: true, optional: true, required: false
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    // schedule - computed: true, optional: false, required: false
    _schedule = new ObservatoryScheduledTestScheduleOutputReference(this, "schedule");
    get schedule() {
        return this._schedule;
    }
    // test - computed: true, optional: false, required: false
    _test = new ObservatoryScheduledTestTestOutputReference(this, "test");
    get test() {
        return this._test;
    }
    // url - computed: false, optional: false, required: true
    _url;
    get url() {
        return this.getStringAttribute('url');
    }
    set url(value) {
        this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    get urlInput() {
        return this._url;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            frequency: cdktf.stringToTerraform(this._frequency),
            region: cdktf.stringToTerraform(this._region),
            url: cdktf.stringToTerraform(this._url),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            frequency: {
                value: cdktf.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region: {
                value: cdktf.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            url: {
                value: cdktf.stringToHclTerraform(this._url),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
