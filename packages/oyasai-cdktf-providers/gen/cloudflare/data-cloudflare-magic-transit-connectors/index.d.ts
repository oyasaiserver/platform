import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitConnectorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors#account_id DataCloudflareMagicTransitConnectors#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors#max_items DataCloudflareMagicTransitConnectors#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareMagicTransitConnectorsResultDevice {
}
export declare function dataCloudflareMagicTransitConnectorsResultDeviceToTerraform(struct?: DataCloudflareMagicTransitConnectorsResultDevice): any;
export declare function dataCloudflareMagicTransitConnectorsResultDeviceToHclTerraform(struct?: DataCloudflareMagicTransitConnectorsResultDevice): any;
export declare class DataCloudflareMagicTransitConnectorsResultDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitConnectorsResultDevice | undefined;
    set internalValue(value: DataCloudflareMagicTransitConnectorsResultDevice | undefined);
    get id(): any;
    get serialNumber(): any;
}
export interface DataCloudflareMagicTransitConnectorsResult {
}
export declare function dataCloudflareMagicTransitConnectorsResultToTerraform(struct?: DataCloudflareMagicTransitConnectorsResult): any;
export declare function dataCloudflareMagicTransitConnectorsResultToHclTerraform(struct?: DataCloudflareMagicTransitConnectorsResult): any;
export declare class DataCloudflareMagicTransitConnectorsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicTransitConnectorsResult | undefined;
    set internalValue(value: DataCloudflareMagicTransitConnectorsResult | undefined);
    get activated(): any;
    private _device;
    get device(): DataCloudflareMagicTransitConnectorsResultDeviceOutputReference;
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
}
export declare class DataCloudflareMagicTransitConnectorsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareMagicTransitConnectorsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors cloudflare_magic_transit_connectors}
*/
export declare class DataCloudflareMagicTransitConnectors extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_connectors";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitConnectors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitConnectors to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitConnectors to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_connectors cloudflare_magic_transit_connectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitConnectorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareMagicTransitConnectorsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareMagicTransitConnectorsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
