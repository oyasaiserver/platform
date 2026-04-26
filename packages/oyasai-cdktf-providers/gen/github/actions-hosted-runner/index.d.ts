import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsHostedRunnerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether this runner should be used to generate custom images. Cannot be changed after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}
    */
    readonly imageGen?: boolean | cdktf.IResolvable;
    /**
    * The version of the runner image to deploy. This is relevant only for runners using custom images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}
    */
    readonly imageVersion?: string;
    /**
    * Maximum number of runners to scale up to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}
    */
    readonly maximumRunners?: number;
    /**
    * Name of the hosted runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}
    */
    readonly name: string;
    /**
    * Whether to enable static public IP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}
    */
    readonly publicIpEnabled?: boolean | cdktf.IResolvable;
    /**
    * The runner group ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}
    */
    readonly runnerGroupId: number;
    /**
    * Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}
    */
    readonly size: string;
    /**
    * image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}
    */
    readonly image: ActionsHostedRunnerImage;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}
    */
    readonly timeouts?: ActionsHostedRunnerTimeouts;
}
export interface ActionsHostedRunnerMachineSizeDetails {
}
export declare function actionsHostedRunnerMachineSizeDetailsToTerraform(struct?: ActionsHostedRunnerMachineSizeDetails): any;
export declare function actionsHostedRunnerMachineSizeDetailsToHclTerraform(struct?: ActionsHostedRunnerMachineSizeDetails): any;
export declare class ActionsHostedRunnerMachineSizeDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ActionsHostedRunnerMachineSizeDetails | undefined;
    set internalValue(value: ActionsHostedRunnerMachineSizeDetails | undefined);
    get cpuCores(): any;
    get id(): any;
    get memoryGb(): any;
    get storageGb(): any;
}
export declare class ActionsHostedRunnerMachineSizeDetailsList extends cdktf.ComplexList {
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
    get(index: number): ActionsHostedRunnerMachineSizeDetailsOutputReference;
}
export interface ActionsHostedRunnerPublicIps {
}
export declare function actionsHostedRunnerPublicIpsToTerraform(struct?: ActionsHostedRunnerPublicIps): any;
export declare function actionsHostedRunnerPublicIpsToHclTerraform(struct?: ActionsHostedRunnerPublicIps): any;
export declare class ActionsHostedRunnerPublicIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ActionsHostedRunnerPublicIps | undefined;
    set internalValue(value: ActionsHostedRunnerPublicIps | undefined);
    get enabled(): any;
    get length(): any;
    get prefix(): any;
}
export declare class ActionsHostedRunnerPublicIpsList extends cdktf.ComplexList {
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
    get(index: number): ActionsHostedRunnerPublicIpsOutputReference;
}
export interface ActionsHostedRunnerImage {
    /**
    * The image ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * The image source (github, partner, or custom).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}
    */
    readonly source?: string;
}
export declare function actionsHostedRunnerImageToTerraform(struct?: ActionsHostedRunnerImageOutputReference | ActionsHostedRunnerImage): any;
export declare function actionsHostedRunnerImageToHclTerraform(struct?: ActionsHostedRunnerImageOutputReference | ActionsHostedRunnerImage): any;
export declare class ActionsHostedRunnerImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ActionsHostedRunnerImage | undefined;
    set internalValue(value: ActionsHostedRunnerImage | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get sizeGb(): any;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
}
export interface ActionsHostedRunnerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}
    */
    readonly delete?: string;
}
export declare function actionsHostedRunnerTimeoutsToTerraform(struct?: ActionsHostedRunnerTimeouts | cdktf.IResolvable): any;
export declare function actionsHostedRunnerTimeoutsToHclTerraform(struct?: ActionsHostedRunnerTimeouts | cdktf.IResolvable): any;
export declare class ActionsHostedRunnerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ActionsHostedRunnerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ActionsHostedRunnerTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}
*/
export declare class ActionsHostedRunner extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_hosted_runner";
    /**
    * Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsHostedRunner to import
    * @param importFromId The id of the existing ActionsHostedRunner that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsHostedRunner to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_hosted_runner github_actions_hosted_runner} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsHostedRunnerConfig
    */
    constructor(scope: Construct, id: string, config: ActionsHostedRunnerConfig);
    get id(): any;
    private _imageGen?;
    get imageGen(): boolean | cdktf.IResolvable;
    set imageGen(value: boolean | cdktf.IResolvable);
    resetImageGen(): void;
    get imageGenInput(): any;
    private _imageVersion?;
    get imageVersion(): string;
    set imageVersion(value: string);
    resetImageVersion(): void;
    get imageVersionInput(): string;
    get lastActiveOn(): any;
    private _machineSizeDetails;
    get machineSizeDetails(): ActionsHostedRunnerMachineSizeDetailsList;
    private _maximumRunners?;
    get maximumRunners(): number;
    set maximumRunners(value: number);
    resetMaximumRunners(): void;
    get maximumRunnersInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platform(): any;
    private _publicIpEnabled?;
    get publicIpEnabled(): boolean | cdktf.IResolvable;
    set publicIpEnabled(value: boolean | cdktf.IResolvable);
    resetPublicIpEnabled(): void;
    get publicIpEnabledInput(): any;
    private _publicIps;
    get publicIps(): ActionsHostedRunnerPublicIpsList;
    private _runnerGroupId?;
    get runnerGroupId(): number;
    set runnerGroupId(value: number);
    get runnerGroupIdInput(): number;
    private _size?;
    get size(): string;
    set size(value: string);
    get sizeInput(): string;
    get status(): any;
    private _image;
    get image(): ActionsHostedRunnerImageOutputReference;
    putImage(value: ActionsHostedRunnerImage): void;
    get imageInput(): ActionsHostedRunnerImage;
    private _timeouts;
    get timeouts(): ActionsHostedRunnerTimeoutsOutputReference;
    putTimeouts(value: ActionsHostedRunnerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
