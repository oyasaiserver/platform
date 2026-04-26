import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2ManagedDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain#account_id R2ManagedDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain#bucket_name R2ManagedDomain#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Whether to enable public bucket access at the r2.dev domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain#enabled R2ManagedDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain#jurisdiction R2ManagedDomain#jurisdiction}
    */
    readonly jurisdiction?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain cloudflare_r2_managed_domain}
*/
export declare class R2ManagedDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_managed_domain";
    /**
    * Generates CDKTF code for importing a R2ManagedDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2ManagedDomain to import
    * @param importFromId The id of the existing R2ManagedDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2ManagedDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_managed_domain cloudflare_r2_managed_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2ManagedDomainConfig
    */
    constructor(scope: Construct, id: string, config: R2ManagedDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get bucketId(): any;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    get domain(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
