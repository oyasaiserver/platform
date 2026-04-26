import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserConfig extends cdktf.TerraformMetaArguments {
    /**
    * The country in which the user lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#country User#country}
    */
    readonly country?: string;
    /**
    * User's first name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#first_name User#first_name}
    */
    readonly firstName?: string;
    /**
    * User's last name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#last_name User#last_name}
    */
    readonly lastName?: string;
    /**
    * User's telephone number
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#telephone User#telephone}
    */
    readonly telephone?: string;
    /**
    * The zipcode or postal code where the user lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#zipcode User#zipcode}
    */
    readonly zipcode?: string;
}
export interface UserOrganizations {
}
export declare function userOrganizationsToTerraform(struct?: UserOrganizations): any;
export declare function userOrganizationsToHclTerraform(struct?: UserOrganizations): any;
export declare class UserOrganizationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): UserOrganizations | undefined;
    set internalValue(value: UserOrganizations | undefined);
    get id(): any;
    get name(): any;
    get permissions(): any;
    get roles(): any;
    get status(): any;
}
export declare class UserOrganizationsList extends cdktf.ComplexList {
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
    get(index: number): UserOrganizationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user cloudflare_user}
*/
export declare class User extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_user";
    /**
    * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the User to import
    * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the User to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user cloudflare_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserConfig = {}
    */
    constructor(scope: Construct, id: string, config?: UserConfig);
    get betas(): any;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string;
    get hasBusinessZones(): any;
    get hasEnterpriseZones(): any;
    get hasProZones(): any;
    get id(): any;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string;
    private _organizations;
    get organizations(): UserOrganizationsList;
    get suspended(): any;
    private _telephone?;
    get telephone(): string;
    set telephone(value: string);
    resetTelephone(): void;
    get telephoneInput(): string;
    get twoFactorAuthenticationEnabled(): any;
    get twoFactorAuthenticationLocked(): any;
    private _zipcode?;
    get zipcode(): string;
    set zipcode(value: string);
    resetZipcode(): void;
    get zipcodeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
