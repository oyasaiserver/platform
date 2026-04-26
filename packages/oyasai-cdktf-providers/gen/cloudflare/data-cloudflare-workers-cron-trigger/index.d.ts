import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersCronTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger#account_id DataCloudflareWorkersCronTrigger#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger#script_name DataCloudflareWorkersCronTrigger#script_name}
    */
    readonly scriptName: string;
}
export interface DataCloudflareWorkersCronTriggerSchedules {
}
export declare function dataCloudflareWorkersCronTriggerSchedulesToTerraform(struct?: DataCloudflareWorkersCronTriggerSchedules): any;
export declare function dataCloudflareWorkersCronTriggerSchedulesToHclTerraform(struct?: DataCloudflareWorkersCronTriggerSchedules): any;
export declare class DataCloudflareWorkersCronTriggerSchedulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersCronTriggerSchedules | undefined;
    set internalValue(value: DataCloudflareWorkersCronTriggerSchedules | undefined);
    get createdOn(): any;
    get cron(): any;
    get modifiedOn(): any;
}
export declare class DataCloudflareWorkersCronTriggerSchedulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersCronTriggerSchedulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger cloudflare_workers_cron_trigger}
*/
export declare class DataCloudflareWorkersCronTrigger extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_cron_trigger";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCronTrigger resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCronTrigger to import
    * @param importFromId The id of the existing DataCloudflareWorkersCronTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCronTrigger to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_cron_trigger cloudflare_workers_cron_trigger} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCronTriggerConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWorkersCronTriggerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _schedules;
    get schedules(): DataCloudflareWorkersCronTriggerSchedulesList;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    get scriptNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
