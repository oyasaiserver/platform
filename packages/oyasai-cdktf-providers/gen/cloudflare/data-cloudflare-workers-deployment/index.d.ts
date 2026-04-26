import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment#account_id DataCloudflareWorkersDeployment#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment#deployment_id DataCloudflareWorkersDeployment#deployment_id}
    */
    readonly deploymentId: string;
    /**
    * Name of the script, used in URLs and route configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment#script_name DataCloudflareWorkersDeployment#script_name}
    */
    readonly scriptName: string;
}
export interface DataCloudflareWorkersDeploymentAnnotations {
}
export declare function dataCloudflareWorkersDeploymentAnnotationsToTerraform(struct?: DataCloudflareWorkersDeploymentAnnotations): any;
export declare function dataCloudflareWorkersDeploymentAnnotationsToHclTerraform(struct?: DataCloudflareWorkersDeploymentAnnotations): any;
export declare class DataCloudflareWorkersDeploymentAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersDeploymentAnnotations | undefined;
    set internalValue(value: DataCloudflareWorkersDeploymentAnnotations | undefined);
    get workersMessage(): any;
    get workersTriggeredBy(): any;
}
export interface DataCloudflareWorkersDeploymentVersions {
}
export declare function dataCloudflareWorkersDeploymentVersionsToTerraform(struct?: DataCloudflareWorkersDeploymentVersions): any;
export declare function dataCloudflareWorkersDeploymentVersionsToHclTerraform(struct?: DataCloudflareWorkersDeploymentVersions): any;
export declare class DataCloudflareWorkersDeploymentVersionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersDeploymentVersions | undefined;
    set internalValue(value: DataCloudflareWorkersDeploymentVersions | undefined);
    get percentage(): any;
    get versionId(): any;
}
export declare class DataCloudflareWorkersDeploymentVersionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersDeploymentVersionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment cloudflare_workers_deployment}
*/
export declare class DataCloudflareWorkersDeployment extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_deployment";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersDeployment to import
    * @param importFromId The id of the existing DataCloudflareWorkersDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersDeployment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment cloudflare_workers_deployment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersDeploymentConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWorkersDeploymentConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _annotations;
    get annotations(): DataCloudflareWorkersDeploymentAnnotationsOutputReference;
    get authorEmail(): any;
    get createdOn(): any;
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    get deploymentIdInput(): string;
    get id(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    get scriptNameInput(): string;
    get source(): any;
    get strategy(): any;
    private _versions;
    get versions(): DataCloudflareWorkersDeploymentVersionsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
