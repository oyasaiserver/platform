import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicNetworkMonitoringConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices {
}
export declare function dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToTerraform(struct?: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices): any;
export declare function dataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesToHclTerraform(struct?: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices): any;
export declare class DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices | undefined;
    set internalValue(value: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices | undefined);
    get id(): any;
    get name(): any;
    get routerIp(): any;
}
export declare class DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}
*/
export declare class DataCloudflareMagicNetworkMonitoringConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_network_monitoring_configuration";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringConfiguration to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareMagicNetworkMonitoringConfigurationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get defaultSampling(): any;
    get name(): any;
    get routerIps(): any;
    private _warpDevices;
    get warpDevices(): DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
