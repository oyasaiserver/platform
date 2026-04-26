import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersCronTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger#account_id WorkersCronTrigger#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger#schedules WorkersCronTrigger#schedules}
    */
    readonly schedules: WorkersCronTriggerSchedules[] | cdktf.IResolvable;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger#script_name WorkersCronTrigger#script_name}
    */
    readonly scriptName: string;
}
export interface WorkersCronTriggerSchedules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger#cron WorkersCronTrigger#cron}
    */
    readonly cron: string;
}
export declare function workersCronTriggerSchedulesToTerraform(struct?: WorkersCronTriggerSchedules | cdktf.IResolvable): any;
export declare function workersCronTriggerSchedulesToHclTerraform(struct?: WorkersCronTriggerSchedules | cdktf.IResolvable): any;
export declare class WorkersCronTriggerSchedulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersCronTriggerSchedules | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersCronTriggerSchedules | cdktf.IResolvable | undefined);
    get createdOn(): any;
    private _cron?;
    get cron(): string;
    set cron(value: string);
    get cronInput(): string;
    get modifiedOn(): any;
}
export declare class WorkersCronTriggerSchedulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersCronTriggerSchedules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersCronTriggerSchedulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger cloudflare_workers_cron_trigger}
*/
export declare class WorkersCronTrigger extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_cron_trigger";
    /**
    * Generates CDKTF code for importing a WorkersCronTrigger resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersCronTrigger to import
    * @param importFromId The id of the existing WorkersCronTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersCronTrigger to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_cron_trigger cloudflare_workers_cron_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersCronTriggerConfig
    */
    constructor(scope: Construct, id: string, config: WorkersCronTriggerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _schedules;
    get schedules(): WorkersCronTriggerSchedulesList;
    putSchedules(value: WorkersCronTriggerSchedules[] | cdktf.IResolvable): void;
    get schedulesInput(): any;
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
