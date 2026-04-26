import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the public ID of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline#account_id Pipeline#account_id}
    */
    readonly accountId?: string;
    /**
    * Specifies the name of the Pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline#name Pipeline#name}
    */
    readonly name: string;
    /**
    * Specifies SQL for the Pipeline processing flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline#sql Pipeline#sql}
    */
    readonly sql: string;
}
export interface PipelineTables {
}
export declare function pipelineTablesToTerraform(struct?: PipelineTables): any;
export declare function pipelineTablesToHclTerraform(struct?: PipelineTables): any;
export declare class PipelineTablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipelineTables | undefined;
    set internalValue(value: PipelineTables | undefined);
    get id(): any;
    get latest(): any;
    get name(): any;
    get type(): any;
    get version(): any;
}
export declare class PipelineTablesList extends cdktf.ComplexList {
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
    get(index: number): PipelineTablesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline cloudflare_pipeline}
*/
export declare class Pipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_pipeline";
    /**
    * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Pipeline to import
    * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Pipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline cloudflare_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineConfig
    */
    constructor(scope: Construct, id: string, config: PipelineConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get failureReason(): any;
    get id(): any;
    get modifiedAt(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sql?;
    get sql(): string;
    set sql(value: string);
    get sqlInput(): string;
    get status(): any;
    private _tables;
    get tables(): PipelineTablesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
