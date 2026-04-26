import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ObservatoryScheduledTestConfig extends cdktf.TerraformMetaArguments {
    /**
    * The frequency of the scheduled test. Defaults to WEEKLY for free plans, DAILY for paid plans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#frequency ObservatoryScheduledTest#frequency}
    */
    readonly frequency?: string;
    /**
    * A test region.
    * Available values: "asia-east1", "asia-northeast1", "asia-northeast2", "asia-south1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west8", "europe-west9", "me-west1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-south1", "us-west1".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#region ObservatoryScheduledTest#region}
    */
    readonly region?: string;
    /**
    * A URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}
    */
    readonly url: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}
    */
    readonly zoneId?: string;
}
export interface ObservatoryScheduledTestSchedule {
}
export declare function observatoryScheduledTestScheduleToTerraform(struct?: ObservatoryScheduledTestSchedule): any;
export declare function observatoryScheduledTestScheduleToHclTerraform(struct?: ObservatoryScheduledTestSchedule): any;
export declare class ObservatoryScheduledTestScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestSchedule | undefined;
    set internalValue(value: ObservatoryScheduledTestSchedule | undefined);
    get frequency(): any;
    get region(): any;
    get url(): any;
}
export interface ObservatoryScheduledTestTestDesktopReportError {
}
export declare function observatoryScheduledTestTestDesktopReportErrorToTerraform(struct?: ObservatoryScheduledTestTestDesktopReportError): any;
export declare function observatoryScheduledTestTestDesktopReportErrorToHclTerraform(struct?: ObservatoryScheduledTestTestDesktopReportError): any;
export declare class ObservatoryScheduledTestTestDesktopReportErrorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestTestDesktopReportError | undefined;
    set internalValue(value: ObservatoryScheduledTestTestDesktopReportError | undefined);
    get code(): any;
    get detail(): any;
    get finalDisplayedUrl(): any;
}
export interface ObservatoryScheduledTestTestDesktopReport {
}
export declare function observatoryScheduledTestTestDesktopReportToTerraform(struct?: ObservatoryScheduledTestTestDesktopReport): any;
export declare function observatoryScheduledTestTestDesktopReportToHclTerraform(struct?: ObservatoryScheduledTestTestDesktopReport): any;
export declare class ObservatoryScheduledTestTestDesktopReportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestTestDesktopReport | undefined;
    set internalValue(value: ObservatoryScheduledTestTestDesktopReport | undefined);
    get cls(): any;
    get deviceType(): any;
    private _error;
    get error(): ObservatoryScheduledTestTestDesktopReportErrorOutputReference;
    get fcp(): any;
    get jsonReportUrl(): any;
    get lcp(): any;
    get performanceScore(): any;
    get si(): any;
    get state(): any;
    get tbt(): any;
    get ttfb(): any;
    get tti(): any;
}
export interface ObservatoryScheduledTestTestMobileReportError {
}
export declare function observatoryScheduledTestTestMobileReportErrorToTerraform(struct?: ObservatoryScheduledTestTestMobileReportError): any;
export declare function observatoryScheduledTestTestMobileReportErrorToHclTerraform(struct?: ObservatoryScheduledTestTestMobileReportError): any;
export declare class ObservatoryScheduledTestTestMobileReportErrorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestTestMobileReportError | undefined;
    set internalValue(value: ObservatoryScheduledTestTestMobileReportError | undefined);
    get code(): any;
    get detail(): any;
    get finalDisplayedUrl(): any;
}
export interface ObservatoryScheduledTestTestMobileReport {
}
export declare function observatoryScheduledTestTestMobileReportToTerraform(struct?: ObservatoryScheduledTestTestMobileReport): any;
export declare function observatoryScheduledTestTestMobileReportToHclTerraform(struct?: ObservatoryScheduledTestTestMobileReport): any;
export declare class ObservatoryScheduledTestTestMobileReportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestTestMobileReport | undefined;
    set internalValue(value: ObservatoryScheduledTestTestMobileReport | undefined);
    get cls(): any;
    get deviceType(): any;
    private _error;
    get error(): ObservatoryScheduledTestTestMobileReportErrorOutputReference;
    get fcp(): any;
    get jsonReportUrl(): any;
    get lcp(): any;
    get performanceScore(): any;
    get si(): any;
    get state(): any;
    get tbt(): any;
    get ttfb(): any;
    get tti(): any;
}
export interface ObservatoryScheduledTestTestRegion {
}
export declare function observatoryScheduledTestTestRegionToTerraform(struct?: ObservatoryScheduledTestTestRegion): any;
export declare function observatoryScheduledTestTestRegionToHclTerraform(struct?: ObservatoryScheduledTestTestRegion): any;
export declare class ObservatoryScheduledTestTestRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestTestRegion | undefined;
    set internalValue(value: ObservatoryScheduledTestTestRegion | undefined);
    get label(): any;
    get value(): any;
}
export interface ObservatoryScheduledTestTest {
}
export declare function observatoryScheduledTestTestToTerraform(struct?: ObservatoryScheduledTestTest): any;
export declare function observatoryScheduledTestTestToHclTerraform(struct?: ObservatoryScheduledTestTest): any;
export declare class ObservatoryScheduledTestTestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ObservatoryScheduledTestTest | undefined;
    set internalValue(value: ObservatoryScheduledTestTest | undefined);
    get date(): any;
    private _desktopReport;
    get desktopReport(): ObservatoryScheduledTestTestDesktopReportOutputReference;
    get id(): any;
    private _mobileReport;
    get mobileReport(): ObservatoryScheduledTestTestMobileReportOutputReference;
    private _region;
    get region(): ObservatoryScheduledTestTestRegionOutputReference;
    get scheduleFrequency(): any;
    get url(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
export declare class ObservatoryScheduledTest extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_observatory_scheduled_test";
    /**
    * Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ObservatoryScheduledTest to import
    * @param importFromId The id of the existing ObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ObservatoryScheduledTest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ObservatoryScheduledTestConfig
    */
    constructor(scope: Construct, id: string, config: ObservatoryScheduledTestConfig);
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    resetFrequency(): void;
    get frequencyInput(): string;
    get id(): any;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _schedule;
    get schedule(): ObservatoryScheduledTestScheduleOutputReference;
    private _test;
    get test(): ObservatoryScheduledTestTestOutputReference;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
