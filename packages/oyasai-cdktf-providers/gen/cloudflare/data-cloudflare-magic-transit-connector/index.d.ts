import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector#account_id DataCloudflareMagicTransitConnector#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector#connector_id DataCloudflareMagicTransitConnector#connector_id}
    */
    readonly connectorId: string;
}
export interface DataCloudflareMagicTransitConnectorDevice {
}
export declare function dataCloudflareMagicTransitConnectorDeviceToTerraform(struct?: DataCloudflareMagicTransitConnectorDevice): any;
export declare function dataCloudflareMagicTransitConnectorDeviceToHclTerraform(struct?: DataCloudflareMagicTransitConnectorDevice): any;
export declare class DataCloudflareMagicTransitConnectorDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitConnectorDevice | undefined;
    set internalValue(value: DataCloudflareMagicTransitConnectorDevice | undefined);
    get id(): any;
    get serialNumber(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector cloudflare_magic_transit_connector}
*/
export declare class DataCloudflareMagicTransitConnector extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_connector";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitConnector to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connector cloudflare_magic_transit_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitConnectorConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitConnectorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get activated(): any;
    private _connectorId?;
    get connectorId(): string;
    set connectorId(value: string);
    get connectorIdInput(): string;
    private _device;
    get device(): DataCloudflareMagicTransitConnectorDeviceOutputReference;
    get id(): any;
    get interruptWindowDaysOfWeek(): any;
    get interruptWindowDurationHours(): any;
    get interruptWindowEmbargoDates(): any;
    get interruptWindowHourOfDay(): any;
    get lastHeartbeat(): any;
    get lastSeenVersion(): any;
    get lastUpdated(): any;
    get licenseKey(): any;
    get notes(): any;
    get timezone(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
