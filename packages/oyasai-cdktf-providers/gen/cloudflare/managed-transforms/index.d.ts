import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ManagedTransformsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The list of Managed Request Transforms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#managed_request_headers ManagedTransforms#managed_request_headers}
    */
    readonly managedRequestHeaders: ManagedTransformsManagedRequestHeaders[] | cdktf.IResolvable;
    /**
    * The list of Managed Response Transforms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#managed_response_headers ManagedTransforms#managed_response_headers}
    */
    readonly managedResponseHeaders: ManagedTransformsManagedResponseHeaders[] | cdktf.IResolvable;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#zone_id ManagedTransforms#zone_id}
    */
    readonly zoneId: string;
}
export interface ManagedTransformsManagedRequestHeaders {
    /**
    * Whether the Managed Transform is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#enabled ManagedTransforms#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * The human-readable identifier of the Managed Transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#id ManagedTransforms#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function managedTransformsManagedRequestHeadersToTerraform(struct?: ManagedTransformsManagedRequestHeaders | cdktf.IResolvable): any;
export declare function managedTransformsManagedRequestHeadersToHclTerraform(struct?: ManagedTransformsManagedRequestHeaders | cdktf.IResolvable): any;
export declare class ManagedTransformsManagedRequestHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ManagedTransformsManagedRequestHeaders | cdktf.IResolvable | undefined;
    set internalValue(value: ManagedTransformsManagedRequestHeaders | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class ManagedTransformsManagedRequestHeadersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ManagedTransformsManagedRequestHeaders[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ManagedTransformsManagedRequestHeadersOutputReference;
}
export interface ManagedTransformsManagedResponseHeaders {
    /**
    * Whether the Managed Transform is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#enabled ManagedTransforms#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * The human-readable identifier of the Managed Transform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#id ManagedTransforms#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function managedTransformsManagedResponseHeadersToTerraform(struct?: ManagedTransformsManagedResponseHeaders | cdktf.IResolvable): any;
export declare function managedTransformsManagedResponseHeadersToHclTerraform(struct?: ManagedTransformsManagedResponseHeaders | cdktf.IResolvable): any;
export declare class ManagedTransformsManagedResponseHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ManagedTransformsManagedResponseHeaders | cdktf.IResolvable | undefined;
    set internalValue(value: ManagedTransformsManagedResponseHeaders | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class ManagedTransformsManagedResponseHeadersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ManagedTransformsManagedResponseHeaders[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ManagedTransformsManagedResponseHeadersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms cloudflare_managed_transforms}
*/
export declare class ManagedTransforms extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_managed_transforms";
    /**
    * Generates CDKTF code for importing a ManagedTransforms resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ManagedTransforms to import
    * @param importFromId The id of the existing ManagedTransforms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ManagedTransforms to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms cloudflare_managed_transforms} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ManagedTransformsConfig
    */
    constructor(scope: Construct, id: string, config: ManagedTransformsConfig);
    get id(): any;
    private _managedRequestHeaders;
    get managedRequestHeaders(): ManagedTransformsManagedRequestHeadersList;
    putManagedRequestHeaders(value: ManagedTransformsManagedRequestHeaders[] | cdktf.IResolvable): void;
    get managedRequestHeadersInput(): any;
    private _managedResponseHeaders;
    get managedResponseHeaders(): ManagedTransformsManagedResponseHeadersList;
    putManagedResponseHeaders(value: ManagedTransformsManagedResponseHeaders[] | cdktf.IResolvable): void;
    get managedResponseHeadersInput(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
