import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl#account_id DataCloudflareMagicTransitSiteAcl#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl#acl_id DataCloudflareMagicTransitSiteAcl#acl_id}
    */
    readonly aclId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl#site_id DataCloudflareMagicTransitSiteAcl#site_id}
    */
    readonly siteId: string;
}
export interface DataCloudflareMagicTransitSiteAclLan1 {
}
export declare function dataCloudflareMagicTransitSiteAclLan1ToTerraform(struct?: DataCloudflareMagicTransitSiteAclLan1): any;
export declare function dataCloudflareMagicTransitSiteAclLan1ToHclTerraform(struct?: DataCloudflareMagicTransitSiteAclLan1): any;
export declare class DataCloudflareMagicTransitSiteAclLan1OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteAclLan1 | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteAclLan1 | undefined);
    get lanId(): any;
    get lanName(): any;
    get portRanges(): any;
    get ports(): any;
    get subnets(): any;
}
export interface DataCloudflareMagicTransitSiteAclLan2 {
}
export declare function dataCloudflareMagicTransitSiteAclLan2ToTerraform(struct?: DataCloudflareMagicTransitSiteAclLan2): any;
export declare function dataCloudflareMagicTransitSiteAclLan2ToHclTerraform(struct?: DataCloudflareMagicTransitSiteAclLan2): any;
export declare class DataCloudflareMagicTransitSiteAclLan2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteAclLan2 | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteAclLan2 | undefined);
    get lanId(): any;
    get lanName(): any;
    get portRanges(): any;
    get ports(): any;
    get subnets(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl}
*/
export declare class DataCloudflareMagicTransitSiteAcl extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_acl";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcl to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteAclConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteAclConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _aclId?;
    get aclId(): string;
    set aclId(value: string);
    get aclIdInput(): string;
    get description(): any;
    get forwardLocally(): any;
    get id(): any;
    private _lan1;
    get lan1(): DataCloudflareMagicTransitSiteAclLan1OutputReference;
    private _lan2;
    get lan2(): DataCloudflareMagicTransitSiteAclLan2OutputReference;
    get name(): any;
    get protocols(): any;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    get unidirectional(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
