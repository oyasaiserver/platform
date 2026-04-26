import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#filter DataCloudflareFilter#filter}
    */
    readonly filter?: DataCloudflareFilterFilter;
    /**
    * The unique identifier of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#filter_id DataCloudflareFilter#filter_id}
    */
    readonly filterId?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#zone_id DataCloudflareFilter#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareFilterFilter {
    /**
    * A case-insensitive string to find in the description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#description DataCloudflareFilter#description}
    */
    readonly description?: string;
    /**
    * A case-insensitive string to find in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#expression DataCloudflareFilter#expression}
    */
    readonly expression?: string;
    /**
    * The unique identifier of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#id DataCloudflareFilter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * When true, indicates that the filter is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#paused DataCloudflareFilter#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * The filter ref (a short reference tag) to search for. Must be an exact match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#ref DataCloudflareFilter#ref}
    */
    readonly ref?: string;
}
export declare function dataCloudflareFilterFilterToTerraform(struct?: DataCloudflareFilterFilter | cdktf.IResolvable): any;
export declare function dataCloudflareFilterFilterToHclTerraform(struct?: DataCloudflareFilterFilter | cdktf.IResolvable): any;
export declare class DataCloudflareFilterFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareFilterFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareFilterFilter | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    private _ref?;
    get ref(): string;
    set ref(value: string);
    resetRef(): void;
    get refInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter cloudflare_filter}
*/
export declare class DataCloudflareFilter extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_filter";
    /**
    * Generates CDKTF code for importing a DataCloudflareFilter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareFilter to import
    * @param importFromId The id of the existing DataCloudflareFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareFilter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filter cloudflare_filter} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareFilterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareFilterConfig);
    get description(): any;
    get expression(): any;
    private _filter;
    get filter(): DataCloudflareFilterFilterOutputReference;
    putFilter(value: DataCloudflareFilterFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _filterId?;
    get filterId(): string;
    set filterId(value: string);
    resetFilterId(): void;
    get filterIdInput(): string;
    get id(): any;
    get paused(): any;
    get ref(): any;
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
