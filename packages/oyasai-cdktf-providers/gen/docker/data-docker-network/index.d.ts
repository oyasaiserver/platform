import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerNetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Docker network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network#name DataDockerNetwork#name}
    */
    readonly name: string;
}
export interface DataDockerNetworkContainers {
}
export declare function dataDockerNetworkContainersToTerraform(struct?: DataDockerNetworkContainers): any;
export declare function dataDockerNetworkContainersToHclTerraform(struct?: DataDockerNetworkContainers): any;
export declare class DataDockerNetworkContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataDockerNetworkContainers | undefined;
    set internalValue(value: DataDockerNetworkContainers | undefined);
    get containerId(): any;
    get endpointId(): any;
    get ipv4Address(): any;
    get ipv6Address(): any;
    get macAddress(): any;
    get name(): any;
}
export declare class DataDockerNetworkContainersList extends cdktf.ComplexList {
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
    get(index: number): DataDockerNetworkContainersOutputReference;
}
export interface DataDockerNetworkIpamConfig {
}
export declare function dataDockerNetworkIpamConfigToTerraform(struct?: DataDockerNetworkIpamConfig): any;
export declare function dataDockerNetworkIpamConfigToHclTerraform(struct?: DataDockerNetworkIpamConfig): any;
export declare class DataDockerNetworkIpamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataDockerNetworkIpamConfig | undefined;
    set internalValue(value: DataDockerNetworkIpamConfig | undefined);
    private _auxAddress;
    get auxAddress(): any;
    get gateway(): any;
    get ipRange(): any;
    get subnet(): any;
}
export declare class DataDockerNetworkIpamConfigList extends cdktf.ComplexList {
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
    get(index: number): DataDockerNetworkIpamConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network docker_network}
*/
export declare class DataDockerNetwork extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_network";
    /**
    * Generates CDKTF code for importing a DataDockerNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerNetwork to import
    * @param importFromId The id of the existing DataDockerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerNetwork to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/network docker_network} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerNetworkConfig
    */
    constructor(scope: Construct, id: string, config: DataDockerNetworkConfig);
    private _containers;
    get containers(): DataDockerNetworkContainersList;
    get driver(): any;
    get id(): any;
    get internal(): any;
    private _ipamConfig;
    get ipamConfig(): DataDockerNetworkIpamConfigList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _options;
    get options(): any;
    get scope(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
