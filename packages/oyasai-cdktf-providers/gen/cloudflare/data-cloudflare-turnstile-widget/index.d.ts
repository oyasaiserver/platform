import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTurnstileWidgetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#account_id DataCloudflareTurnstileWidget#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#filter DataCloudflareTurnstileWidget#filter}
    */
    readonly filter?: DataCloudflareTurnstileWidgetFilter;
    /**
    * Widget item identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#sitekey DataCloudflareTurnstileWidget#sitekey}
    */
    readonly sitekey?: string;
}
export interface DataCloudflareTurnstileWidgetFilter {
    /**
    * Direction to order widgets.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#direction DataCloudflareTurnstileWidget#direction}
    */
    readonly direction?: string;
    /**
    * Filter widgets by field using case-insensitive substring matching.
    * Format: `field:value`
    *
    * Supported fields:
    * - `name` - Filter by widget name (e.g., `filter=name:login-form`)
    * - `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)
    *
    * Returns 400 Bad Request if the field is unsupported or format is invalid.
    * An empty filter value returns all results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#filter DataCloudflareTurnstileWidget#filter}
    */
    readonly filter?: string;
    /**
    * Field to order widgets by.
    * Available values: "id", "sitekey", "name", "created_on", "modified_on".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#order DataCloudflareTurnstileWidget#order}
    */
    readonly order?: string;
}
export declare function dataCloudflareTurnstileWidgetFilterToTerraform(struct?: DataCloudflareTurnstileWidgetFilter | cdktf.IResolvable): any;
export declare function dataCloudflareTurnstileWidgetFilterToHclTerraform(struct?: DataCloudflareTurnstileWidgetFilter | cdktf.IResolvable): any;
export declare class DataCloudflareTurnstileWidgetFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareTurnstileWidgetFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareTurnstileWidgetFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _filter?;
    get filter(): string;
    set filter(value: string);
    resetFilter(): void;
    get filterInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget cloudflare_turnstile_widget}
*/
export declare class DataCloudflareTurnstileWidget extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_turnstile_widget";
    /**
    * Generates CDKTF code for importing a DataCloudflareTurnstileWidget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTurnstileWidget to import
    * @param importFromId The id of the existing DataCloudflareTurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTurnstileWidget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget cloudflare_turnstile_widget} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTurnstileWidgetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTurnstileWidgetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get botFightMode(): any;
    get clearanceLevel(): any;
    get createdOn(): any;
    get domains(): any;
    get ephemeralId(): any;
    private _filter;
    get filter(): DataCloudflareTurnstileWidgetFilterOutputReference;
    putFilter(value: DataCloudflareTurnstileWidgetFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get mode(): any;
    get modifiedOn(): any;
    get name(): any;
    get offlabel(): any;
    get region(): any;
    get secret(): any;
    private _sitekey?;
    get sitekey(): string;
    set sitekey(value: string);
    resetSitekey(): void;
    get sitekeyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
