import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationProfileAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}
    */
    readonly businessAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}
    */
    readonly businessEmail: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}
    */
    readonly businessName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}
    */
    readonly businessPhone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}
    */
    readonly externalMetadata: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}
    */
    readonly organizationId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile cloudflare_organization_profile}
*/
export declare class OrganizationProfileA extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_organization_profile";
    /**
    * Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationProfileA to import
    * @param importFromId The id of the existing OrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationProfileA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile cloudflare_organization_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationProfileAConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationProfileAConfig);
    private _businessAddress?;
    get businessAddress(): string;
    set businessAddress(value: string);
    get businessAddressInput(): string;
    private _businessEmail?;
    get businessEmail(): string;
    set businessEmail(value: string);
    get businessEmailInput(): string;
    private _businessName?;
    get businessName(): string;
    set businessName(value: string);
    get businessNameInput(): string;
    private _businessPhone?;
    get businessPhone(): string;
    set businessPhone(value: string);
    get businessPhoneInput(): string;
    private _externalMetadata?;
    get externalMetadata(): string;
    set externalMetadata(value: string);
    get externalMetadataInput(): string;
    private _organizationId?;
    get organizationId(): string;
    set organizationId(value: string);
    get organizationIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
