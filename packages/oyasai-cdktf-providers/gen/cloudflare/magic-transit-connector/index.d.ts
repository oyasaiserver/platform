import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicTransitConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#account_id MagicTransitConnector#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#activated MagicTransitConnector#activated}
    */
    readonly activated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#device MagicTransitConnector#device}
    */
    readonly device: MagicTransitConnectorDevice;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#interrupt_window_duration_hours MagicTransitConnector#interrupt_window_duration_hours}
    */
    readonly interruptWindowDurationHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#interrupt_window_hour_of_day MagicTransitConnector#interrupt_window_hour_of_day}
    */
    readonly interruptWindowHourOfDay?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#notes MagicTransitConnector#notes}
    */
    readonly notes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#timezone MagicTransitConnector#timezone}
    */
    readonly timezone?: string;
}
export interface MagicTransitConnectorDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#id MagicTransitConnector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Set to true to provision a license key for this connector. Only used during resource creation. This is a write-only field that will not be stored in state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#provision_license MagicTransitConnector#provision_license}
    */
    readonly provisionLicense?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#serial_number MagicTransitConnector#serial_number}
    */
    readonly serialNumber?: string;
}
export declare function magicTransitConnectorDeviceToTerraform(struct?: MagicTransitConnectorDevice | cdktf.IResolvable): any;
export declare function magicTransitConnectorDeviceToHclTerraform(struct?: MagicTransitConnectorDevice | cdktf.IResolvable): any;
export declare class MagicTransitConnectorDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitConnectorDevice | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitConnectorDevice | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _provisionLicense?;
    get provisionLicense(): boolean | cdktf.IResolvable;
    set provisionLicense(value: boolean | cdktf.IResolvable);
    resetProvisionLicense(): void;
    get provisionLicenseInput(): any;
    private _serialNumber?;
    get serialNumber(): string;
    set serialNumber(value: string);
    resetSerialNumber(): void;
    get serialNumberInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector}
*/
export declare class MagicTransitConnector extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_transit_connector";
    /**
    * Generates CDKTF code for importing a MagicTransitConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitConnector to import
    * @param importFromId The id of the existing MagicTransitConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitConnectorConfig
    */
    constructor(scope: Construct, id: string, config: MagicTransitConnectorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _activated?;
    get activated(): boolean | cdktf.IResolvable;
    set activated(value: boolean | cdktf.IResolvable);
    resetActivated(): void;
    get activatedInput(): any;
    private _device;
    get device(): MagicTransitConnectorDeviceOutputReference;
    putDevice(value: MagicTransitConnectorDevice): void;
    get deviceInput(): any;
    get id(): any;
    private _interruptWindowDurationHours?;
    get interruptWindowDurationHours(): number;
    set interruptWindowDurationHours(value: number);
    resetInterruptWindowDurationHours(): void;
    get interruptWindowDurationHoursInput(): number;
    private _interruptWindowHourOfDay?;
    get interruptWindowHourOfDay(): number;
    set interruptWindowHourOfDay(value: number);
    resetInterruptWindowHourOfDay(): void;
    get interruptWindowHourOfDayInput(): number;
    get licenseKey(): any;
    private _notes?;
    get notes(): string;
    set notes(value: string);
    resetNotes(): void;
    get notesInput(): string;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
