import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#body Filter#body}
    */
    readonly body: FilterBody[] | cdktf.IResolvable;
    /**
    * An informative summary of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#description Filter#description}
    */
    readonly description?: string;
    /**
    * The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#expression Filter#expression}
    */
    readonly expression?: string;
    /**
    * When true, indicates that the filter is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#paused Filter#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * A short reference tag. Allows you to select related filters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#ref Filter#ref}
    */
    readonly ref?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#zone_id Filter#zone_id}
    */
    readonly zoneId?: string;
}
export interface FilterBody {
    /**
    * An informative summary of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#description Filter#description}
    */
    readonly description?: string;
    /**
    * The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#expression Filter#expression}
    */
    readonly expression?: string;
    /**
    * When true, indicates that the filter is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#paused Filter#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * A short reference tag. Allows you to select related filters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#ref Filter#ref}
    */
    readonly ref?: string;
}
export declare function filterBodyToTerraform(struct?: FilterBody | cdktf.IResolvable): any;
export declare function filterBodyToHclTerraform(struct?: FilterBody | cdktf.IResolvable): any;
export declare class FilterBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FilterBody | cdktf.IResolvable | undefined;
    set internalValue(value: FilterBody | cdktf.IResolvable | undefined);
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
    get id(): any;
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
export declare class FilterBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FilterBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FilterBodyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter cloudflare_filter}
*/
export declare class Filter extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_filter";
    /**
    * Generates CDKTF code for importing a Filter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Filter to import
    * @param importFromId The id of the existing Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Filter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter cloudflare_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FilterConfig
    */
    constructor(scope: Construct, id: string, config: FilterConfig);
    private _body;
    get body(): FilterBodyList;
    putBody(value: FilterBody[] | cdktf.IResolvable): void;
    get bodyInput(): any;
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
    get id(): any;
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
