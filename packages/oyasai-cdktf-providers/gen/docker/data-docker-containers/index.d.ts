import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerContainersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDockerContainersContainers {
}
export declare function dataDockerContainersContainersToTerraform(struct?: DataDockerContainersContainers): any;
export declare function dataDockerContainersContainersToHclTerraform(struct?: DataDockerContainersContainers): any;
export declare class DataDockerContainersContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataDockerContainersContainers | undefined;
    set internalValue(value: DataDockerContainersContainers | undefined);
    get command(): any;
    get created(): any;
    get id(): any;
    get image(): any;
    get imageId(): any;
    private _labels;
    get labels(): any;
    get names(): any;
    get state(): any;
    get status(): any;
}
export declare class DataDockerContainersContainersList extends cdktf.ComplexList {
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
    get(index: number): DataDockerContainersContainersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers docker_containers}
*/
export declare class DataDockerContainers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_containers";
    /**
    * Generates CDKTF code for importing a DataDockerContainers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerContainers to import
    * @param importFromId The id of the existing DataDockerContainers that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerContainers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/containers docker_containers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerContainersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataDockerContainersConfig);
    private _containers;
    get containers(): DataDockerContainersContainersList;
    get id(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
