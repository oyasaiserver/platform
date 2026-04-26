import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ContentScanningExpressionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression#body ContentScanningExpression#body}
    */
    readonly body: ContentScanningExpressionBody[] | cdktf.IResolvable;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression#zone_id ContentScanningExpression#zone_id}
    */
    readonly zoneId?: string;
}
export interface ContentScanningExpressionBody {
    /**
    * Defines the ruleset expression to use in matching content objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression#payload ContentScanningExpression#payload}
    */
    readonly payload: string;
}
export declare function contentScanningExpressionBodyToTerraform(struct?: ContentScanningExpressionBody | cdktf.IResolvable): any;
export declare function contentScanningExpressionBodyToHclTerraform(struct?: ContentScanningExpressionBody | cdktf.IResolvable): any;
export declare class ContentScanningExpressionBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ContentScanningExpressionBody | cdktf.IResolvable | undefined;
    set internalValue(value: ContentScanningExpressionBody | cdktf.IResolvable | undefined);
    private _payload?;
    get payload(): string;
    set payload(value: string);
    get payloadInput(): string;
}
export declare class ContentScanningExpressionBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ContentScanningExpressionBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ContentScanningExpressionBodyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression cloudflare_content_scanning_expression}
*/
export declare class ContentScanningExpression extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_content_scanning_expression";
    /**
    * Generates CDKTF code for importing a ContentScanningExpression resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ContentScanningExpression to import
    * @param importFromId The id of the existing ContentScanningExpression that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ContentScanningExpression to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression cloudflare_content_scanning_expression} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContentScanningExpressionConfig
    */
    constructor(scope: Construct, id: string, config: ContentScanningExpressionConfig);
    private _body;
    get body(): ContentScanningExpressionBodyList;
    putBody(value: ContentScanningExpressionBody[] | cdktf.IResolvable): void;
    get bodyInput(): any;
    get id(): any;
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
