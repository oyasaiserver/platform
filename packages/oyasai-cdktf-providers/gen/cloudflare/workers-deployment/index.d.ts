import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkersDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#account_id WorkersDeployment#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#annotations WorkersDeployment#annotations}
    */
    readonly annotations?: WorkersDeploymentAnnotations;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#script_name WorkersDeployment#script_name}
    */
    readonly scriptName: string;
    /**
    * Available values: "percentage".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#strategy WorkersDeployment#strategy}
    */
    readonly strategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#versions WorkersDeployment#versions}
    */
    readonly versions: WorkersDeploymentVersions[] | cdktf.IResolvable;
}
export interface WorkersDeploymentAnnotations {
    /**
    * Human-readable message about the deployment. Truncated to 1000 bytes if longer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#workers_message WorkersDeployment#workers_message}
    */
    readonly workersMessage?: string;
}
export declare function workersDeploymentAnnotationsToTerraform(struct?: WorkersDeploymentAnnotations | cdktf.IResolvable): any;
export declare function workersDeploymentAnnotationsToHclTerraform(struct?: WorkersDeploymentAnnotations | cdktf.IResolvable): any;
export declare class WorkersDeploymentAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkersDeploymentAnnotations | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersDeploymentAnnotations | cdktf.IResolvable | undefined);
    private _workersMessage?;
    get workersMessage(): string;
    set workersMessage(value: string);
    resetWorkersMessage(): void;
    get workersMessageInput(): string;
    get workersTriggeredBy(): any;
}
export interface WorkersDeploymentVersions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#percentage WorkersDeployment#percentage}
    */
    readonly percentage: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#version_id WorkersDeployment#version_id}
    */
    readonly versionId: string;
}
export declare function workersDeploymentVersionsToTerraform(struct?: WorkersDeploymentVersions | cdktf.IResolvable): any;
export declare function workersDeploymentVersionsToHclTerraform(struct?: WorkersDeploymentVersions | cdktf.IResolvable): any;
export declare class WorkersDeploymentVersionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkersDeploymentVersions | cdktf.IResolvable | undefined;
    set internalValue(value: WorkersDeploymentVersions | cdktf.IResolvable | undefined);
    private _percentage?;
    get percentage(): number;
    set percentage(value: number);
    get percentageInput(): number;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    get versionIdInput(): string;
}
export declare class WorkersDeploymentVersionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkersDeploymentVersions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkersDeploymentVersionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment cloudflare_workers_deployment}
*/
export declare class WorkersDeployment extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workers_deployment";
    /**
    * Generates CDKTF code for importing a WorkersDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersDeployment to import
    * @param importFromId The id of the existing WorkersDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersDeployment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_deployment cloudflare_workers_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersDeploymentConfig
    */
    constructor(scope: Construct, id: string, config: WorkersDeploymentConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _annotations;
    get annotations(): WorkersDeploymentAnnotationsOutputReference;
    putAnnotations(value: WorkersDeploymentAnnotations): void;
    resetAnnotations(): void;
    get annotationsInput(): any;
    get authorEmail(): any;
    get createdOn(): any;
    get id(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    get scriptNameInput(): string;
    get source(): any;
    private _strategy?;
    get strategy(): string;
    set strategy(value: string);
    get strategyInput(): string;
    private _versions;
    get versions(): WorkersDeploymentVersionsList;
    putVersions(value: WorkersDeploymentVersions[] | cdktf.IResolvable): void;
    get versionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
