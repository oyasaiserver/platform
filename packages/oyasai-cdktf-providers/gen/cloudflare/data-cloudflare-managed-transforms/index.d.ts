import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareManagedTransformsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms#zone_id DataCloudflareManagedTransforms#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareManagedTransformsManagedRequestHeaders {
}
export declare function dataCloudflareManagedTransformsManagedRequestHeadersToTerraform(struct?: DataCloudflareManagedTransformsManagedRequestHeaders): any;
export declare function dataCloudflareManagedTransformsManagedRequestHeadersToHclTerraform(struct?: DataCloudflareManagedTransformsManagedRequestHeaders): any;
export declare class DataCloudflareManagedTransformsManagedRequestHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareManagedTransformsManagedRequestHeaders | undefined;
    set internalValue(value: DataCloudflareManagedTransformsManagedRequestHeaders | undefined);
    get enabled(): any;
    get id(): any;
}
export declare class DataCloudflareManagedTransformsManagedRequestHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareManagedTransformsManagedRequestHeadersOutputReference;
}
export interface DataCloudflareManagedTransformsManagedResponseHeaders {
}
export declare function dataCloudflareManagedTransformsManagedResponseHeadersToTerraform(struct?: DataCloudflareManagedTransformsManagedResponseHeaders): any;
export declare function dataCloudflareManagedTransformsManagedResponseHeadersToHclTerraform(struct?: DataCloudflareManagedTransformsManagedResponseHeaders): any;
export declare class DataCloudflareManagedTransformsManagedResponseHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareManagedTransformsManagedResponseHeaders | undefined;
    set internalValue(value: DataCloudflareManagedTransformsManagedResponseHeaders | undefined);
    get enabled(): any;
    get id(): any;
}
export declare class DataCloudflareManagedTransformsManagedResponseHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareManagedTransformsManagedResponseHeadersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms cloudflare_managed_transforms}
*/
export declare class DataCloudflareManagedTransforms extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_managed_transforms";
    /**
    * Generates CDKTF code for importing a DataCloudflareManagedTransforms resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareManagedTransforms to import
    * @param importFromId The id of the existing DataCloudflareManagedTransforms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareManagedTransforms to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/managed_transforms cloudflare_managed_transforms} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareManagedTransformsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareManagedTransformsConfig);
    get id(): any;
    private _managedRequestHeaders;
    get managedRequestHeaders(): DataCloudflareManagedTransformsManagedRequestHeadersList;
    private _managedResponseHeaders;
    get managedResponseHeaders(): DataCloudflareManagedTransformsManagedResponseHeadersList;
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
